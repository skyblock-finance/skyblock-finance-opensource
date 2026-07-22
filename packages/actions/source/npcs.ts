import { NpcId } from './types'

type NpcMetadata = {
	links: {
		communityWiki: `https://hypixelskyblock.minecraft.wiki/${string}` | null
	}
	name: string
}

const _npcs: Record<NpcId, NpcMetadata> = {
	ADVENTURER: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Adventurer',
		},
		name: 'Adventurer',
	},
	ALCHEMIST: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Alchemist',
		},
		name: 'Alchemist',
	},
	ANITA: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Anita',
		},
		name: 'Anita',
	},
	BINGO: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bingo_(NPC)',
		},
		name: 'Bingo',
	},
	BUBU: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bubu',
		},
		name: 'Bubu',
	},
	BULVAR: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bulvar',
		},
		name: 'Bulvar',
	},
	EINARY: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Einary',
		},
		name: 'Einary',
	},
	ELIZABETH: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Elizabeth',
		},
		name: 'Elizabeth',
	},
	FISHING_MERCHANT: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Fishing_Merchant',
		},
		name: 'Fishing Merchant',
	},
	HILDA: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Hilda',
		},
		name: 'Hilda',
	},
	HUSBANDRY_MERCHANT: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Husbandry_Merchant',
		},
		name: 'Husbandry Merchant',
	},
	LOTUS_EATER: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/The_Lotus_Eater',
		},
		name: 'The Lotus Eater',
	},
	LUMINA: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Lumina',
		},
		name: 'Lumina',
	},
	MARTHOS: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Marthos',
		},
		name: 'Marthos',
	},
	NEMO: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Nemo',
		},
		name: 'Nemo',
	},
	PHILLIP: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Pesthunter_Phillip',
		},
		name: 'Pesthunter Phillip',
	},
	PLUMBER_JOE: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Plumber_Joe',
		},
		name: 'Plumber Joe',
	},
	RESEARCHER_BERYL: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Researcher_Beryl',
		},
		name: 'Researcher Beryl',
	},
	SEYMOUR: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Seymour',
		},
		name: 'Seymour',
	},
	SKYMART: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/The_Garden#The_Desk',
		},
		name: 'SkyMart',
	},
	SMITHMONGER: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Smithmonger',
		},
		name: 'Smithmonger',
	},
}

export const npcs = new Map<NpcId, NpcMetadata>(
	Object.entries(_npcs) as [NpcId, NpcMetadata][],
)
