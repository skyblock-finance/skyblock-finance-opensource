import { NpcId } from './types'

type NpcMetadata = {
	links: {
		communityWiki: `https://hypixelskyblock.minecraft.wiki/${string}` | null
		hypixelWiki: `https://wiki.hypixel.net/${string}` | null
	}
	name: string
}

const _npcs: Record<NpcId, NpcMetadata> = {
	ADVENTURER: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Adventurer',
			hypixelWiki: 'https://wiki.hypixel.net/Adventurer',
		},
		name: 'Adventurer',
	},
	ALCHEMIST: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Alchemist',
			hypixelWiki: 'https://wiki.hypixel.net/Alchemist',
		},
		name: 'Alchemist',
	},
	BINGO: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bingo_(NPC)',
			hypixelWiki: 'https://wiki.hypixel.net/Bingo_(NPC)',
		},
		name: 'Bingo',
	},
	BUBU: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bubu',
			hypixelWiki: 'https://wiki.hypixel.net/Bubu',
		},
		name: 'Bubu',
	},
	BULVAR: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bulvar',
			hypixelWiki: 'https://wiki.hypixel.net/Bulvar',
		},
		name: 'Bulvar',
	},
	EINARY: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Einary',
			hypixelWiki: 'https://wiki.hypixel.net/Einary',
		},
		name: 'Einary',
	},
	ELIZABETH: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Elizabeth',
			hypixelWiki: 'https://wiki.hypixel.net/Elizabeth',
		},
		name: 'Elizabeth',
	},
	FISHING_MERCHANT: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Fishing_Merchant',
			hypixelWiki: 'https://wiki.hypixel.net/Fishing_Merchant',
		},
		name: 'Fishing Merchant',
	},
	HILDA: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Hilda',
			hypixelWiki: 'https://wiki.hypixel.net/Hilda',
		},
		name: 'Hilda',
	},
	MARTHOS: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Marthos',
			hypixelWiki: 'https://wiki.hypixel.net/Marthos',
		},
		name: 'Marthos',
	},
	PHILLIP: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Pesthunter_Phillip',
			hypixelWiki: 'https://wiki.hypixel.net/Pesthunter_Phillip',
		},
		name: 'Pesthunter Phillip',
	},
	PLUMBER_JOE: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Plumber_Joe',
			hypixelWiki: 'https://wiki.hypixel.net/Plumber_Joe',
		},
		name: 'Plumber Joe',
	},
	SEYMOUR: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Seymour',
			hypixelWiki: 'https://wiki.hypixel.net/Seymour',
		},
		name: 'Seymour',
	},
	SKYMART: {
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/The_Garden#The_Desk',
			hypixelWiki: 'https://wiki.hypixel.net/Garden#Desk',
		},
		name: 'SkyMart',
	},
	SMITHMONGER: {
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Smithmonger',
			hypixelWiki: 'https://wiki.hypixel.net/Smithmonger',
		},
		name: 'Smithmonger',
	},
}

export const npcs = new Map<NpcId, NpcMetadata>(
	Object.entries(_npcs) as [NpcId, NpcMetadata][],
)
