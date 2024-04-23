import fs from 'fs/promises'
import path from 'path'
import jsonStableStringify from 'json-stable-stringify'

import _ from 'lodash'
import { Logger } from 'tslog'
import { z } from 'zod'

import {
	bazaarResponseSchemaRuntime,
	bazaarResponseSchemaStrict,
} from '../source/api/bazaar'
import {
	electionResponseSchemaRuntime,
	electionResponseSchemaStrict,
} from '../source/api/election'
import {
	itemsResponseSchemaRuntime,
	itemsResponseSchemaStrict,
} from '../source/api/items'
import {
	skillsResponseSchemaRuntime,
	skillsResponseSchemaStrict,
} from '../source/api/skills'

export const log = new Logger()

const TO_CHECK: {
	file: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getMessage: (result: any) => string
	isEnabled: boolean
	basicSchema?: z.ZodSchema<unknown>
	strictSchema: z.ZodSchema<unknown>
	runtimeSchema: z.ZodSchema<unknown>
}[] = [
	{
		file: 'bazaar.json',
		getMessage: (result: z.output<typeof bazaarResponseSchemaRuntime>) =>
			`found ${Object.keys(result.products).length} items last updated at ${result.lastUpdated.toISOString()}`,
		isEnabled: true,
		runtimeSchema: bazaarResponseSchemaRuntime,
		strictSchema: bazaarResponseSchemaStrict,
	},
	{
		file: 'election.json',
		getMessage: (result: z.output<typeof electionResponseSchemaRuntime>) =>
			`found current mayor ${result.mayor.name} and election for year ${
				result.current?.year ?? 'N/A'
			}`,
		isEnabled: true,
		runtimeSchema: electionResponseSchemaRuntime,
		strictSchema: electionResponseSchemaStrict,
	},
	{
		file: 'items.json',
		getMessage: (result: z.output<typeof itemsResponseSchemaRuntime>) =>
			`found ${result.items.length} items`,
		isEnabled: true,
		runtimeSchema: itemsResponseSchemaRuntime,
		strictSchema: itemsResponseSchemaStrict,
	},
	{
		file: 'skills.json',
		getMessage: (result: z.output<typeof skillsResponseSchemaRuntime>) =>
			`found skills ${JSON.stringify(Object.keys(result.skills))}`,
		isEnabled: true,
		runtimeSchema: skillsResponseSchemaRuntime,
		strictSchema: skillsResponseSchemaStrict,
	},
]

const checkSchema = async ({
	file,
	getMessage,
	json,
	schema,
	type,
}: {
	file: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getMessage(result: any): string
	json: unknown
	schema: z.ZodSchema<unknown>
	type: string
}) => {
	const fileName = file.replace('.json', `.parsed.${type}.json`)

	log.info(`${fileName}: parsing zod schema`)
	const resultRuntime = await schema.parseAsync(json)

	log.info(`${fileName}: all good (${getMessage(resultRuntime)})`)
	log.info(`${fileName}: writing parsed data`)
	await fs.writeFile(
		path.join(__dirname, '..', 'data', fileName),
		jsonStableStringify(resultRuntime, { space: '\t' }),
	)
}

for (const toCheck of TO_CHECK) {
	if (!toCheck.isEnabled) {
		log.warn(`${toCheck.file} is disabled, skipping`)
		continue
	}

	log.info(`${toCheck.file}: loading`)
	const content = await fs.readFile(
		path.join(__dirname, '..', 'data', toCheck.file),
	)
	log.info(`${toCheck.file}: parsing JSON`)
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const json = JSON.parse(content.toString())

	try {
		if (toCheck.basicSchema)
			await checkSchema({
				file: toCheck.file,
				getMessage: toCheck.getMessage,
				json,
				schema: toCheck.basicSchema,
				type: 'basic',
			})
		await checkSchema({
			file: toCheck.file,
			getMessage: toCheck.getMessage,
			json,
			schema: toCheck.runtimeSchema,
			type: 'runtime',
		})
		await checkSchema({
			file: toCheck.file,
			getMessage: toCheck.getMessage,
			json,
			schema: toCheck.strictSchema,
			type: 'strict',
		})
	} catch (error) {
		const e = error as z.ZodError<unknown>

		if (e.issues) {
			log.error(
				e.issues
					.map((i) => ({
						...i,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						'=': _.get(json, i.path),
					}))
					.filter((_, index) => index < 3),
			)

			log.info(`failed with ${e.issues.length} issues`)
		} else log.error(error)

		process.exit(1)
	}
}
