import { z } from 'zod'

import { GemSlotType } from '../../enums'
import { Soulbound } from '../../enums/soulbound'
import { apiResponseSchema } from '../../common'

import { skinSchema } from './common'

const itemSchema = z.object({
	can_have_attributes: z.boolean().optional(),
	category: z.string().optional(),
	description: z.string().optional(),
	dungeon_item: z.boolean().optional(),
	gemstone_slots: z
		.array(
			z.object({
				costs: z
					.array(
						z.discriminatedUnion('type', [
							z.object({
								coins: z.number().int().min(1),
								type: z.literal('COINS'),
							}),
							z.object({
								amount: z.number().int().min(1),
								item_id: z.string(),
								type: z.literal('ITEM'),
							}),
						]),
					)
					.optional(),
				slot_type: z.nativeEnum(GemSlotType),
			}),
		)
		.optional(),
	generator_tier: z.number().int().optional(),
	generator: z.string().optional(),
	glowing: z.boolean().optional(),
	id: z.string(),
	material: z.string(),
	museum: z.boolean().optional(),
	name: z.string(),
	npc_sell_price: z.number().optional(),
	requirements: z
		.array(
			z
				.object({
					type: z.string(),
				})
				.passthrough(),
		)
		.optional(),
	skin: skinSchema.optional(),
	soulbound: z.nativeEnum(Soulbound).optional(),
	tier: z.string().optional(),
	unstackable: z.boolean().optional(),
})

export const itemsResponseSchemaRuntime = apiResponseSchema.extend({
	items: z.array(itemSchema),
})
