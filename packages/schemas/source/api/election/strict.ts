import { z } from 'zod'

import { apiResponseSchema } from '../../common'

import { perkSchema, yearSchema } from './common'

enum MayorKey {
	DERP = 'derp',
	DUNGEONS = 'dungeons',
	ECONOMIST = 'economist',
	EVENTS = 'events',
	FARMING = 'farming',
	FISHING = 'fishing',
	JERRY = 'jerry',
	MINING = 'mining',
	PETS = 'pets',
	SHADY = 'shady',
	SLAYER = 'slayer',
	WIZARD = 'wizard',
}

const candidateSchema = z
	.object({
		key: z.nativeEnum(MayorKey),
		name: z.string(),
		perks: z.array(perkSchema.strict()),
		votes: z.number().int(),
	})
	.strict()

export const electionResponseSchemaStrict = apiResponseSchema
	.extend({
		current: z
			.object({
				candidates: z.array(candidateSchema),
				year: yearSchema,
			})
			.strict()
			.optional(),
		mayor: z
			.object({
				election: z
					.object({
						candidates: z.array(
							candidateSchema.extend({
								votes: z.number(),
							}),
						),
						year: yearSchema,
					})
					.strict(),
				key: z.nativeEnum(MayorKey),
				name: z.string(),
				perks: z.array(perkSchema.strict()),
			})
			.strict(),
	})
	.strict()
