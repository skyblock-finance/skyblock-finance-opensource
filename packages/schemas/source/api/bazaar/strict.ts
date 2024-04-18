import { z } from 'zod'

import { apiResponseSchema } from '../../common'

import {
	quickStatusSchema,
	removeUselessItems,
	summarySchema,
	UPPER_SNAKE_CASE_REGEX,
} from './common'

const bazaarProductSchema = z
	.object({
		buy_summary: z.array(summarySchema.strict()),
		product_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
		quick_status: quickStatusSchema,
		sell_summary: z.array(summarySchema.strict()),
	})
	.strict()

export const bazaarResponseSchemaStrict = apiResponseSchema
	.extend({
		products: z.record(bazaarProductSchema).transform(removeUselessItems),
	})
	.strict()
