import { z } from 'zod/v4'

export const actionIoItemSchema = z
	.object({
		amount: z.number(),
		id: z.string(),
		type: z.literal('item'),
	})
	.strict()

export const actionIoCurrencySchema = z
	.object({
		amount: z.number(),
		id: z.enum(['bit', 'coin', 'gem', 'north-star', 'pest', 'second', 'usd']),
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
			left: actionIoItemSchema,
			right: actionIoItemSchema,
			type: z.literal('anvil'),
		})
		.strict(),
	z
		.object({
			type: z.literal('fusion-machine'),
		})
		.strict(),
	z
		.object({
			dailyLimit: z.number().int().optional(),
			id: z.string(),
			type: z.literal('npc'),
		})
		.strict(),
	z
		.object({
			type: z.literal('website'),
			url: z.url(),
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

export const actionDefinitionSchema = z
	.object({
		actions: z.array(actionSchema),
		$schema: z.string().optional(),
	})
	.strict()
