import z from 'zod/v4'

export const resourcePacksResponseSchemaRuntime = z.object({
	packs: z.array(
		z.object({
			deployId: z.uuid(),
			id: z.string(),
			lastUpdated: z.int().transform((ms) => new Date(ms)),
			versions: z.array(
				z.object({
					hash: z.string(),
					packFormat: z.int(),
					url: z.url().startsWith('https://'),
				}),
			),
		}),
	),
	success: z.boolean(),
})
