export const minions = {
	COBBLESTONE_GENERATOR: {
		speed: [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7, 6],
		storage: [64, 192, 192, 384, 384, 576, 576, 768, 768, 960, 960, 960],
		cost: [
			{ WOOD_PICKAXE: 1, COBBLESTONE: 80 },
			{ COBBLESTONE: 160 },
			{ COBBLESTONE: 320 },
			{ COBBLESTONE: 512 },
			{ ENCHANTED_COBBLESTONE: 8 },
			{ ENCHANTED_COBBLESTONE: 16 },
			{ ENCHANTED_COBBLESTONE: 32 },
			{ ENCHANTED_COBBLESTONE: 64 },
			{ ENCHANTED_COBBLESTONE: 128 },
			{ ENCHANTED_COBBLESTONE: 256 },
			{ ENCHANTED_COBBLESTONE: 512 },
			{ Coins: 2000000, ENCHANTED_COBBLESTONE: 1024 },
		],
		drop: {
			COBBLESTONE: {
				amount: 1,
				percent: 1,
				exp: { mining: 0.1 },
			},
		},
	},
}

export function GetTotalCost(cost, tier) {
	const total = {}
	for (let i = 0; i < tier; i++)
		for (const k in cost[i]) {
			if (k in total) total[k] += cost[i][k]
			else total[k] = cost[i][k]
		}
	return total
}

export function MakeMinion(name, tier) {
	return {
		id: name,
		speed: minions[name].speed[tier - 1],
		storage: minions[name].storage[tier - 1],
		cost: GetTotalCost(minions[name].cost, tier),
		drop: minions[name].drop,
	}
}
