import { ItemMetadata, ItemMetadataTradesOn } from './types'

const BZ = { ah: false, bz: true } satisfies ItemMetadataTradesOn
const AH = { ah: true, bz: false } satisfies ItemMetadataTradesOn
const NOWHERE = { ah: false, bz: false } satisfies ItemMetadataTradesOn

export const bitsItems = new Map<string, ItemMetadata>([
	[
		'GOD_POTION_2',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'GOD_POTION_2' },
			links: {},
		},
	],
	[
		'KISMET_FEATHER',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'KISMET_FEATHER' },
			links: {},
		},
	],
	[
		'KAT_FLOWER',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'KAT_FLOWER' },
			links: {},
		},
	],
	[
		'KAT_BOUQUET',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'KAT_BOUQUET' },
			links: {},
		},
	],
	[
		'HEAT_CORE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'HEAT_CORE' },
			links: {},
		},
	],
	[
		'MAGMA_BUCKET',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'MAGMA_BUCKET' },
			links: {},
		},
	],
	[
		'PLASMA_BUCKET',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'PLASMA_BUCKET' },
			links: {},
		},
	],
	[
		'MITHRIL_INFUSION',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'MITHRIL_INFUSION' },
			links: {},
		},
	],
	[
		'HYPER_CATALYST_UPGRADE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'HYPER_CATALYST_UPGRADE' },
			links: {},
		},
	],
	[
		'HYPER_CATALYST',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'HYPER_CATALYST' },
			links: {},
		},
	],
	[
		'ULTIMATE_CARROT_CANDY_UPGRADE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'ULTIMATE_CARROT_CANDY_UPGRADE' },
			links: {},
		},
	],
	[
		'ULTIMATE_CARROT_CANDY',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ULTIMATE_CARROT_CANDY' },
			links: {},
		},
	],
	[
		'COLOSSAL_EXP_BOTTLE_UPGRADE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'COLOSSAL_EXP_BOTTLE_UPGRADE' },
			links: {},
		},
	],
	[
		'COLOSSAL_EXP_BOTTLE',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'COLOSSAL_EXP_BOTTLE' },
			links: {},
		},
	],
	[
		'JUMBO_BACKPACK_UPGRADE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'JUMBO_BACKPACK_UPGRADE' },
			links: {},
		},
	],
	[
		'JUMBO_BACKPACK',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'JUMBO_BACKPACK' },
			links: {},
		},
	],
	[
		'MINION_STORAGE_EXPANDER',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'MINION_STORAGE_EXPANDER' },
			links: {},
		},
	],
	[
		'XLARGE_ENCHANTED_CHEST',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'XLARGE_ENCHANTED_CHEST' },
			links: {},
		},
	],
	[
		'XXLARGE_ENCHANTED_CHEST',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'XXLARGE_ENCHANTED_CHEST' },
			links: {},
		},
	],
	[
		'MATRIARCH_PARFUM',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'MATRIARCH_PARFUM' },
			links: {},
		},
	],
	[
		'HOLOGRAM',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'HOLOGRAM' },
			links: {},
		},
	],
	[
		'DITTO_BLOB',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'DITTO_BLOB' },
			links: {},
		},
	],
	[
		'BUILDERS_WAND',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'BUILDERS_WAND' },
			links: {},
		},
	],
	[
		'BLOCK_ZAPPER',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'BLOCK_ZAPPER' },
			links: {},
		},
	],
	[
		'BITS_TALISMAN',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'BITS_TALISMAN' },
			links: {},
		},
	],
	[
		'POCKET_SACK_IN_A_SACK',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'POCKET_SACK_IN_A_SACK' },
			links: {},
		},
	],
	[
		'LARGE_DUNGEON_SACK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'LARGE_DUNGEON_SACK' },
			links: {},
		},
	],
	[
		'RUNE_SACK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'RUNE_SACK' },
			links: {},
		},
	],
	[
		'FLOWER_SACK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'FLOWER_SACK' },
			links: {},
		},
	],
	[
		'DWARVEN_MINES_SACK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'DWARVEN_MINES_SACK' },
			links: {},
		},
	],
	[
		'CRYSTAL_HOLLOWS_SACK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'CRYSTAL_HOLLOWS_SACK' },
			links: {},
		},
	],
	[
		'PORTALIZER',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'PORTALIZER' },
			links: {},
		},
	],
	[
		'TRIO_CONTACTS_ADDON',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TRIO_CONTACTS_ADDON' },
			links: {},
		},
	],
	[
		'AUTOPET_RULES_2',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'AUTOPET_RULES_2' },
			links: {},
		},
	],
	[
		'DYE_PURE_WHITE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'DYE_PURE_WHITE' },
			links: {},
		},
	],
	[
		'DYE_PURE_BLACK',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'DYE_PURE_BLACK' },
			links: {},
		},
	],
	[
		'INFERNO_FUEL_BLOCK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'INFERNO_FUEL_BLOCK' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_EXPERTISE_1',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTMENT_EXPERTISE_1' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_COMPACT_1',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTMENT_COMPACT_1' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_CULTIVATING_1',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTMENT_CULTIVATING_1' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_CHAMPION_1',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTMENT_CHAMPION_1' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_HECATOMB_1',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTMENT_HECATOMB_1' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_TOXOPHILITE_1',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTMENT_TOXOPHILITE_1' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_ATTACK_SPEED',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_ATTACK_SPEED' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_CRITICAL_CHANCE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_CRITICAL_CHANCE' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_CRITICAL_DAMAGE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_CRITICAL_DAMAGE' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_DEFENSE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_DEFENSE' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_FEROCITY',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_FEROCITY' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_HEALTH',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_HEALTH' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_INTELLIGENCE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_INTELLIGENCE' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_MAGIC_FIND',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_MAGIC_FIND' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_SEA_CREATURE_CHANCE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_SEA_CREATURE_CHANCE' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_STRENGTH',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_STRENGTH' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_WALK_SPEED',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_WALK_SPEED' },
			links: {},
		},
	],
	[
		'TALISMAN_ENRICHMENT_SWAPPER',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'TALISMAN_ENRICHMENT_SWAPPER' },
			links: {},
		},
	],
	[
		'SF:ABICASE_SUMSUNG_1',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_SUMSUNG_1' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_SUMSUNG_1',
				name: 'Sumsung© G3 Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_SUMSUNG_2',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_SUMSUNG_2' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_SUMSUNG_2',
				name: 'Sumsung© GG Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_SUMSUNG_2',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_SUMSUNG_2' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_SUMSUNG_2',
				name: 'Sumsung© GG Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_REZAR',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_REZAR' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_REZAR',
				name: 'Rezar® Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_BLUE_RED',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_BLUE_RED' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_RED',
				name: 'Blue™ But Red Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_BLUE_BLUE',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_BLUE_BLUE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_BLUE',
				name: 'Actually Blue™ Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_BLUE_GREEN',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_BLUE_GREEN' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_GREEN',
				name: 'Blue™ But Green Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_BLUE_YELLOW',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_BLUE_YELLOW' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_YELLOW',
				name: 'Blue™ But Yellow Abicase',
				textureUrl: null,
			},
		},
	],
	[
		'SF:ABICASE_BLUE_AQUA',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'ABICASE', cofl: 'ABICASE_BLUE_AQUA' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_AQUA',
				name: 'Lighter Blue™ Abicase',
				textureUrl: null,
			},
		},
	],
])

export const crimsonIsleItems = new Map<string, ItemMetadata>([
	[
		'INFERNO_FUEL_MAGMA_CREAM',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_FUEL_MAGMA_CREAM' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Fuel Magma Cream)',
				description: null,
				id: 'INFERNO_FUEL_MAGMA_CREAM',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_FUEL_GLOWSTONE_DUST',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_FUEL_GLOWSTONE_DUST' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Fuel Glowstone Dust)',
				description: null,
				id: 'INFERNO_FUEL_GLOWSTONE_DUST',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_FUEL_NETHER_STALK',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_FUEL_NETHER_STALK' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Fuel Nether Stalk)',
				description: null,
				id: 'INFERNO_FUEL_NETHER_STALK',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_FUEL_BLAZE_ROD',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_FUEL_BLAZE_ROD' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Fuel Blaze Rod)',
				description: null,
				id: 'INFERNO_FUEL_BLAZE_ROD',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_FUEL_CRUDE_GABAGOOL',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_FUEL_CRUDE_GABAGOOL' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Fuel Crude Gabagool)',
				description: null,
				id: 'INFERNO_FUEL_CRUDE_GABAGOOL',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HEAVY_MAGMA_CREAM',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HEAVY_MAGMA_CREAM' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Heavy Magma Cream)',
				description: null,
				id: 'INFERNO_HEAVY_MAGMA_CREAM',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HEAVY_GLOWSTONE_DUST',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HEAVY_GLOWSTONE_DUST' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Heavy Glowstone Dust)',
				description: null,
				id: 'INFERNO_HEAVY_GLOWSTONE_DUST',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HEAVY_NETHER_STALK',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HEAVY_NETHER_STALK' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Heavy Nether Stalk)',
				description: null,
				id: 'INFERNO_HEAVY_NETHER_STALK',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HEAVY_BLAZE_ROD',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HEAVY_BLAZE_ROD' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Heavy Blaze Rod)',
				description: null,
				id: 'INFERNO_HEAVY_BLAZE_ROD',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HEAVY_CRUDE_GABAGOOL',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HEAVY_CRUDE_GABAGOOL' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Heavy Crude Gabagool)',
				description: null,
				id: 'INFERNO_HEAVY_CRUDE_GABAGOOL',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HYPERGOLIC_MAGMA_CREAM',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HYPERGOLIC_MAGMA_CREAM' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Hypergolic Magma Cream)',
				description: null,
				id: 'INFERNO_HYPERGOLIC_MAGMA_CREAM',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HYPERGOLIC_GLOWSTONE_DUST',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HYPERGOLIC_GLOWSTONE_DUST' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Hypergolic Glowstone Dust)',
				description: null,
				id: 'INFERNO_HYPERGOLIC_GLOWSTONE_DUST',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HYPERGOLIC_NETHER_STALK',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HYPERGOLIC_NETHER_STALK' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Hypergolic Nether Stalk)',
				description: null,
				id: 'INFERNO_HYPERGOLIC_NETHER_STALK',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HYPERGOLIC_BLAZE_ROD',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HYPERGOLIC_BLAZE_ROD' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Hypergolic Blaze Rod)',
				description: null,
				id: 'INFERNO_HYPERGOLIC_BLAZE_ROD',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
	[
		'INFERNO_HYPERGOLIC_CRUDE_GABAGOOL',
		{
			type: 'missing',
			ids: { skyblock: 'INFERNO_HYPERGOLIC_CRUDE_GABAGOOL' },
			links: {},
			metadata: {
				name: 'Inferno Minion Fuel (Hypergolic Crude Gabagool)',
				description: null,
				id: 'INFERNO_HYPERGOLIC_CRUDE_GABAGOOL',
				textureUrl: null,
			},
			tradesOn: AH,
		},
	],
])

export const northStarItems = new Map<string, ItemMetadata>([
	[
		'WHITE_GIFT_TALISMAN',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'WHITE_GIFT_TALISMAN' },
			links: {},
		},
	],
	[
		'GREEN_GIFT_TALISMAN',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'GREEN_GIFT_TALISMAN' },
			links: {},
		},
	],
	[
		'BLUE_GIFT_TALISMAN',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'BLUE_GIFT_TALISMAN' },
			links: {},
		},
	],
	[
		'PURPLE_GIFT_TALISMAN',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'PURPLE_GIFT_TALISMAN' },
			links: {},
		},
	],
	[
		'GOLD_GIFT_TALISMAN',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'GOLD_GIFT_TALISMAN' },
			links: {},
		},
	],
	[
		'GOLD_GIFT',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'GOLD_GIFT' },
			links: {},
		},
	],
	[
		'SF:PET_REINDEER',
		{
			tradesOn: AH,
			type: 'missing',
			ids: { skyblock: 'PET', cofl: 'PET_REINDEER' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:PET_REINDEER',
				name: 'Reindeer',
				textureUrl: null,
			},
		},
	],
	[
		'SNOW_CLOAK',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'SNOW_CLOAK' },
			links: {},
		},
	],
	[
		'SNOW_BELT',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'SNOW_BELT' },
			links: {},
		},
	],
	[
		'SNOW_GLOVES',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'SNOW_GLOVES' },
			links: {},
		},
	],
	[
		'SNOW_NECKLACE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'SNOW_NECKLACE' },
			links: {},
		},
	],
	[
		'ICE_GENERATOR_11',
		{
			tradesOn: NOWHERE,
			type: 'basic',
			ids: { skyblock: 'ICE_GENERATOR_11' },
			links: {},
		},
	],
	[
		'ICE_GENERATOR_12',
		{
			tradesOn: NOWHERE,
			type: 'basic',
			ids: { skyblock: 'ICE_GENERATOR_12' },
			links: {},
		},
	],
	[
		'ENCHANTED_ICE',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTED_ICE' },
			links: {},
		},
	],
	[
		'SNOW_GENERATOR_11',
		{
			tradesOn: NOWHERE,
			type: 'basic',
			ids: { skyblock: 'SNOW_GENERATOR_11' },
			links: {},
		},
	],
	[
		'SNOW_GENERATOR_12',
		{
			tradesOn: NOWHERE,
			type: 'basic',
			ids: { skyblock: 'SNOW_GENERATOR_12' },
			links: {},
		},
	],
	[
		'ENCHANTED_SNOW_BLOCK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'ENCHANTED_SNOW_BLOCK' },
			links: {},
		},
	],
	[
		'VOLCANIC_ROCK',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'VOLCANIC_ROCK' },
			links: {},
		},
	],
	[
		'ENCHANTMENT_ULTIMATE_REFRIGERATE_1',
		{
			tradesOn: BZ,
			type: 'missing',
			ids: { skyblock: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_1' },
			links: {},
			metadata: {
				name: 'Ultimate Refrigerate I',
				description: null,
				id: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_1',
				textureUrl: null,
			},
		},
	],
	[
		'MAGIC_TOP_HAT',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'MAGIC_TOP_HAT' },
			links: {},
		},
	],
	[
		'WINTER_FRAGMENT',
		{
			tradesOn: BZ,
			type: 'basic',
			ids: { skyblock: 'WINTER_FRAGMENT' },
			links: {},
		},
	],
	[
		'GLACIAL_SCYTHE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'GLACIAL_SCYTHE' },
			links: {},
		},
	],
	[
		'YETI_SWORD',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'YETI_SWORD' },
			links: {},
		},
	],
	[
		'ICE_SPRAY_WAND',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'ICE_SPRAY_WAND' },
			links: {},
		},
	],
	[
		'STARRED_GLACIAL_SCYTHE',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'STARRED_GLACIAL_SCYTHE' },
			links: {},
		},
	],
	[
		'STARRED_YETI_SWORD',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'STARRED_YETI_SWORD' },
			links: {},
		},
	],
	[
		'STARRED_ICE_SPRAY_WAND',
		{
			tradesOn: AH,
			type: 'basic',
			ids: { skyblock: 'STARRED_ICE_SPRAY_WAND' },
			links: {},
		},
	],
])

export const allItems = new Map<string, ItemMetadata>([
	...bitsItems.entries(),
	...crimsonIsleItems.entries(),
	...northStarItems.entries(),
])
