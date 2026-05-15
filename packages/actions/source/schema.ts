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
		id: z.enum([
			'bit',
			'coin',
			'copper',
			'gem',
			'north-star',
			'pest',
			'second',
			'usd',
		]),
		type: z.literal('currency'),
	})
	.strict()

export const actionIoSchema = z.discriminatedUnion('type', [
	actionIoCurrencySchema,
	actionIoItemSchema,
])

export const npcIdSchema = z.enum([
	'ALCHEMIST',
	'ELIZABETH',
	'EINARY',
	'PHILLIP',
	'SKYMART',
])

export const actionPlaceSchema = z.discriminatedUnion('type', [
	z.strictObject({
		left: actionIoItemSchema,
		right: actionIoItemSchema,
		type: z.literal('anvil'),
	}),
	z.strictObject({
		id: npcIdSchema,
		type: z.literal('npc'),
	}),
	z.strictObject({
		type: z.literal('website'),
		url: z.url(),
	}),
	z.strictObject({
		grid: z.array(actionIoItemSchema.nullable()).length(9),
		type: z.literal('workbench'),
	}),
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
