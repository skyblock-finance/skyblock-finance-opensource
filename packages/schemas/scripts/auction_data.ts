import fetch from 'node-fetch'

type Auction = {
	bin: boolean
	item_name: string
	starting_bid: number
}

async function attemptApiConnection<T>(
	f: () => Promise<T>,
	fargs: any,
	g: () => Promise<T>,
	gargs: any,
): Promise<T> {
	try {
		return await f()
	} catch (error) {
		console.log('Something is wrong with my internet again ;-;')
		return g()
	}
}

function getAhDummyData(): Record<string, number> {
	return {
		'Water Hydra Head': 3000000,
	}
}

async function getAhApiData(): Promise<Record<string, number>> {
	const response = await fetch('https://api.hypixel.net/v2/skyblock/auctions')
	const ah = await response.json()

	const ahBin: Record<string, number> = {}
	for (const auction of ah.auctions) {
		if (!auction.bin) {
			continue
		}
		if (!(auction.item_name in ahBin)) {
			ahBin[auction.item_name] = auction.starting_bid
		} else {
			ahBin[auction.item_name] = Math.min(
				ahBin[auction.item_name],
				auction.starting_bid,
			)
		}
	}

	const dummy = getAhDummyData()
	for (const [k, v] of Object.entries(dummy)) {
		if (!(k in ahBin)) {
			console.log(`${k} not found in ah data, using dummy data instead.`)
			ahBin[k] = v
		}
	}
	return ahBin
}

async function getAhData(): Promise<Record<string, number>> {
	return attemptApiConnection(getAhApiData, null, getAhDummyData, null)
}

async function main(): Promise<void> {
	console.log('idfk anymore')

	const urls = [
		'https://sky.coflnet.com/api/item/price/WATER_HYDRA_HEAD/',
		'https://sky.coflnet.com/api/item/price/WATER_HYDRA_HEAD/bin',
		'https://sky.coflnet.com/api/item/price/WATER_HYDRA_HEAD/history/day',
		'https://sky.coflnet.com/api/item/price/WATER_HYDRA_HEAD/current',
	]

	for (const url of urls) {
		const response = await fetch(url)
		const data = await response.json()
		console.log(data)
	}
}

if (require.main === module) {
	main().catch((error) => console.error(error))
}
