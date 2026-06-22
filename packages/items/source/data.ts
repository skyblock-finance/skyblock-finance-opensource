import { ItemMetadata, ItemMetadataTradesOn } from './types'

const BZ = { ah: false, bz: true } satisfies ItemMetadataTradesOn
const AH = { ah: true, bz: false } satisfies ItemMetadataTradesOn
const NOWHERE = { ah: false, bz: false } satisfies ItemMetadataTradesOn

export const bitsItems = new Map<string, ItemMetadata>([
	[
		'AUTOPET_RULES_2',
		{
			ids: { skyblock: 'AUTOPET_RULES_2' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BITS_TALISMAN',
		{
			ids: { skyblock: 'BITS_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BLOCK_ZAPPER',
		{
			ids: { skyblock: 'BLOCK_ZAPPER' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BUILDERS_WAND',
		{
			ids: { skyblock: 'BUILDERS_WAND' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'COLOSSAL_EXP_BOTTLE',
		{
			ids: { skyblock: 'COLOSSAL_EXP_BOTTLE' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'COLOSSAL_EXP_BOTTLE_UPGRADE',
		{
			ids: { skyblock: 'COLOSSAL_EXP_BOTTLE_UPGRADE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'CRYSTAL_HOLLOWS_SACK',
		{
			ids: { skyblock: 'CRYSTAL_HOLLOWS_SACK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'DITTO_BLOB',
		{
			ids: { skyblock: 'DITTO_BLOB' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'DWARVEN_MINES_SACK',
		{
			ids: { skyblock: 'DWARVEN_MINES_SACK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'DYE_PURE_BLACK',
		{
			ids: { skyblock: 'DYE_PURE_BLACK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'DYE_PURE_WHITE',
		{
			ids: { skyblock: 'DYE_PURE_WHITE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_ABSORB_1',
		{
			ids: { skyblock: 'ENCHANTMENT_ABSORB_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_CHAMPION_1',
		{
			ids: { skyblock: 'ENCHANTMENT_CHAMPION_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_COMPACT_1',
		{
			ids: { skyblock: 'ENCHANTMENT_COMPACT_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_CULTIVATING_1',
		{
			ids: { skyblock: 'ENCHANTMENT_CULTIVATING_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_EXPERTISE_1',
		{
			ids: { skyblock: 'ENCHANTMENT_EXPERTISE_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_HECATOMB_1',
		{
			ids: { skyblock: 'ENCHANTMENT_HECATOMB_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_TOXOPHILITE_1',
		{
			ids: { skyblock: 'ENCHANTMENT_TOXOPHILITE_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'FLOWER_SACK',
		{
			ids: { skyblock: 'FLOWER_SACK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'GOD_POTION_2',
		{
			ids: { skyblock: 'GOD_POTION_2' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HEAT_CORE',
		{
			ids: { skyblock: 'HEAT_CORE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HOLOGRAM',
		{
			ids: { skyblock: 'HOLOGRAM' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HYPER_CATALYST',
		{
			ids: { skyblock: 'HYPER_CATALYST' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'HYPER_CATALYST_UPGRADE',
		{
			ids: { skyblock: 'HYPER_CATALYST_UPGRADE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'INFERNO_FUEL_BLOCK',
		{
			ids: { skyblock: 'INFERNO_FUEL_BLOCK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'JUMBO_BACKPACK',
		{
			ids: { skyblock: 'JUMBO_BACKPACK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'JUMBO_BACKPACK_UPGRADE',
		{
			ids: { skyblock: 'JUMBO_BACKPACK_UPGRADE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'KAT_BOUQUET',
		{
			ids: { skyblock: 'KAT_BOUQUET' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'KAT_FLOWER',
		{
			ids: { skyblock: 'KAT_FLOWER' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'KISMET_FEATHER',
		{
			ids: { skyblock: 'KISMET_FEATHER' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'LARGE_DUNGEON_SACK',
		{
			ids: { skyblock: 'LARGE_DUNGEON_SACK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'MAGMA_BUCKET',
		{
			ids: { skyblock: 'MAGMA_BUCKET' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'MATRIARCH_PARFUM',
		{
			ids: { skyblock: 'MATRIARCH_PARFUM' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MINION_STORAGE_EXPANDER',
		{
			ids: { skyblock: 'MINION_STORAGE_EXPANDER' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MITHRIL_INFUSION',
		{
			ids: { skyblock: 'MITHRIL_INFUSION' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'PLASMA_BUCKET',
		{
			ids: { skyblock: 'PLASMA_BUCKET' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'POCKET_SACK_IN_A_SACK',
		{
			ids: { skyblock: 'POCKET_SACK_IN_A_SACK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PORTALIZER',
		{
			ids: { skyblock: 'PORTALIZER' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'RUNE_SACK',
		{
			ids: { skyblock: 'RUNE_SACK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'SF:ABICASE_BLUE_AQUA',
		{
			ids: { cofl: 'ABICASE_BLUE_AQUA', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_AQUA',
				name: 'Lighter Blue™ Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_BLUE_BLUE',
		{
			ids: { cofl: 'ABICASE_BLUE_BLUE', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_BLUE',
				name: 'Actually Blue™ Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_BLUE_GREEN',
		{
			ids: { cofl: 'ABICASE_BLUE_GREEN', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_GREEN',
				name: 'Blue™ But Green Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_BLUE_RED',
		{
			ids: { cofl: 'ABICASE_BLUE_RED', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_RED',
				name: 'Blue™ But Red Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_BLUE_YELLOW',
		{
			ids: { cofl: 'ABICASE_BLUE_YELLOW', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_BLUE_YELLOW',
				name: 'Blue™ But Yellow Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_REZAR',
		{
			ids: { cofl: 'ABICASE_REZAR', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_REZAR',
				name: 'Rezar® Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_SUMSUNG_1',
		{
			ids: { cofl: 'ABICASE_SUMSUNG_1', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_SUMSUNG_1',
				name: 'Sumsung© G3 Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_SUMSUNG_2',
		{
			ids: { cofl: 'ABICASE_SUMSUNG_2', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_SUMSUNG_2',
				name: 'Sumsung© GG Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:ABICASE_SUMSUNG_2',
		{
			ids: { cofl: 'ABICASE_SUMSUNG_2', skyblock: 'ABICASE' },
			links: {},
			metadata: {
				description: null,
				id: 'SF:ABICASE_SUMSUNG_2',
				name: 'Sumsung© GG Abicase',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SHARD_BITBUG',
		{
			ids: { skyblock: 'SHARD_BITBUG' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_ATTACK_SPEED',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_ATTACK_SPEED' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_CRITICAL_CHANCE',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_CRITICAL_CHANCE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_CRITICAL_DAMAGE',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_CRITICAL_DAMAGE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_DEFENSE',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_DEFENSE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_FEROCITY',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_FEROCITY' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_HEALTH',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_HEALTH' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_INTELLIGENCE',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_INTELLIGENCE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_MAGIC_FIND',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_MAGIC_FIND' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_SEA_CREATURE_CHANCE',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_SEA_CREATURE_CHANCE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_STRENGTH',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_STRENGTH' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_SWAPPER',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_SWAPPER' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TALISMAN_ENRICHMENT_WALK_SPEED',
		{
			ids: { skyblock: 'TALISMAN_ENRICHMENT_WALK_SPEED' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'TRIO_CONTACTS_ADDON',
		{
			ids: { skyblock: 'TRIO_CONTACTS_ADDON' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ULTIMATE_CARROT_CANDY',
		{
			ids: { skyblock: 'ULTIMATE_CARROT_CANDY' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ULTIMATE_CARROT_CANDY_UPGRADE',
		{
			ids: { skyblock: 'ULTIMATE_CARROT_CANDY_UPGRADE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'XLARGE_ENCHANTED_CHEST',
		{
			ids: { skyblock: 'XLARGE_ENCHANTED_CHEST' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'XXLARGE_ENCHANTED_CHEST',
		{
			ids: { skyblock: 'XXLARGE_ENCHANTED_CHEST' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
])

export const crimsonIsleItems = new Map<string, ItemMetadata>([
	[
		'INFERNO_FUEL_BLAZE_ROD',
		{
			ids: { skyblock: 'INFERNO_FUEL_BLAZE_ROD' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_FUEL_BLAZE_ROD',
				name: 'Inferno Minion Fuel (Fuel Blaze Rod)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_FUEL_CRUDE_GABAGOOL',
		{
			ids: { skyblock: 'INFERNO_FUEL_CRUDE_GABAGOOL' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_FUEL_CRUDE_GABAGOOL',
				name: 'Inferno Minion Fuel (Fuel Crude Gabagool)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_FUEL_GLOWSTONE_DUST',
		{
			ids: { skyblock: 'INFERNO_FUEL_GLOWSTONE_DUST' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_FUEL_GLOWSTONE_DUST',
				name: 'Inferno Minion Fuel (Fuel Glowstone Dust)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_FUEL_MAGMA_CREAM',
		{
			ids: { skyblock: 'INFERNO_FUEL_MAGMA_CREAM' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_FUEL_MAGMA_CREAM',
				name: 'Inferno Minion Fuel (Fuel Magma Cream)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_FUEL_NETHER_STALK',
		{
			ids: { skyblock: 'INFERNO_FUEL_NETHER_STALK' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_FUEL_NETHER_STALK',
				name: 'Inferno Minion Fuel (Fuel Nether Stalk)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HEAVY_BLAZE_ROD',
		{
			ids: { skyblock: 'INFERNO_HEAVY_BLAZE_ROD' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HEAVY_BLAZE_ROD',
				name: 'Inferno Minion Fuel (Heavy Blaze Rod)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HEAVY_CRUDE_GABAGOOL',
		{
			ids: { skyblock: 'INFERNO_HEAVY_CRUDE_GABAGOOL' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HEAVY_CRUDE_GABAGOOL',
				name: 'Inferno Minion Fuel (Heavy Crude Gabagool)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HEAVY_GLOWSTONE_DUST',
		{
			ids: { skyblock: 'INFERNO_HEAVY_GLOWSTONE_DUST' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HEAVY_GLOWSTONE_DUST',
				name: 'Inferno Minion Fuel (Heavy Glowstone Dust)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HEAVY_MAGMA_CREAM',
		{
			ids: { skyblock: 'INFERNO_HEAVY_MAGMA_CREAM' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HEAVY_MAGMA_CREAM',
				name: 'Inferno Minion Fuel (Heavy Magma Cream)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HEAVY_NETHER_STALK',
		{
			ids: { skyblock: 'INFERNO_HEAVY_NETHER_STALK' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HEAVY_NETHER_STALK',
				name: 'Inferno Minion Fuel (Heavy Nether Stalk)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HYPERGOLIC_BLAZE_ROD',
		{
			ids: { skyblock: 'INFERNO_HYPERGOLIC_BLAZE_ROD' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HYPERGOLIC_BLAZE_ROD',
				name: 'Inferno Minion Fuel (Hypergolic Blaze Rod)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HYPERGOLIC_CRUDE_GABAGOOL',
		{
			ids: { skyblock: 'INFERNO_HYPERGOLIC_CRUDE_GABAGOOL' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HYPERGOLIC_CRUDE_GABAGOOL',
				name: 'Inferno Minion Fuel (Hypergolic Crude Gabagool)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HYPERGOLIC_GLOWSTONE_DUST',
		{
			ids: { skyblock: 'INFERNO_HYPERGOLIC_GLOWSTONE_DUST' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HYPERGOLIC_GLOWSTONE_DUST',
				name: 'Inferno Minion Fuel (Hypergolic Glowstone Dust)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HYPERGOLIC_MAGMA_CREAM',
		{
			ids: { skyblock: 'INFERNO_HYPERGOLIC_MAGMA_CREAM' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HYPERGOLIC_MAGMA_CREAM',
				name: 'Inferno Minion Fuel (Hypergolic Magma Cream)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'INFERNO_HYPERGOLIC_NETHER_STALK',
		{
			ids: { skyblock: 'INFERNO_HYPERGOLIC_NETHER_STALK' },
			links: {},
			metadata: {
				description: null,
				id: 'INFERNO_HYPERGOLIC_NETHER_STALK',
				name: 'Inferno Minion Fuel (Hypergolic Nether Stalk)',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
])

export const northStarItems = new Map<string, ItemMetadata>([
	[
		'BLUE_GIFT_TALISMAN',
		{
			ids: { skyblock: 'BLUE_GIFT_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ENCHANTED_ICE',
		{
			ids: { skyblock: 'ENCHANTED_ICE' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTED_SNOW_BLOCK',
		{
			ids: { skyblock: 'ENCHANTED_SNOW_BLOCK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_ULTIMATE_REFRIGERATE_1',
		{
			ids: { skyblock: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_1' },
			links: {},
			metadata: {
				description: null,
				id: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_1',
				name: 'Ultimate Refrigerate I',
				textureUrl: null,
			},
			tradesOn: BZ,
			type: 'missing',
		},
	],
	[
		'ENCHANTMENT_ULTIMATE_REFRIGERATE_2',
		{
			ids: { skyblock: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_2' },
			links: {},
			metadata: {
				description: null,
				id: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_2',
				name: 'Ultimate Refrigerate II',
				textureUrl: null,
			},
			tradesOn: BZ,
			type: 'missing',
		},
	],
	[
		'ENCHANTMENT_ULTIMATE_REFRIGERATE_3',
		{
			ids: { skyblock: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_3' },
			links: {},
			metadata: {
				description: null,
				id: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_3',
				name: 'Ultimate Refrigerate III',
				textureUrl: null,
			},
			tradesOn: BZ,
			type: 'missing',
		},
	],
	[
		'ENCHANTMENT_ULTIMATE_REFRIGERATE_4',
		{
			ids: { skyblock: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_4' },
			links: {},
			metadata: {
				description: null,
				id: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_4',
				name: 'Ultimate Refrigerate IV',
				textureUrl: null,
			},
			tradesOn: BZ,
			type: 'missing',
		},
	],
	[
		'ENCHANTMENT_ULTIMATE_REFRIGERATE_5',
		{
			ids: { skyblock: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_5' },
			links: {},
			metadata: {
				description: null,
				id: 'ENCHANTMENT_ULTIMATE_REFRIGERATE_5',
				name: 'Ultimate Refrigerate V',
				textureUrl: null,
			},
			tradesOn: BZ,
			type: 'missing',
		},
	],
	[
		'FROZEN_SCYTHE',
		{
			ids: { skyblock: 'FROZEN_SCYTHE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'GLACIAL_SCYTHE',
		{
			ids: { skyblock: 'GLACIAL_SCYTHE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'GOLD_GIFT',
		{
			ids: { skyblock: 'GOLD_GIFT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'GOLD_GIFT_TALISMAN',
		{
			ids: { skyblock: 'GOLD_GIFT_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'GREEN_GIFT_TALISMAN',
		{
			ids: { skyblock: 'GREEN_GIFT_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ICE_GENERATOR_11',
		{
			ids: { skyblock: 'ICE_GENERATOR_11' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'ICE_GENERATOR_12',
		{
			ids: { skyblock: 'ICE_GENERATOR_12' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'ICE_SPRAY_WAND',
		{
			ids: { skyblock: 'ICE_SPRAY_WAND' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MAGIC_TOP_HAT',
		{
			ids: { skyblock: 'MAGIC_TOP_HAT' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'PURPLE_GIFT_TALISMAN',
		{
			ids: { skyblock: 'PURPLE_GIFT_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SNOW_BELT',
		{
			ids: { skyblock: 'SNOW_BELT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SNOW_CLOAK',
		{
			ids: { skyblock: 'SNOW_CLOAK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SNOW_GENERATOR_11',
		{
			ids: { skyblock: 'SNOW_GENERATOR_11' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'SNOW_GENERATOR_12',
		{
			ids: { skyblock: 'SNOW_GENERATOR_12' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'SNOW_GLOVES',
		{
			ids: { skyblock: 'SNOW_GLOVES' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SNOW_NECKLACE',
		{
			ids: { skyblock: 'SNOW_NECKLACE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'STARRED_GLACIAL_SCYTHE',
		{
			ids: { skyblock: 'STARRED_GLACIAL_SCYTHE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'STARRED_ICE_SPRAY_WAND',
		{
			ids: { skyblock: 'STARRED_ICE_SPRAY_WAND' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'STARRED_YETI_SWORD',
		{
			ids: { skyblock: 'STARRED_YETI_SWORD' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'VOLCANIC_ROCK',
		{
			ids: { skyblock: 'VOLCANIC_ROCK' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'WHITE_GIFT_TALISMAN',
		{
			ids: { skyblock: 'WHITE_GIFT_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'WINTER_FRAGMENT',
		{
			ids: { skyblock: 'WINTER_FRAGMENT' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'YETI_SWORD',
		{
			ids: { skyblock: 'YETI_SWORD' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
])

export const pestItems = new Map<string, ItemMetadata>([
	[
		'BIOHAZARD_BOOTS',
		{
			ids: { skyblock: 'BIOHAZARD_BOOTS' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BIOHAZARD_HELMET',
		{
			ids: { skyblock: 'BIOHAZARD_HELMET' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BIOHAZARD_LEGGINGS',
		{
			ids: { skyblock: 'BIOHAZARD_LEGGINGS' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BIOHAZARD_SUIT',
		{
			ids: { skyblock: 'BIOHAZARD_SUIT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MOUSE_PEST_TRAP',
		{
			ids: { skyblock: 'MOUSE_PEST_TRAP' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MUSHROOM_BOOTS',
		{
			ids: { skyblock: 'MUSHROOM_BOOTS' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MUSHROOM_CHESTPLATE',
		{
			ids: { skyblock: 'MUSHROOM_CHESTPLATE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MUSHROOM_HELMET',
		{
			ids: { skyblock: 'MUSHROOM_HELMET' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MUSHROOM_LEGGINGS',
		{
			ids: { skyblock: 'MUSHROOM_LEGGINGS' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PEST_TRAP',
		{
			ids: { skyblock: 'PEST_TRAP' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTER_ARTIFACT',
		{
			ids: { skyblock: 'PESTHUNTER_ARTIFACT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTER_BADGE',
		{
			ids: { skyblock: 'PESTHUNTER_BADGE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTER_RELIC',
		{
			ids: { skyblock: 'PESTHUNTER_RELIC' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTER_RING',
		{
			ids: { skyblock: 'PESTHUNTER_RING' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTERS_BELT',
		{
			ids: { skyblock: 'PESTHUNTERS_BELT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTERS_CLOAK',
		{
			ids: { skyblock: 'PESTHUNTERS_CLOAK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTERS_GLOVES',
		{
			ids: { skyblock: 'PESTHUNTERS_GLOVES' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTERS_LAIR_BARN_SKIN',
		{
			ids: { skyblock: 'PESTHUNTERS_LAIR_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTERS_NECKLACE',
		{
			ids: { skyblock: 'PESTHUNTERS_NECKLACE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PESTHUNTING_GUIDE',
		{
			ids: { skyblock: 'PESTHUNTING_GUIDE' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
])

export const skymartItems = new Map<string, ItemMetadata>([
	[
		'ADVANCED_GARDENING_AXE',
		{
			ids: { skyblock: 'ADVANCED_GARDENING_AXE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ADVANCED_GARDENING_HOE',
		{
			ids: { skyblock: 'ADVANCED_GARDENING_HOE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'AQUAMASTER_HYDROMAX',
		{
			ids: { skyblock: 'AQUAMASTER_HYDROMAX' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'AQUAMASTER_X',
		{
			ids: { skyblock: 'AQUAMASTER_X' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'AQUAMASTER_X',
		{
			ids: { skyblock: 'AQUAMASTER_X' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'AUTUMN_HUT_BARN_SKIN',
		{
			ids: { skyblock: 'AUTUMN_HUT_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BAMBOO_BARN_SKIN',
		{
			ids: { skyblock: 'BAMBOO_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BASIC_GARDENING_AXE',
		{
			ids: { skyblock: 'BASIC_GARDENING_AXE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BASIC_GARDENING_HOE',
		{
			ids: { skyblock: 'BASIC_GARDENING_HOE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BIOFUEL',
		{
			ids: { skyblock: 'BIOFUEL' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BLOSSOM_BELT',
		{
			ids: { skyblock: 'BLOSSOM_BELT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BLOSSOM_BRACELET',
		{
			ids: { skyblock: 'BLOSSOM_BRACELET' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BLOSSOM_CLOAK',
		{
			ids: { skyblock: 'BLOSSOM_CLOAK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BLOSSOM_NECKLACE',
		{
			ids: { skyblock: 'BLOSSOM_NECKLACE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'BOTANICAL_GREENHOUSE_SKIN',
		{
			ids: { skyblock: 'BOTANICAL_GREENHOUSE_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'CASTLE_BARN_SKIN',
		{
			ids: { skyblock: 'CASTLE_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'CHIRPING_STEREO',
		{
			ids: { skyblock: 'CHIRPING_STEREO' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'COCO_CHOPPER',
		{
			ids: { skyblock: 'COCO_CHOPPER' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'COCO_CHOPPER_2',
		{
			ids: { skyblock: 'COCO_CHOPPER_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'COCO_CHOPPER_3',
		{
			ids: { skyblock: 'COCO_CHOPPER_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'COPPER_ARTIFACT',
		{
			ids: { skyblock: 'COPPER_ARTIFACT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'COPPER_RING',
		{
			ids: { skyblock: 'COPPER_RING' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'COPPER_TALISMAN',
		{
			ids: { skyblock: 'COPPER_TALISMAN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'COUNTRY_GREENHOUSE_SKIN',
		{
			ids: { skyblock: 'COUNTRY_GREENHOUSE_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'COZY_COTTAGE_BARN_SKIN',
		{
			ids: { skyblock: 'COZY_COTTAGE_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'CUBE_BARN_SKIN',
		{
			ids: { skyblock: 'CUBE_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_DEDICATION_1',
		{
			ids: { skyblock: 'ENCHANTMENT_DEDICATION_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'ENCHANTMENT_GREEN_THUMB_1',
		{
			ids: { skyblock: 'ENCHANTMENT_GREEN_THUMB_1' },
			links: {},
			tradesOn: BZ,
			type: 'basic',
		},
	],
	[
		'FARMING_TOOLKIT',
		{
			ids: { skyblock: 'FARMING_TOOLKIT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'FUNGI_CUTTER',
		{
			ids: { skyblock: 'FUNGI_CUTTER' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'FUNGI_CUTTER_2',
		{
			ids: { skyblock: 'FUNGI_CUTTER_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'FUNGI_CUTTER_3',
		{
			ids: { skyblock: 'FUNGI_CUTTER_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'GARDEN_SCYTHE',
		{
			ids: { skyblock: 'GARDEN_SCYTHE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HIVE_BARN_SKIN',
		{
			ids: { skyblock: 'HIVE_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HYDRO_CAN_1000',
		{
			ids: { skyblock: 'HYDRO_CAN_1000' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HYDRO_CAN_TURBO_2000',
		{
			ids: { skyblock: 'HYDRO_CAN_TURBO_2000' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'HYDRO_CAN_ULTRA_3000',
		{
			ids: { skyblock: 'HYDRO_CAN_ULTRA_3000' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'INFINI_VACUUM',
		{
			ids: { skyblock: 'INFINI_VACUUM' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'INFINI_VACUUM_HOOVERIUS',
		{
			ids: { skyblock: 'INFINI_VACUUM_HOOVERIUS' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'LOTUS_BELT',
		{
			ids: { skyblock: 'LOTUS_BELT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'LOTUS_BRACELET',
		{
			ids: { skyblock: 'LOTUS_BRACELET' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'LOTUS_CLOAK',
		{
			ids: { skyblock: 'LOTUS_CLOAK' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'LOTUS_NECKLACE',
		{
			ids: { skyblock: 'LOTUS_NECKLACE' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'MOON_GREENHOUSE_SKIN',
		{
			ids: { skyblock: 'MOON_GREENHOUSE_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'ORCHARD_GREENHOUSE_SKIN',
		{
			ids: { skyblock: 'ORCHARD_GREENHOUSE_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PEST_REPELLENT',
		{
			ids: { skyblock: 'PEST_REPELLENT' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PEST_REPELLENT_MAX',
		{
			ids: { skyblock: 'PEST_REPELLENT_MAX' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PLANT_DIAGNOSTICS_TOOL',
		{
			ids: { skyblock: 'PLANT_DIAGNOSTICS_TOOL' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PORTABLE_WASHER',
		{
			ids: { skyblock: 'PORTABLE_WASHER' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'PUMPKIN_DICER',
		{
			ids: { skyblock: 'PUMPKIN_DICER' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'PUMPKIN_DICER_2',
		{
			ids: { skyblock: 'PUMPKIN_DICER_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'PUMPKIN_DICER_3',
		{
			ids: { skyblock: 'PUMPKIN_DICER_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'SAM_SCYTHE',
		{
			ids: { skyblock: 'SAM_SCYTHE' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'SF:LUCKY_BARN_SKIN',
		{
			ids: {
				cofl: 'LUCKY_BARN_SKIN',
				skyblock: 'LUCKY_BARN_SKIN',
			},
			links: {},
			metadata: {
				description: null,
				id: 'LUCKY_BARN_SKIN',
				name: 'Lucky Barn Skin',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:MELON_BARN_SKIN',
		{
			ids: {
				cofl: 'MELON_BARN_SKIN',
				skyblock: 'MELON_BARN_SKIN',
			},
			links: {},
			metadata: {
				description: null,
				id: 'MELON_BARN_SKIN',
				name: 'Melon Barn Skin',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SF:YELLOW_BANDANA',
		{
			ids: {
				cofl: 'YELLOW_BANDANA',
				skyblock: 'YELLOW_BANDANA',
			},
			links: {},
			metadata: {
				description: null,
				id: 'YELLOW_BANDANA',
				name: 'Yellow Bandana',
				textureUrl: null,
			},
			tradesOn: AH,
			type: 'missing',
		},
	],
	[
		'SKYMART_HYPER_VACUUM',
		{
			ids: { skyblock: 'SKYMART_HYPER_VACUUM' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SKYMART_TURBO_VACUUM',
		{
			ids: { skyblock: 'SKYMART_TURBO_VACUUM' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SKYMART_VACUUM',
		{
			ids: { skyblock: 'SKYMART_VACUUM' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'SPRAYONATOR',
		{
			ids: { skyblock: 'SPRAYONATOR' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'SUNFLOWER_GENERATOR_11',
		{
			ids: { skyblock: 'SUNFLOWER_GENERATOR_11' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'SUNFLOWER_GENERATOR_12',
		{
			ids: { skyblock: 'SUNFLOWER_GENERATOR_12' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'TAVERN_BARN_SKIN',
		{
			ids: { skyblock: 'TAVERN_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_CANE_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_CANE_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_CANE_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_CANE_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_CANE_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_CANE_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_CARROT_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_CARROT_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_CARROT_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_CARROT_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_CARROT_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_CARROT_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_POTATO_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_POTATO_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_POTATO_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_POTATO_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_POTATO_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_POTATO_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_SUNFLOWER_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_SUNFLOWER_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_SUNFLOWER_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_SUNFLOWER_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_SUNFLOWER_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_SUNFLOWER_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WARTS_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WARTS_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WARTS_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WARTS_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WARTS_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WARTS_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WHEAT_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WHEAT_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WHEAT_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WHEAT_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WHEAT_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WHEAT_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WILD_ROSE_1',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WILD_ROSE_1' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WILD_ROSE_2',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WILD_ROSE_2' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'THEORETICAL_HOE_WILD_ROSE_3',
		{
			ids: { skyblock: 'THEORETICAL_HOE_WILD_ROSE_3' },
			links: {},
			tradesOn: NOWHERE,
			type: 'basic',
		},
	],
	[
		'TRADING_POST_BARN_SKIN',
		{
			ids: { skyblock: 'TRADING_POST_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
	[
		'WINDMILL_BARN_SKIN',
		{
			ids: { skyblock: 'WINDMILL_BARN_SKIN' },
			links: {},
			tradesOn: AH,
			type: 'basic',
		},
	],
])

export const allItems = new Map<string, ItemMetadata>([
	...bitsItems.entries(),
	...crimsonIsleItems.entries(),
	...northStarItems.entries(),
	...pestItems.entries(),
	...skymartItems.entries(),
])
