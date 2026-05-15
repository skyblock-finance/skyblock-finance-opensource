import { NpcId } from './types'

type NpcMetadata = {
	name: string
	links: {
		communityWiki: `https://hypixelskyblock.minecraft.wiki/${string}` | null
		hypixelWiki: `https://wiki.hypixel.net/${string}` | null
	}
}

const _npcs: Record<NpcId, NpcMetadata> = {
	ADVENTURER: {
		name: 'Adventurer',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Adventurer',
			hypixelWiki: 'https://wiki.hypixel.net/Adventurer',
		},
	},
	ALCHEMIST: {
		name: 'Elizabeth',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Alchemist',
			hypixelWiki: 'https://wiki.hypixel.net/Alchemist',
		},
	},
	BUBU: {
		name: 'Bubu',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bubu',
			hypixelWiki: 'https://wiki.hypixel.net/Bubu',
		},
	},
	BULVAR: {
		name: 'Bulvar',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Bulvar',
			hypixelWiki: 'https://wiki.hypixel.net/Bulvar',
		},
	},
	ELIZABETH: {
		name: 'Elizabeth',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Elizabeth',
			hypixelWiki: 'https://wiki.hypixel.net/Elizabeth',
		},
	},
	EINARY: {
		name: 'Elizabeth',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Einary',
			hypixelWiki: 'https://wiki.hypixel.net/Einary',
		},
	},
	FISHING_MERCHANT: {
		name: 'Fishing Merchant',
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Fishing_Merchant',
			hypixelWiki: 'https://wiki.hypixel.net/Fishing_Merchant',
		},
	},
	PHILLIP: {
		name: 'Pesthunter Phillip',
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/Pesthunter_Phillip',
			hypixelWiki: 'https://wiki.hypixel.net/Pesthunter_Phillip',
		},
	},
	SEYMOUR: {
		name: 'Seymour',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Seymour',
			hypixelWiki: 'https://wiki.hypixel.net/Seymour',
		},
	},
	SKYMART: {
		name: 'SkyMart',
		links: {
			communityWiki:
				'https://hypixelskyblock.minecraft.wiki/w/The_Garden#The_Desk',
			hypixelWiki: 'https://wiki.hypixel.net/Garden#Desk',
		},
	},
	SMITHMONGER: {
		name: 'Smithmonger',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Smithmonger',
			hypixelWiki: 'https://wiki.hypixel.net/Smithmonger',
		},
	},
	PLUMBER_JOE: {
		name: 'Plumber Joe',
		links: {
			communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Plumber_Joe',
			hypixelWiki: 'https://wiki.hypixel.net/Plumber_Joe',
		},
	},
}

export const npcs = new Map<NpcId, NpcMetadata>(
	Object.entries(_npcs) as [NpcId, NpcMetadata][],
)
