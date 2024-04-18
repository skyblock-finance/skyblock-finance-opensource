import { z } from 'zod'

import { apiResponseSchema } from '../../common'

import { levelSchema } from './common'

const skillSchema = z
	.object({
		description: z.string(),
		levels: z.array(levelSchema.strict()),
		maxLevel: z.number(),
		name: z.string(),
	})
	.strict()

export const skillsResponseSchemaStrict = apiResponseSchema
	.extend({
		skills: z
			.object({
				ALCHEMY: skillSchema,
				CARPENTRY: skillSchema,
				COMBAT: skillSchema,
				ENCHANTING: skillSchema,
				FARMING: skillSchema,
				FISHING: skillSchema,
				FORAGING: skillSchema,
				MINING: skillSchema,
				RUNECRAFTING: skillSchema,
				SOCIAL: skillSchema,
				TAMING: skillSchema,
			})
			.strict(),
		version: z.string().regex(/\d+.\d+.\d+/),
	})
	.strict()
