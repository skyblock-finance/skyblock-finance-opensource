import { z } from 'zod'

export const UPPER_SNAKE_CASE_REGEX = /[A-Z]+(_[A-Z]+)*/

export const summarySchema = z.object({
	amount: z.number().int(),
	orders: z.number().int(),
	pricePerUnit: z.number(),
})

export const quickStatusSchema = z.object({
	buyMovingWeek: z.number().int(),
	buyOrders: z.number().int(),
	buyPrice: z.number(),
	buyVolume: z.number().int(),
	productId: z.string().regex(UPPER_SNAKE_CASE_REGEX),
	sellMovingWeek: z.number().int(),
	sellOrders: z.number().int(),
	sellPrice: z.number(),
	sellVolume: z.number().int(),
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeUselessItems = <T extends Record<string, any>>(data: T): T =>
	Object.fromEntries(
		// remove weird useless items from response
		Object.entries(data).filter(
			([key]) =>
				key !== 'BAZAAR_COOKIE' && key !== 'ENCHANTED_CARROT_ON_A_STICK',
		),
	) as T
