export * as api from '../source/api'
export * as common from '../source/common'
export * as enums from '../source/enums'
export * as utilities from '../source/utilities'

import bz from '../data/bazaar.json'
import { bazaarResponseSchemaStrict } from '../source/api/bazaar/strict'

const parsed = bazaarResponseSchemaStrict.parse(bz)
console.log(parsed.lastUpdated)
// console.log(bz)

// bun packages\schemas\scripts\index.ts
// bun run watch1

import { attemptApiConnection } from './attempt_connection'
import { minions, GetTotalCost, MakeMinion } from './minions'

// console.log(minions)
const donut = MakeMinion('COBBLESTONE_GENERATOR', 11)
console.log(donut)
