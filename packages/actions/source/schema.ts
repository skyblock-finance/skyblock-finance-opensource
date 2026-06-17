import { z } from 'zod/v4'

export const actionIoCrystalSchema = z.strictObject({
	amount: z.number(),
	id: z.string(),
	type: z.literal('crystal'),
})

export const actionIoCurrencySchema = z.strictObject({
	amount: z.number(),
	id: z.enum([
		'bingo-point',
		'bit',
		'coin',
		'copper',
		'gem',
		'forge-second',
		'mote',
		'north-star',
		'pest',
		'second',
		'usd',
	]),
	type: z.literal('currency'),
})

export const actionIoItemSchema = z.strictObject({
	amount: z.number(),
	id: z.string(),
	type: z.literal('item'),
})

export const actionIoPetSchema = z.strictObject({
	amount: z.number(),
	id: z.string(),
	type: z.literal('pet'),
})

export const actionIoSchema = z.discriminatedUnion('type', [
	actionIoCrystalSchema,
	actionIoCurrencySchema,
	actionIoItemSchema,
	actionIoPetSchema,
])

export const npcIdSchema = z.enum([
	'ADVENTURER',
	'ALCHEMIST',
	'BINGO',
	'BUBU',
	'BULVAR',
	'EINARY',
	'ELIZABETH',
	'FISHING_MERCHANT',
	'HILDA',
	'LOTUS_EATER',
	'MARTHOS',
	'NEMO',
	'PHILLIP',
	'PLUMBER_JOE',
	'RESEARCHER_BERYL',
	'SEYMOUR',
	'SKYMART',
	'SMITHMONGER',
])

export const actionPlaceSchema = z.discriminatedUnion('type', [
	z.strictObject({
		left: actionIoItemSchema,
		right: actionIoItemSchema,
		type: z.literal('anvil'),
	}),
	z.strictObject({
		type: z.literal('forge'),
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

/**
 * NOTE: This schema uses uppercase to align 1-to-1 with the Skyblock Items API's requirements format.
 */
export const actionRequirementSchema = z.discriminatedUnion('type', [
	z.strictObject({
		collection: z.enum(['GEMSTONE' /* to be added as-needed */]),
		tier: z.int().min(1).max(10),
		type: z.literal('COLLECTION'),
	}),
	z.strictObject({
		level: z.int().min(1).max(60),
		skill: z.enum(['MINING' /* to be added as-needed */]),
		type: z.literal('SKILL'),
	}),
	z.strictObject({
		tier: z.int().min(1).max(10),
		type: z.literal('HEART_OF_THE_MOUNTAIN'),
	}),
])

export const actionSchema = z.strictObject({
	inputs: z.array(actionIoSchema),
	outputs: z.array(actionIoSchema),
	place: z.array(actionPlaceSchema),
	requirements: z.array(actionRequirementSchema).optional(),
})

export const actionDefinitionSchema = z.strictObject({
	$schema: z.string().optional(),
	actions: z.array(actionSchema),
})
