import { z } from 'zod/v4'

export const levelSchema = z.object({
	level: z.number(),
	totalExpRequired: z.number(),
	unlocks: z.array(z.string()),
})
