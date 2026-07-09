import z from 'zod/v4'

export const resourcePacksResponseSchemaStrict = z.strictObject({
	packs: z.array(
		z.strictObject({
			deployId: z.uuid(),
			id: z.enum(['SkyBlock']),
			lastUpdated: z.int().transform((ms) => new Date(ms)),
			versions: z.array(
				z.strictObject({
					hash: z.string().length(40),
					packFormat: z.union([z.literal(75), z.literal(84), z.literal(88)]),
					url: z
						.url()
						.startsWith('https://resourcepacks.hypixel.net/')
						.endsWith('.zip'),
				}),
			),
		}),
	),
	success: z.literal(true),
})
