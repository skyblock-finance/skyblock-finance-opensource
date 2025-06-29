import { z } from 'zod/v4'

import { apiResponseSchema } from '../../common'

import { quickStatusSchema, removeUselessItems, summarySchema } from './common'

const bazaarProductSchema = z.object({
	buy_summary: z.array(summarySchema),
	product_id: z.string(),
	quick_status: quickStatusSchema.pick({
		buyMovingWeek: true,
		sellMovingWeek: true,
	}),
	sell_summary: z.array(summarySchema),
})

export const bazaarResponseSchemaRuntime = apiResponseSchema.extend({
	products: z
		.record(z.string(), bazaarProductSchema)
		.transform(removeUselessItems),
})
