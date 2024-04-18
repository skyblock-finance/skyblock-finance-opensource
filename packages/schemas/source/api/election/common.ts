import { z } from 'zod'

export const perkSchema = z.object({
	description: z.string(),
	name: z.string(),
})

export const yearSchema = z.number().int()
