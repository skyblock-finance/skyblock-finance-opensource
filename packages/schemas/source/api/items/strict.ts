import { z } from 'zod/v4'

import { apiResponseSchema } from '../../common'
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
import { EasterRabbit } from '../../enums/easter'
import { Soulbound } from '../../enums/soulbound'
import { UPPER_SNAKE_CASE_REGEX } from '../bazaar/common'

import { skinSchema } from './common'

const requirementsSchema = z.array(
	z.discriminatedUnion('type', [
		z.strictObject({
			get requirements(): unknown {
				return requirementsSchema
			},
			type: z.literal('ANY_OF'), // FIXME: explain difference to ONE_OF‽‽‽
		}),
		z.strictObject({
			level: z.int().max(6),
			type: z.literal('CHOCOLATE_FACTORY'),
		}),
		z.strictObject({
			collection: z.enum([
				'CACTUS',
				'COAL',
				'GOLD_INGOT',
				'HARD_STONE',
				'ICE',
				'LOTUS',
				'SAND',
				'SLIME_BALL',
				'UMBER',
			]),
			tier: z.int().min(1),
			type: z.literal('COLLECTION'),
		}),
		z.strictObject({
			faction: z.enum(CrimsonIsleFaction),
			reputation: z.int().min(1),
			type: z.literal('CRIMSON_ISLE_REPUTATION'),
		}),
		z.strictObject({
			amount: z.int(),
			dungeon_type: z.enum(DungeonType),
			tier: z.int().min(1).max(7),
			type: z.literal('DUNGEON_BOSS_COLLECTION'),
		}),
		z.strictObject({
			dungeon_type: z.enum(DungeonType),
			level: z.int().min(1),
			type: z.literal('DUNGEON_SKILL'),
		}),
		z.strictObject({
			dungeon_type: z.enum(DungeonType),
			tier: z.int().min(1),
			type: z.literal('DUNGEON_TIER'),
		}),
		z.strictObject({
			rabbit: z.enum(EasterRabbit),
			type: z.literal('EASTER_RABBIT'),
		}),
		z.strictObject({
			level: z.int().min(1),
			type: z.literal('GARDEN_LEVEL'),
		}),
		z.strictObject({
			tier: z.int().min(1),
			type: z.literal('HEART_OF_THE_MOUNTAIN'),
		}),
		z.strictObject({
			kuudra_tier: z.enum(['NONE', 'FIERY', 'BURNING', 'HOT', 'INFERNAL']),
			type: z.literal('KUUDRA_COMPLETION'),
		}),
		z.strictObject({
			type: z.literal('MELODY_HAIR'),
		}),
		z.strictObject({
			lore_index: z.int(),
			get requirements(): unknown {
				return requirementsSchema
			},
			type: z.literal('ONE_OF'),
		}),
		z.strictObject({
			minimum_age: z.int(),
			minimum_age_unit: z.enum(['DAYS']),
			type: z.literal('PROFILE_AGE'),
		}),
		z.strictObject({
			profile_type: z.enum(['ISLAND']),
			type: z.literal('PROFILE_TYPE'),
		}),
		z.strictObject({
			quest: z.enum(['reach_fishing_5', 'talk_to_dulin_1', 'talk_to_rhys']),
			type: z.literal('QUEST_COMPLETE'),
		}),
		z.strictObject({
			level: z.int().min(1),
			skill: z.enum(SkillType),
			type: z.literal('SKILL'),
		}),
		z.strictObject({
			level: z.int().min(1),
			slayer_boss_type: z.enum(SlayerBossType),
			type: z.literal('SLAYER'),
		}),
		z.strictObject({
			mode: z.enum(['I', 'II', 'III']),
			type: z.literal('TARGET_PRACTICE'),
		}),
		z.strictObject({
			reward: z.enum(['BRONZE', 'SILVER', 'GOLD', 'DIAMOND']),
			trophy_type: z.enum(['FROG', 'LAVA']).optional(),
			type: z.literal('TROPHY_FISHING'),
		}),
	]),
)

const statsSchemaStrict = z
	.preprocess(
		(o) =>
			typeof o === 'object' && o !== null
				? Object.fromEntries(
						Object.entries(o).map(([key, value]) => [key.toUpperCase(), value]),
					)
				: o,
		z.record(
			z.enum([
				'ABILITY_DAMAGE_PERCENT',
				'ALCHEMY_WISDOM',
				'ATTACK_SPEED',
				'BLOCK_FORTUNE',
				'BONUS_PEST_CHANCE',
				'BREAKING_POWER',
				'CACTUS_FORTUNE',
				'CARROT_FORTUNE',
				'COCOA_BEANS_FORTUNE',
				'COLD_RESISTANCE',
				'COMBAT_WISDOM',
				'CRITICAL_CHANCE',
				'CRITICAL_DAMAGE',
				'DAMAGE',
				'DEFENSE',
				'DOUBLE_HOOK_CHANCE',
				'DWARVEN_METAL_FORTUNE',
				'FARMING_FORTUNE',
				'FARMING_WISDOM',
				'FEAR',
				'FEROCITY',
				'FIG_FORTUNE',
				'FISHING_SPEED',
				'FISHING_WISDOM',
				'FORAGING_FORTUNE',
				'FORAGING_WISDOM',
				'GEMSTONE_FORTUNE',
				'HEALTH',
				'HEALTH_REGENERATION',
				'HEAT_RESISTANCE',
				'INTELLIGENCE',
				'MAGIC_FIND',
				'MANGROVE_FORTUNE',
				'MELON_FORTUNE',
				'MENDING',
				'MINING_FORTUNE',
				'MINING_SPEED',
				'MUSHROOM_FORTUNE',
				'NETHER_STALK_FORTUNE',
				'ORE_FORTUNE',
				'PET_LUCK',
				'POTATO_FORTUNE',
				'PRESSURE_RESISTANCE',
				'PRISTINE',
				'PULL',
				'PUMPKIN_FORTUNE',
				'RESPIRATION',
				'RIFT_DAMAGE',
				'RIFT_HEALTH',
				'RIFT_INTELLIGENCE',
				'RIFT_MANA_REGEN',
				'RIFT_TIME',
				'RIFT_WALK_SPEED',
				'SEA_CREATURE_CHANCE',
				'STRENGTH',
				'SUGAR_CANE_FORTUNE',
				'SWEEP',
				'SWING_RANGE',
				'TRACKING',
				'TREASURE_CHANCE',
				'TROPHY_FISH_CHANCE',
				'TRUE_DEFENSE',
				'VITALITY',
				'WALK_SPEED',
				'WEAPON_ABILITY_DAMAGE',
				'WHEAT_FORTUNE',
			]),
			z.float32().optional(),
		),
	)
	.optional()

export const itemsResponseSchemaStrict = apiResponseSchema
	.extend({
		items: z.array(
			z
				.object({
					ability_damage_scaling: z.float32().optional(),
					actionbar_resource: z.enum(['VITALITY']).optional(),
					can_auction: z.boolean().optional(),
					can_burn_in_furnace: z.boolean().optional(),
					can_have_attributes: z.boolean().optional(),
					can_have_booster: z.boolean().optional(),
					can_have_power_scroll: z.boolean().optional(),
					can_interact: z.boolean().optional(),
					can_interact_entity: z.boolean().optional(),
					can_interact_right_click: z.boolean().optional(),
					can_place: z.boolean().optional(),
					can_recombobulate: z.boolean().optional(),
					can_trade: z.boolean().optional(),
					cannot_reforge: z.boolean().optional(),
					catacombs_requirements: z
						.array(
							z
								.object({
									dungeon_type: z.enum(DungeonType),
									level: z.int().min(0),
									type: z.enum(['DUNGEON_SKILL']),
								})
								.strict(),
						)
						.optional(),
					category: z
						.preprocess((value) => {
							if (value === 'NONE') return undefined
							return value
						}, z.enum(ItemCategory).optional())
						.optional(),
					category_display: z.string().optional(),
					color: z
						.string()
						.regex(/\d+,\d+,\d+/)
						.optional(),
					components: z
						.array(
							z.discriminatedUnion('type', [
								z.strictObject({
									allow_duplicates: z.boolean().optional(),
									excluded_items: z.array(z.string()).optional(),
									show_items_first: z.array(z.string()).optional(),
									show_items_last: z.array(z.string()).optional(),
									sort_by_accessory_tier: z.boolean().optional(),
									sort_by_category: z.boolean().optional(),
									type: z.literal('RECIPE_INGREDIENT'),
								}),
							]),
						)
						.optional(),
					crystal: z.enum(CrystalType).optional(),
					description: z.string().optional(),
					double_tap_to_drop: z.boolean().optional(),
					dungeon_item: z.boolean().optional(),
					dungeon_item_conversion_cost: z
						.object({
							amount: z.int().min(1),
							essence_type: z.enum(EssenceType),
						})
						.strict()
						.optional(),
					durability: z.coerce.number().int().optional(),
					editioned: z.literal(false).optional(),
					enchantments: z
						.object({
							aiming: z.int().optional(), // not supposed to exist...
							aqua_affinity: z.int().optional(),
							big_brain: z.int().optional(),
							counter_strike: z.int().optional(),
							depth_strider: z.int().optional(),
							efficiency: z.int().optional(),
							feather_falling: z.int().optional(),
							first_strike: z.int().optional(),
							power: z.int().optional(),
							quantum: z.int().optional(),
							rainbow: z.int().optional(),
							reflection: z.int().optional(),
							replenish: z.int().optional(),
							respiration: z.int().optional(),
							scavenger: z.int().optional(),
							sharpness: z.int().optional(),
							telekinesis: z.int().optional(),
							thorns: z.int().optional(),
							transylvanian: z.int().optional(),
							ultimate_the_one: z.int().optional(),
							vampirism: z.int().optional(),
							vicious: z.int().optional(),
						})
						.strict()
						.optional(),
					experience: z
						.strictObject({
							alchemy: z
								.strictObject({
									INGREDIENT_BREW: z.int().optional(),
									MINION_STORAGE: z.number().optional(),
								})
								.optional(),
							combat: z
								.strictObject({
									MINION_STORAGE: z.number().optional(),
								})
								.optional(),
							farming: z
								.strictObject({
									BREAK_BLOCK: z.number().optional(),
									COLLECT_ITEM: z.int().optional(),
									MINION_STORAGE: z.number().optional(),
								})
								.optional(),
							fishing: z
								.strictObject({
									FISH_ITEM: z.number().optional(),
									MINION_STORAGE: z.number().optional(),
								})
								.optional(),
							foraging: z
								.strictObject({
									BREAK_BLOCK: z.number().optional(),
									MINION_STORAGE: z.number().optional(),
								})
								.optional(),
							mining: z
								.strictObject({
									BREAK_BLOCK: z.number().optional(),
									MINION_STORAGE: z.number().optional(),
								})
								.optional(),
						})
						.optional(),
					force_wipe_recomb: z.boolean().optional(),
					furniture: z
						.string()
						.regex(/[A-Z][A-Z_]+[A-Z]/)
						.optional(),
					game_stage: z.literal('SKILLED').optional(), // hypixel pls use a schema... that was supposed to be museum_data.game_stage
					gear_score: z.int().optional(),
					gemstone_slots: z
						.array(
							z
								.object({
									costs: z
										.array(
											z.discriminatedUnion('type', [
												z
													.object({
														coins: z.int().min(1),
														type: z.literal('COINS'),
													})
													.strict(),
												z
													.object({
														amount: z.int().min(1),
														item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
														type: z.literal('ITEM'),
													})
													.strict(),
											]),
										)
										.optional(),
									requirements: z
										.array(
											z.discriminatedUnion('type', [
												z.strictObject({
													data_key: z.literal('levelable_lvl'),
													operator: z.enum(['GREATER_THAN_OR_EQUALS']),
													type: z.literal('ITEM_DATA'),
													value: z.coerce.number().int(),
												}),
											]),
										)
										.optional(),
									slot_type: z.enum(GemSlotType),
								})
								.strict(),
						)
						.optional(),
					generator: z.enum(MinionType).optional(),
					generator_tier: z.int().min(1).max(12).optional(),
					glowing: z.boolean().optional(),
					has_uuid: z
						.preprocess((x) => {
							switch (x) {
								case 'false':
									return false
								default:
									return x
							}
						}, z.boolean())
						.optional(),
					hide_from_api: z.literal(false).optional(),
					hide_from_viewrecipe_command: z.boolean().optional(),
					id: z.string(),
					is_upgradeable_without_soulbinding: z.boolean().optional(),
					item_durability: z.int().optional(),
					item_model: z
						.string()
						.regex(/(hypixel_skyblock|minecraft):[_a-z0-9]+(\/[_a-z0-9]+)*/)
						.optional(),
					item_specific: z
						.object({
							bonus_experience_chance: z.int().optional(),
							bonus_fishing_speed: z.int().optional(),
							bonus_fishing_speed_per_bucket: z.int().optional(),
							bonus_heal: z.int().optional(),
							bonus_rift_damage_vs_vampire: z.int().optional(),
							bundled_amount: z.literal(9).optional(),
							bundled_item_id: z.literal('ECCENTRIC_PAINTING').optional(),
							can_play_snake: z.boolean().optional(),
							can_play_tictactoe: z.boolean().optional(),
							capture_skins: z.array(skinSchema).optional(),
							charges: z.int().optional(),
							chisel_charges: z.int().optional(),
							colors: z.array(z.string()).optional(),
							consumed_item: z.string().optional(),
							cooldown_seconds: z.int().optional(),
							cycle_back: z.boolean().optional(),
							damage_multiplier: z.number().optional(),
							damage_per_player: z.int().optional(),
							default_skin: skinSchema.optional(),
							duration_seconds: z.int().optional(),
							duration_ticks: z.int().optional(),
							effect_duration_seconds: z.int().optional(),
							experience_gained: z.int().optional(),
							extra_pelts: z.int().min(0).optional(),
							flex_skins: z
								.array(
									z
										.object({
											description: z.string(),
											name: z.string(),
											skin: skinSchema,
										})
										.strict(),
								)
								.optional(),
							has_contact_directory: z.boolean().optional(), // Abiphone
							has_dnd: z.boolean().optional(), // Abiphone
							heal: z.int().optional(),
							heal_on_hit: z.number().optional(),
							hearts_reduction: z.number().optional(),
							intelligence: z.int().optional(),
							mana_cost: z.int().optional(),
							mana_refund: z.int().optional(),
							mana_regen_per_player: z.int().optional(),
							max_bonus_fishing_speed: z.int().optional(),
							max_contacts: z.int().optional(), // Abiphone
							max_musicdiscs: z.int().optional(), // Abiphone
							max_other_players: z.int().optional(),
							max_players: z.int().optional(),
							memorable_event_key: z
								.enum([
									'artist_abode',
									'community_center_refurbishment',
									'hub_revamp',
									'inflation_fixer',
									'pet_care_expansion',
									'repair_wizard_portal',
									'rift_completion',
									'winter_2023',
								])
								.optional(),
							model: z.string().startsWith('abiphone_').optional(),
							motes_on_join_per_eat: z.int().optional(),
							motes_percent_per_eat: z.int().optional(),
							particle_color: z
								.strictObject({
									blue: z.int(),
									green: z.int(),
									red: z.int(),
								})
								.optional(),
							permanent_cactus_fortune: z.int().optional(),
							permanent_crops_farming_fortune: z.int().optional(),
							permanent_health: z.int().optional(),
							piece_offset: z.int().optional(),
							portal: z
								.object({
									description_name: z.string().optional(),
									destination_mode: z.string(),
									holo_name: z.string(),
									location_tag: z.string().optional(),
									objective_requirement: z
										.strictObject({
											objective_id: z.enum([
												'go_to_base_camp',
												'travel_to_spruce_woods',
												'warp_the_park',
												'travel_to_dark_thicket',
												'travel_to_savanna_woodland',
												'talk_to_melody_2',
											]),
											objective_status: z.enum(['COMPLETE']),
										})
										.optional(), // API_NONSENSE: duplicates requirements
									offset: z.string().optional(),
									requirements: requirementsSchema.optional(),
									schematic_file: z.string(),
									skill_requirement: z
										.strictObject({
											level: z.int().min(0),
											skill: z.enum(SkillType),
										})
										.optional(), // API_NONSENSE: duplicates requirements
								})
								.strict()
								.optional(),
							range: z.int().optional(),
							range_blocks: z.int().optional(),
							rarity_skins: z.array(skinSchema).optional(),
							ray_texture: skinSchema.optional(),
							regained_rift_time: z.int().optional(),
							rift_stats: z
								.object({
									rift_damage: z.int().optional(),
									rift_walk_speed: z.int().optional(),
								})
								.strict()
								.optional(),
							rift_time: z.int().optional(),
							rift_time_gain: z.int().optional(),
							rift_time_per_eat: z.int().optional(),
							rift_time_regain_on_kill: z.int().optional(),
							scaling: z
								.object({
									tiers: z.array(z.unknown()).optional(),
								})
								.strict()
								.optional(),
							slow_duration_seconds: z.int().optional(),
							speed_boost: z.int().optional(),
							speed_duration_seconds: z.int().optional(),
							speed_on_farming_island: z.int().min(0).optional(),
							stats: z
								.object({
									attack_speed: z.int().optional(),
									critical_damage: z.int().optional(),
									strength: z.int().optional(),
									walk_speed: z.int().optional(),
								})
								.strict()
								.optional(),
							stats_on_rift: z
								.object({
									rift_intelligence: z.int().optional(),
									rift_mana_regen: z.int().optional(),
									rift_time: z.int().optional(),
								})
								.strict()
								.optional(),
							swappables: z
								.record(
									z.string().lowercase(),
									skinSchema.extend({
										color: z.string().uppercase(),
									}),
								)
								.optional(),
							tick_interval: z.int().optional(),
							tiers: z
								.record(
									z.string(),
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
					MINING_FORTUNE: z.literal(150).optional(), // API_NONSENSE: TITANIUM_BELT
					motes_sell_price: z.int().optional(),
					museum: z.boolean().optional(),
					museum_data: z
						.strictObject({
							armor_set_donation_xp: z
								.record(z.string().uppercase(), z.int())
								.optional(),
							category: z.enum([
								'COMBAT',
								'DUNGEONEERING',
								'FARMING',
								'FISHING',
								'FORAGING',
								'HUNTING',
								'MINING',
							]),
							components: z.array(z.strictObject({})).optional(),
							donation_xp: z.int().optional(),
							game_stage: z.enum([
								'AMATEUR',
								'EXPERT',
								'INTERMEDIATE',
								'MASTER',
								'PROFESSIONAL',
								'SKILLED',
								'STARTER',
							]),
							mapped_item_ids: z.array(z.string()).optional(),
							parent: z
								.record(z.string().uppercase(), z.string().uppercase())
								.optional(),
						})
						.optional(),
					name: z.string(),
					npc_sell_price: z.number().optional(),
					origin: z.enum(['BINGO', 'RIFT']).optional(),
					prestige: z
						.object({
							costs: z.array(
								z.union([
									z.object({
										amount: z.int().min(1),
										essence_type: z.enum(EssenceType),
									}),
									z.object({
										amount: z.int().min(1),
										item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
									}),
								]),
							),
							item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
						})
						.strict()
						.optional(),
					private_island: z.enum(PrivateIslandType).optional(),
					rarity: z.enum(ItemTier).optional(), // API_NONSENSE: this only applies to FISHY_PENGUIN_PERSONALITY and POLAR_BEAR_PERSONALITY
					rarity_salvageable: z.boolean().optional(),
					recipes: z
						.array(
							z.strictObject({
								allow_quick_crafting: z.literal(true),
								ingredient_symbols: z.record(
									z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']),
									z.string().uppercase().optional(),
								),
								matrix: z.array(
									z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', ' ']),
								),
								output: z.strictObject({
									item_id: z.string().uppercase(),
								}),
							}),
						)
						.optional(),
					requirements: requirementsSchema.optional(),
					rift_transferrable: z.boolean().optional(),
					salvage: z
						.union([
							z
								.object({
									amount: z.int().min(1),
									essence_type: z.enum(EssenceType),
								})
								.strict(),
							z
								.object({
									amount: z.int().min(1),
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
										amount: z.int().min(1),
										essence_type: z.enum(EssenceType),
										type: z.literal('ESSENCE'),
									})
									.strict(),
								z
									.object({
										amount: z.int().min(1),
										item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
										type: z.literal('ITEM'),
									})
									.strict(),
							]),
						)
						.optional(),
					serializable: z.boolean().optional(),
					skin: skinSchema.optional(),
					soulbound: z.enum(Soulbound).optional(),
					stats: statsSchemaStrict.optional(),
					sword_type: z
						.enum(['AXE', 'DAGGER', 'KARAMBIT', 'KATANA', 'SCYTHE'])
						.optional(),
					tier: z.enum(ItemTier).optional(),
					tiered_stats: z
						.object({
							ATTACK_SPEED: z.array(z.int()).optional(),
							CRITICAL_CHANCE: z.array(z.int()).optional(),
							CRITICAL_DAMAGE: z.array(z.int()).optional(),
							DAMAGE: z.array(z.int()).optional(),
							DEFENSE: z.array(z.int()).optional(),
							HEALTH: z.array(z.int()).optional(),
							INTELLIGENCE: z.array(z.int()).optional(),
							STRENGTH: z.array(z.int()).optional(),
							WALK_SPEED: z.array(z.int()).optional(),
							WEAPON_ABILITY_DAMAGE: z.array(z.int()).optional(),
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
											amount: z.int().min(1),
											essence_type: z.enum(EssenceType),
											type: z.literal('ESSENCE'),
										})
										.strict(),
									z.object({
										amount: z.int().min(1),
										item_id: z.string().regex(UPPER_SNAKE_CASE_REGEX),
									}),
								]),
							),
						)
						.optional(),
				})
				.strict(),
		),
	})
	.strict()
