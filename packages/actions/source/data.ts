import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { actions as _crimsonIsle } from '../data/crimson-isle.json'
import { actions as _forging } from '../data/forging.json'
import { actions as _gems } from '../data/gems.json'
import { actions as _gemstones } from '../data/gemstones.json'
import { actions as _materialsDiamond } from '../data/materials/diamond.json'
import { actions as _materialsMithril } from '../data/materials/mithril.json'
import { actions as _adventurer } from '../data/merchants/adventurer.json'
import { actions as _bubu } from '../data/merchants/bubu.json'
import { actions as _bulvar } from '../data/merchants/bulvar.json'
import { actions as _einary } from '../data/merchants/einary.json'
import { actions as _elizabeth } from '../data/merchants/elizabeth.json'
import { actions as _fishingMerchant } from '../data/merchants/fishing-merchant.json'
import { actions as _hilda } from '../data/merchants/hilda.json'
import { actions as _marthos } from '../data/merchants/marthos.json'
import { actions as _phillip } from '../data/merchants/phillip.json'
import { actions as _plumberJoe } from '../data/merchants/plumber-joe.json'
import { actions as _seymour } from '../data/merchants/seymour.json'
import { actions as _skymart } from '../data/merchants/skymart.json'
import { actions as _smithmonger } from '../data/merchants/smithmonger.json'
import { actions as _minionsBlaze } from '../data/minions/blaze.json'
import { actions as _minionsCaveSpider } from '../data/minions/cave-spider.json'
import { actions as _minionsCreeper } from '../data/minions/creeper.json'
import { actions as _minionsEnderman } from '../data/minions/enderman.json'
import { actions as _minionsGhast } from '../data/minions/ghast.json'
import { actions as _minionsSkeleton } from '../data/minions/skeleton.json'
import { actions as _minionsSlime } from '../data/minions/slime.json'
import { actions as _minionsSpider } from '../data/minions/spider.json'
import { actions as _minionsVampire } from '../data/minions/vampire.json'
import { actions as _minionsZombie } from '../data/minions/zombie.json'
import { actions as _northStarsCrafts } from '../data/north-stars-crafts.json'
import { actions as _wood } from '../data/wood.json'

import { Action } from './types'

// materials

export const materialsDiamond = _materialsDiamond as Action[]
export const materialsMithril = _materialsMithril as Action[]

// merchants

export const adventurer = _adventurer as Action[]
export const bubu = _bubu as Action[]
export const bulvar = _bulvar as Action[]
export const einary = _einary as Action[]
export const elizabeth = _elizabeth as Action[]
export const fishingMerchant = _fishingMerchant as Action[]
export const hilda = _hilda as Action[]
export const marthos = _marthos as Action[]
export const phillip = _phillip as Action[]
export const plumberJoe = _plumberJoe as Action[]
export const seymour = _seymour as Action[]
export const skymart = _skymart as Action[]
export const smithmonger = _smithmonger as Action[]

// minions

export const minionsBlaze = _minionsBlaze as Action[]
export const minionsCaveSpider = _minionsCaveSpider as Action[]
export const minionsCreeper = _minionsCreeper as Action[]
export const minionsEnderman = _minionsEnderman as Action[]
export const minionsGhast = _minionsGhast as Action[]
export const minionsSkeleton = _minionsSkeleton as Action[]
export const minionsSlime = _minionsSlime as Action[]
export const minionsSpider = _minionsSpider as Action[]
export const minionsVampire = _minionsVampire as Action[]
export const minionsZombie = _minionsZombie as Action[]

// other

export const bitsCrafts = _bitsCrafts as Action[]
export const crimsonIsle = _crimsonIsle as Action[]
export const forging = _forging as Action[]
export const gems = _gems as Action[]
export const gemstones = _gemstones as Action[]
export const northStarsCrafts = _northStarsCrafts as Action[]
export const wood = _wood as Action[]

export const allActions: Action[] = [
	...adventurer,
	...bitsCrafts,
	...bubu,
	...bulvar,
	...crimsonIsle,
	...einary,
	...elizabeth,
	...fishingMerchant,
	...forging,
	...gems,
	...gemstones,
	...hilda,
	...marthos,
	...materialsDiamond,
	...materialsMithril,
	...minionsBlaze,
	...minionsCaveSpider,
	...minionsCreeper,
	...minionsEnderman,
	...minionsGhast,
	...minionsSkeleton,
	...minionsSlime,
	...minionsSpider,
	...minionsVampire,
	...minionsZombie,
	...northStarsCrafts,
	...phillip,
	...plumberJoe,
	...seymour,
	...skymart,
	...smithmonger,
	...wood,
]
