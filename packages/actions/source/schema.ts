import { z } from 'zod'

export const actionIoItemSchema = z
	.object({
		amount: z.number().finite(),
		id: z.string(),
		type: z.literal('item'),
	})
	.strict()

export const actionIoCurrencySchema = z
	.object({
		amount: z.number().finite(),
		id: z.enum(['bit', 'coin', 'gem', 'north-star', 'second', 'usd']),
		type: z.literal('currency'),
	})
	.strict()

export const actionIoSchema = z.discriminatedUnion('type', [
	actionIoCurrencySchema,
	actionIoItemSchema,
])

export const actionPlaceSchema = z.discriminatedUnion('type', [
	z
		.object({
			id: z.string(),
			type: z.literal('npc'),
		})
		.strict(),
	z
		.object({
			type: z.literal('website'),
			url: z.string().url(),
		})
		.strict(),
	z
		.object({
			grid: z.array(actionIoItemSchema.nullable()).length(9),
			type: z.literal('workbench'),
		})
		.strict(),
])

export const actionSchema = z
	.object({
		inputs: z.array(actionIoSchema),
		outputs: z.array(actionIoSchema),
		place: z.array(actionPlaceSchema),
	})
	.strict()
