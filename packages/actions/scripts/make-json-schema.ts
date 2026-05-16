import fs from 'node:fs/promises'
import path from 'node:path'

import jsonStableStringify from 'json-stable-stringify'
import z from 'zod/v4'

import { actionDefinitionSchema } from '../source/schema'

const jsonSchema = z.toJSONSchema(actionDefinitionSchema)

const run = async () => {
	const file = path.resolve(__dirname, '../data/$schema.json')

	await fs.writeFile(file, jsonStableStringify(jsonSchema, { space: '\t' })!)

	console.log(`successfully re-created ${file}`)
}

void run()
