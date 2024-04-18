import { z } from 'zod'

import { apiResponseSchema } from '../../common'

import { perkSchema, yearSchema } from './common'

const candidateSchema = z.object({
	key: z.string(),
	name: z.string(),
	perks: z.array(perkSchema),
})

export const electionResponseSchemaRuntime = apiResponseSchema.extend({
	current: z
		.object({
			candidates: z.array(candidateSchema),
			year: yearSchema,
		})
		.optional(),
	mayor: z.object({
		election: z.object({
			candidates: z.array(
				candidateSchema.extend({
					votes: z.number(),
				}),
			),
			year: yearSchema,
		}),
		key: z.string(),
		name: z.string(),
		perks: z.array(perkSchema),
	}),
})
