import { z } from 'zod'

export const levelSchema = z.object({
	level: z.number(),
	totalExpRequired: z.number(),
	unlocks: z.array(z.string()),
})
