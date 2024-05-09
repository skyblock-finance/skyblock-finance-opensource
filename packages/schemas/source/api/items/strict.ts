import { z } from 'zod'

import {
	CrimsonIsleFaction,
	CrystalType,
	DungeonType,
	EssenceType,
	GemSlotType,
	ItemCategory,
	ItemTier,
	MinionType,
	PrivateIslandType,
	SkillType,
	SlayerBossType,
} from '../../enums'
import { Soulbound } from '../../enums/soulbound'
import { UPPER_SNAKE_CASE_REGEX } from '../bazaar/common'
import { apiResponseSchema } from '../../common'

import { skinSchema } from './common'
import { EasterRabbit } from '../../enums/easter'

const statsSchemaStrict = z
	.preprocess(
		(o) =>
			typeof o === 'object' && o !== null
				? Object.fromEntries(
						Object.entries(o).map(([key, value]) => [key.toUpperCase(), value]),
					)
				: undefined,
		z
			.object({
				ABILITY_DAMAGE_PERCENT: z.number().int().optional(),
				ATTACK_SPEED: z.number().int().optional(),
				BONUS_PEST_CHANCE: z.number().int().optional(),
				BREAKING_POWER: z.number().int().optional(),
				CARROT_FORTUNE: z.number().int().optional(),
				COCOA_BEANS_FORTUNE: z.number().int().optional(),
				COLD_RESISTANCE: z.number().int().optional(),
				COMBAT_WISDOM: z.number().int().optional(),
				CRITICAL_CHANCE: z.number().int().optional(),
				CRITICAL_DAMAGE: z.number().int().optional(),
				DAMAGE: z.number().int().optional(),
				DEFENSE: z.number().int().optional(),
				FARMING_FORTUNE: z.number().int().optional(),
				FARMING_WISDOM: z.number().int().optional(),
				FEROCITY: z.number().int().optional(),
				FISHING_SPEED: z.number().int().optional(),
				FISHING_WISDOM: z.number().int().optional(),
				FORAGING_WISDOM: z.number().int().optional(),
				HEALTH_REGENERATION: z.number().int().optional(),
				HEALTH: z.number().int().optional(),
				INTELLIGENCE: z.number().int().optional(),
				MAGIC_FIND: z.number().int().optional(),
				MELON_FORTUNE: z.number().int().optional(),
				MENDING: z.number().int().optional(),
				MINING_FORTUNE: z.number().int().optional(),
				MINING_SPEED: z.number().int().optional(),
				PET_LUCK: z.number().int().optional(),
				POTATO_FORTUNE: z.number().int().optional(),
				PUMPKIN_FORTUNE: z.number().int().optional(),
				RIFT_DAMAGE: z.number().int().optional(),
				RIFT_HEALTH: z.number().int().optional(),
				RIFT_INTELLIGENCE: z.number().int().optional(),
				RIFT_MANA_REGEN: z.number().int().optional(),
				RIFT_TIME: z.number().int().optional(),
				RIFT_WALK_SPEED: z.number().int().optional(),
				SEA_CREATURE_CHANCE: z.number().optional(), // float
				STRENGTH: z.number().int().optional(),
				SWING_RANGE: z.number().optional(), // float
				TRUE_DEFENSE: z.number().optional(), // float
				VITALITY: z.number().int().optional(),
				WALK_SPEED: z.number().int().optional(),
				WEAPON_ABILITY_DAMAGE: z.number().int().optional(),
				WHEAT_FORTUNE: z.number().int().optional(),
			})
			.strict(),
	)
	.optional()

export const itemsResponseSchemaStrict = apiResponseSchema
	.extend({
		items: z.array(
			z
				.object({
					ability_damage_scaling: z.number().optional(), // float
					can_auction: z.boolean().optional(),
					can_burn_in_furnace: z.boolean().optional(),
					can_have_attributes: z.boolean().optional(),
					can_have_power_scroll: z.boolean().optional(),
					can_interact_right_click: z.boolean().optional(),
					can_interact_entity: z.boolean().optional(),
					can_interact: z.boolean().optional(),
					can_place: z.boolean().optional(),
					can_recombobulate: z.boolean().optional(),
					can_trade: z.boolean().optional(),
					has_uuid: z.boolean().optional(),
					cannot_reforge: z.boolean().optional(),
					catacombs_requirements: z
						.array(
							z
								.object({
									dungeon_type: z.nativeEnum(DungeonType),
									level: z.number().int().min(0),
									type: z.enum(['DUNGEON_SKILL']),
								})
								.strict(),
						)
						.optional(),
					category: z
						.preprocess((value) => {
							if (value === 'NONE') return undefined
							return value
						}, z.nativeEnum(ItemCategory).optional())
						.optional(),
					color: z
						.string()
						.regex(/\d+,\d+,\d+/)
						.optional(),
					crystal: z.nativeEnum(CrystalType).optional(),
					description: z.string().optional(),
					double_tap_to_drop: z.boolean().optional(),
					dungeon_item: z.boolean().optional(),
					dungeon_item_conversion_cost: z
						.object({
							amount: z.number().int().min(1),
							essence_type: z.nativeEnum(EssenceType),
						})
						.strict()
						.optional(),
					durability: z.number().optional(),
					enchantments: z
						.object({
							aiming: z.number().int().optional(), // not supposed to exist...
							aqua_affinity: z.number().int().optional(),
							big_brain: z.number().int().optional(),
							counter_strike: z.number().int().optional(),
							depth_strider: z.number().int().optional(),
							efficiency: z.number().int().optional(),
							feather_falling: z.number().int().optional(),
							first_strike: z.number().int().optional(),
							power: z.number().int().optional(),
							quantum: z.number().int().optional(),
							rainbow: z.number().int().optional(),
							reflection: z.number().int().optional(),
							replenish: z.number().int().optional(),
							respiration: z.number().int().optional(),
							scavenger: z.number().int().optional(),
							sharpness: z.number().int().optional(),
							telekinesis: z.number().int().optional(),
							transylvanian: z.number().int().optional(),
							ultimate_the_one: z.number().int().optional(),
							vampirism: z.number().int().optional(),
							vicious: z.number().int().optional(),
						})
						.strict()
						.optional(),
					furniture: z
						.string()
						.regex(/[A-Z][A-Z_]+[A-Z]/)
						.optional(),
					gear_score: z.number().int().optional(),
					gemstone_slots: z
						.array(
							z
								.object({
									costs: z
										.array(
											z.discriminatedUnion('type', [
												z
													.object({
														coins: z.number().int().min(1),
														type: z.literal('COINS'),
													})
													.strict(),
												z
													.object({
														amount: z.number().int().min(1),
														item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
														type: z.literal('ITEM'),
													})
													.strict(),
											]),
										)
										.optional(),
									slot_type: z.nativeEnum(GemSlotType),
								})
								.strict(),
						)
						.optional(),
					generator_tier: z.number().int().min(1).max(12).optional(),
					generator: z.nativeEnum(MinionType).optional(),
					glowing: z.boolean().optional(),
					hide_from_viewrecipe_command: z.boolean().optional(),
					id: z.string(),
					item_durability: z.number().int().optional(),
					item_specific: z
						.object({
							bonus_experience_chance: z.number().int().optional(),
							bonus_fishing_speed_per_bucket: z.number().int().optional(),
							bonus_fishing_speed: z.number().int().optional(),
							bonus_heal: z.number().int().optional(),
							bonus_rift_damage_vs_vampire: z.number().int().optional(),
							bundled_amount: z.literal(9).optional(),
							bundled_item_id: z.literal('ECCENTRIC_PAINTING').optional(),
							can_play_snake: z.boolean().optional(),
							can_play_tictactoe: z.boolean().optional(),
							charges: z.number().int().optional(),
							chisel_charges: z.number().int().optional(),
							colors: z.array(z.string()).optional(),
							consumed_item: z.string().optional(),
							cooldown_seconds: z.number().int().optional(),
							cycle_back: z.boolean().optional(),
							damage_multiplier: z.number().optional(),
							damage_per_player: z.number().int().optional(),
							duration_seconds: z.number().int().optional(),
							duration_ticks: z.number().int().optional(),
							effect_duration_seconds: z.number().int().optional(),
							experience_gained: z.number().int().optional(),
							extra_pelts: z.number().int().min(0).optional(),
							flex_skins: z
								.array(
									z
										.object({
											description: z.string(),
											name: z.string(),
											skin_value: z.string(),
										})
										.strict(),
								)
								.optional(),
							has_contact_directory: z.boolean().optional(), // Abiphone
							has_dnd: z.boolean().optional(), // Abiphone
							heal: z.number().int().optional(),
							heal_on_hit: z.number().optional(),
							hearts_reduction: z.number().optional(),
							intelligence: z.number().int().optional(),
							mana_cost: z.number().int().optional(),
							mana_refund: z.number().int().optional(),
							mana_regen_per_player: z.number().int().optional(),
							max_bonus_fishing_speed: z.number().int().optional(),
							max_contacts: z.number().int().optional(), // Abiphone
							max_musicdiscs: z.number().int().optional(), // Abiphone
							max_players: z.number().int().optional(),
							max_other_players: z.number().int().optional(),
							memorable_event_key: z
								.enum([
									'community_center_refurbishment',
									'inflation_fixer',
									'pet_care_expansion',
									'repair_wizard_portal',
									'winter_2023',
								])
								.optional(),
							motes_on_join_per_eat: z.number().int().optional(),
							motes_percent_per_eat: z.number().int().optional(),
							permanent_crops_farming_fortune: z.number().int().optional(),
							permanent_health: z.number().int().optional(),
							piece_offset: z.number().int().optional(),
							portal: z
								.object({
									description_name: z.string().optional(),
									destination_mode: z.string(),
									holo_name: z.string(),
									location_tag: z.string().optional(),
									objective_requirement: z
										.object({
											objective_id: z.enum(['go_to_base_camp']),
											objective_status: z.enum(['COMPLETE']),
										})
										.strict()
										.optional(),
									offset: z.string().optional(),
									schematic_file: z.string(),
									skill_requirement: z.object({
										level: z.number().int().min(0),
										skill: z.nativeEnum(SkillType),
									}),
								})
								.strict()
								.optional(),
							range: z.number().int().optional(),
							range_blocks: z.number().int().optional(),
							regained_rift_time: z.number().int().optional(),
							rift_stats: z
								.object({
									rift_damage: z.number().int().optional(),
									rift_walk_speed: z.number().int().optional(),
								})
								.strict()
								.optional(),
							rift_time: z.number().int().optional(),
							rift_time_gain: z.number().int().optional(),
							rift_time_per_eat: z.number().int().optional(),
							rift_time_regain_on_kill: z.number().int().optional(),
							scaling: z
								.object({
									tiers: z.array(z.unknown()).optional(),
								})
								.strict()
								.optional(),
							slow_duration_seconds: z.number().int().optional(),
							speed_boost: z.number().int().optional(),
							speed_duration_seconds: z.number().int().optional(),
							speed_on_farming_island: z.number().int().min(0).optional(),
							stats: z
								.object({
									attack_speed: z.number().int().optional(),
									critical_damage: z.number().int().optional(),
									strength: z.number().int().optional(),
									walk_speed: z.number().int().optional(),
								})
								.strict()
								.optional(),
							stats_on_rift: z
								.object({
									rift_intelligence: z.number().int().optional(),
									rift_mana_regen: z.number().int().optional(),
									rift_time: z.number().int().optional(),
								})
								.strict()
								.optional(),
							tick_interval: z.number().int().optional(),
							tiers: z
								.record(
									z
										.object({
											stats: statsSchemaStrict,
										})
										.strict(),
								)
								.optional(),
						})
						.strict()
						.optional(),
					lose_motes_value_on_transfer: z.boolean().optional(),
					material: z.string().regex(/[A-Z][A-Z_]+[A-Z]/),
					motes_sell_price: z.number().int().optional(),
					museum: z.boolean().optional(),
					name: z.string(),
					npc_sell_price: z.number().optional(),
					rarity_salvageable: z.boolean().optional(),
					prestige: z
						.object({
							costs: z.array(
								z.union([
									z.object({
										amount: z.number().int().min(1),
										essence_type: z.nativeEnum(EssenceType),
									}),
									z.object({
										amount: z.number().int().min(1),
										item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
									}),
								]),
							),
							item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
						})
						.strict()
						.optional(),
					private_island: z.nativeEnum(PrivateIslandType).optional(),
					origin: z.enum(['BINGO', 'RIFT']).optional(),
					rift_transferrable: z.boolean().optional(),
					serializable: z.boolean().optional(),
					skin: skinSchema.optional(),
					soulbound: z.nativeEnum(Soulbound).optional(),
					stats: statsSchemaStrict.optional(),
					salvage: z
						.union([
							z
								.object({
									amount: z.number().int().min(1),
									essence_type: z.nativeEnum(EssenceType),
								})
								.strict(),
							z
								.object({
									amount: z.number().int().min(1),
									item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
								})
								.strict(),
						])
						.optional(),
					salvageable_from_recipe: z.boolean().optional(),
					salvages: z
						.array(
							z.union([
								z
									.object({
										amount: z.number().int().min(1),
										essence_type: z.nativeEnum(EssenceType),
										type: z.literal('ESSENCE'),
									})
									.strict(),
								z
									.object({
										amount: z.number().int().min(1),
										item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
										type: z.literal('ITEM'),
									})
									.strict(),
							]),
						)
						.optional(),
					sword_type: z
						.enum(['AXE', 'DAGGER', 'KARAMBIT', 'KATANA', 'SCYTHE'])
						.optional(),
					tier: z.nativeEnum(ItemTier).optional(),
					tiered_stats: z
						.object({
							ATTACK_SPEED: z.array(z.number().int()).optional(),
							CRITICAL_CHANCE: z.array(z.number().int()).optional(),
							CRITICAL_DAMAGE: z.array(z.number().int()).optional(),
							DAMAGE: z.array(z.number().int()).optional(),
							DEFENSE: z.array(z.number().int()).optional(),
							HEALTH: z.array(z.number().int()).optional(),
							INTELLIGENCE: z.array(z.number().int()).optional(),
							STRENGTH: z.array(z.number().int()).optional(),
							WALK_SPEED: z.array(z.number().int()).optional(),
							WEAPON_ABILITY_DAMAGE: z.array(z.number().int()).optional(),
						})
						.strict()
						.optional(),
					unstackable: z.boolean().optional(),
					upgrade_costs: z
						.array(
							z.array(
								z.union([
									z
										.object({
											amount: z.number().int().min(1),
											essence_type: z.nativeEnum(EssenceType),
											type: z.literal('ESSENCE'),
										})
										.strict(),
									z.object({
										amount: z.number().int().min(1),
										item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
									}),
								]),
							),
						)
						.optional(),
					requirements: z
						.array(
							z.discriminatedUnion('type', [
								z
									.object({
										collection: z.enum([
											'CACTUS',
											'COAL',
											'HARD_STONE',
											'ICE',
											'SAND',
											'SLIME_BALL',
										]),
										tier: z.number().int().min(1),
										type: z.literal('COLLECTION'),
									})
									.strict(),
								z
									.object({
										faction: z.nativeEnum(CrimsonIsleFaction),
										reputation: z.number().int().min(1),
										type: z.literal('CRIMSON_ISLE_REPUTATION'),
									})
									.strict(),
								z
									.object({
										dungeon_type: z.nativeEnum(DungeonType),
										level: z.number().int().min(1),
										type: z.literal('DUNGEON_SKILL'),
									})
									.strict(),
								z
									.object({
										dungeon_type: z.nativeEnum(DungeonType),
										tier: z.number().int().min(1),
										type: z.literal('DUNGEON_TIER'),
									})
									.strict(),
								z
									.object({
										rabbit: z.nativeEnum(EasterRabbit),
										type: z.literal('EASTER_RABBIT'),
									})
									.strict(),
								z
									.object({
										level: z.number().int().min(1),
										type: z.literal('GARDEN_LEVEL'),
									})
									.strict(),
								z
									.object({
										tier: z.number().int().min(1),
										type: z.literal('HEART_OF_THE_MOUNTAIN'),
									})
									.strict(),
								z
									.object({
										type: z.literal('MELODY_HAIR'),
									})
									.strict(),
								z
									.object({
										minimum_age: z.number().int(),
										minimum_age_unit: z.enum(['DAYS']),
										type: z.literal('PROFILE_AGE'),
									})
									.strict(),
								z
									.object({
										level: z.number().int().min(1),
										skill: z.nativeEnum(SkillType),
										type: z.literal('SKILL'),
									})
									.strict(),
								z
									.object({
										level: z.number().int().min(1),
										slayer_boss_type: z.nativeEnum(SlayerBossType),
										type: z.literal('SLAYER'),
									})
									.strict(),
								z
									.object({
										mode: z.enum(['I', 'II', 'III']),
										type: z.literal('TARGET_PRACTICE'),
									})
									.strict(),
								z
									.object({
										reward: z.enum(['BRONZE', 'SILVER', 'GOLD', 'DIAMOND']),
										type: z.literal('TROPHY_FISHING'),
									})
									.strict(),
							]),
						)
						.optional(),
				})
				.strict(),
		),
	})
	.strict()
