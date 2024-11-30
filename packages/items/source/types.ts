export type ItemMetadataIds = {
	skyblock: string | null
	cofl?: string
}

export type ItemMetadataLinks = {
	fandomWiki?: string
	hypixelWiki?: string
}

export type ItemMetadataTradesOn = {
	ah: boolean | null
	bz: boolean | null
}

export type ItemMetadataBasic = {
	type: 'basic'

	// base
	ids: ItemMetadataIds
	links: ItemMetadataLinks
	tradesOn: ItemMetadataTradesOn
}

export type ItemMetadataMissing = {
	type: 'missing'

	// base
	ids: ItemMetadataIds
	links: ItemMetadataLinks
	tradesOn: ItemMetadataTradesOn

	// custom
	metadata: {
		description: string | null
		id: string
		name: string
		textureUrl: string | null
	}
}

export type ItemMetadataIncorrect = {
	type: 'incorrect'

	// base
	ids: ItemMetadataIds
	links: ItemMetadataLinks
	tradesOn: ItemMetadataTradesOn

	// custom
	corrected: {
		description?: string
		name?: string
		textureUrl?: string | null
	}
}

export type ItemMetadata =
	| ItemMetadataBasic
	| ItemMetadataIncorrect
	| ItemMetadataMissing
