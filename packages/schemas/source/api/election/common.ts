import { z } from 'zod/v4'

export const perkSchema = z.object({
	description: z.string(),
	name: z.string(),
})

export const yearSchema = z.number().int()
