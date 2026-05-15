import { actions as _adventurer } from '../data/merchants/adventurer.json'
import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { actions as _bubu } from '../data/merchants/bubu.json'
import { actions as _bulvar } from '../data/merchants/bulvar.json'
import { actions as _crimsonIsle } from '../data/crimson-isle.json'
import { actions as _einary } from '../data/merchants/einary.json'
import { actions as _elizabeth } from '../data/merchants/elizabeth.json'
import { actions as _fishingMerchant } from '../data/merchants/fishing-merchant.json'
import { actions as _gems } from '../data/gems.json'
import { actions as _northStarsCrafts } from '../data/north-stars-crafts.json'
import { actions as _phillip } from '../data/merchants/phillip.json'
import { actions as _plumberJoe } from '../data/merchants/plumber-joe.json'
import { actions as _seymour } from '../data/merchants/seymour.json'
import { actions as _skymart } from '../data/merchants/skymart.json'
import { actions as _smithmonger } from '../data/merchants/smithmonger.json'
import { actions as _wood } from '../data/wood.json'
import { Action } from './types'

// merchants

export const adventurer = _adventurer as Action[]
export const bubu = _bubu as Action[]
export const bulvar = _bulvar as Action[]
export const einary = _einary as Action[]
export const elizabeth = _elizabeth as Action[]
export const fishingMerchant = _fishingMerchant as Action[]
export const phillip = _phillip as Action[]
export const plumberJoe = _plumberJoe as Action[]
export const seymour = _seymour as Action[]
export const skymart = _skymart as Action[]
export const smithmonger = _smithmonger as Action[]

// other

export const bitsCrafts = _bitsCrafts as Action[]
export const crimsonIsle = _crimsonIsle as Action[]
export const gems = _gems as Action[]
export const northStarsCrafts = _northStarsCrafts as Action[]
export const wood = _wood as Action[]

export const allActions = [
	...adventurer,
	...bitsCrafts,
	...bubu,
	...bulvar,
	...crimsonIsle,
	...einary,
	...elizabeth,
	...fishingMerchant,
	...gems,
	...northStarsCrafts,
	...phillip,
	...plumberJoe,
	...seymour,
	...skymart,
	...smithmonger,
	...wood,
]
