import { z } from 'zod/v4'

import { apiResponseSchema } from '../../common'

import { levelSchema } from './common'

const skillSchema = z.object({
	description: z.string(),
	levels: z.array(levelSchema),
	maxLevel: z.number(),
	name: z.string(),
})

export const skillsResponseSchemaRuntime = apiResponseSchema.extend({
	skills: z.record(z.string(), skillSchema),
	version: z.string(),
})
