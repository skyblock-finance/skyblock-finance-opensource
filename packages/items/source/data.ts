import { ItemMetadata, ItemMetadataTradesOn } from './types'

const BZ = { ah: false, bz: true } satisfies ItemMetadataTradesOn
const AH = { ah: true, bz: true } satisfies ItemMetadataTradesOn

export const allItems = new Map<string, ItemMetadata>([
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_SUMSUNG_1' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_SUMSUNG_2' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_SUMSUNG_2' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_REZAR' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_BLUE_RED' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_BLUE_BLUE' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_BLUE_GREEN' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_BLUE_YELLOW' },
			links: {},
			metadata: {
				description: '',
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
			ids: { skyblock: 'ABIPHONE', cofl: 'ABICASE_BLUE_AQUA' },
			links: {},
			metadata: {
				description: '',
				id: 'SF:ABICASE_BLUE_AQUA',
				name: 'Lighter Blue™ Abicase',
				textureUrl: null,
			},
		},
	],
])
