import fs from 'fs/promises'
import path from 'path'

import jsonStableStringify from 'json-stable-stringify'
import { Logger } from 'tslog'

export const log = new Logger()

type Common = {
	name: string
}

const FILES: (
	| (Common & {
			type: 'simple'
			url: string
	  })
	| (Common & {
			fetch(): Promise<unknown>
			type: 'custom'
	  })
)[] = [
	{
		name: 'bazaar.json',
		type: 'simple',
		url: 'https://api.hypixel.net/skyblock/bazaar',
	},
	{
		name: 'election.json',
		type: 'simple',
		url: 'https://api.hypixel.net/resources/skyblock/election',
	},
	{
		name: 'items.json',
		type: 'simple',
		url: 'https://api.hypixel.net/resources/skyblock/items',
	},
	{
		name: 'skills.json',
		type: 'simple',
		url: 'https://api.hypixel.net/resources/skyblock/skills',
	},
]

for (const file of FILES) {
	const data = await (async () => {
		switch (file.type) {
			case 'simple': {
				log.info(`${file.name}: downloading ${file.url}`)
				return await fetch(file.url).then((request) => request.json())
			}

			case 'custom':
				log.info(`${file.name}: downloading with custom fetcher`)
				return await file.fetch()
		}
	})()

	log.info(`${file.name}: sorting JSON`)

	log.info(`${file.name}: writing to ${file.name}`)

	await fs.writeFile(
		path.join(__dirname, '..', 'data', file.name),
		jsonStableStringify(data, { space: '\t' }),
	)
}
