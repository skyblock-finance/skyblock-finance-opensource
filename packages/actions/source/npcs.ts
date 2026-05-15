import { NpcId } from './types'

export const npcs = new Map<
	NpcId,
	{
		name: string
		links: {
			communityWiki: `https://hypixelskyblock.minecraft.wiki/${string}` | null
			hypixelWiki: `https://wiki.hypixel.net/${string}` | null
		}
	}
>([
	[
		'ALCHEMIST',
		{
			name: 'Elizabeth',
			links: {
				communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Alchemist',
				hypixelWiki: 'https://wiki.hypixel.net/Alchemist',
			},
		},
	],
	[
		'ELIZABETH',
		{
			name: 'Elizabeth',
			links: {
				communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Elizabeth',
				hypixelWiki: 'https://wiki.hypixel.net/Elizabeth',
			},
		},
	],
	[
		'EINARY',
		{
			name: 'Elizabeth',
			links: {
				communityWiki: 'https://hypixelskyblock.minecraft.wiki/w/Einary',
				hypixelWiki: 'https://wiki.hypixel.net/Einary',
			},
		},
	],
	[
		'PHILLIP',
		{
			name: 'Pesthunter Phillip',
			links: {
				communityWiki:
					'https://hypixelskyblock.minecraft.wiki/w/Pesthunter_Phillip',
				hypixelWiki: 'https://wiki.hypixel.net/Pesthunter_Phillip',
			},
		},
	],
	[
		'SKYMART',
		{
			name: 'SkyMart',
			links: {
				communityWiki:
					'https://hypixelskyblock.minecraft.wiki/w/The_Garden#The_Desk',
				hypixelWiki: 'https://wiki.hypixel.net/Garden#Desk',
			},
		},
	],
])
