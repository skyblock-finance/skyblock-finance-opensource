import { z } from 'zod'

export const actionIoItemSchema = z
	.object({
		amount: z.number().int().finite(),
		id: z.string(),
		type: z.literal('item'),
	})
	.strict()

export type ActionIoItem = z.output<typeof actionIoItemSchema>

export const actionIoSchema = z.discriminatedUnion('type', [
	z
		.object({
			amount: z.number().int().finite(),
			type: z.literal('bit'),
		})
		.strict(),
	z
		.object({
			amount: z.number().int().finite(),
			type: z.literal('coin'),
		})
		.strict(),
	actionIoItemSchema,
])

export type ActionIo = z.output<typeof actionIoSchema>

export const actionPlaceSchema = z.discriminatedUnion('type', [
	z
		.object({
			id: z.string(),
			type: z.literal('npc'),
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

export type Action = z.output<typeof actionSchema>
