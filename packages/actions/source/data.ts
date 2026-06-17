import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { actions as _crimsonIsle } from '../data/crimson-isle.json'
import { actions as _enchantments } from '../data/enchantments.json'
import { actions as _forging } from '../data/forging.json'
import { actions as _gems } from '../data/gems.json'
import { actions as _gemstones } from '../data/gemstones.json'
import { actions as _materialsCoal } from '../data/materials/coal.json'
import { actions as _materialsDiamond } from '../data/materials/diamond.json'
import { actions as _materialsLily } from '../data/materials/lily.json'
import { actions as _materialsLotus } from '../data/materials/lotus.json'
import { actions as _materialsMithril } from '../data/materials/mithril.json'
import { actions as _materialsMycelium } from '../data/materials/mycelium.json'
import { actions as _materialsRedSand } from '../data/materials/red-sand.json'
import { actions as _adventurer } from '../data/merchants/adventurer.json'
import { actions as _bingo } from '../data/merchants/bingo.json'
import { actions as _bubu } from '../data/merchants/bubu.json'
import { actions as _bulvar } from '../data/merchants/bulvar.json'
import { actions as _einary } from '../data/merchants/einary.json'
import { actions as _elizabeth } from '../data/merchants/elizabeth.json'
import { actions as _fishingMerchant } from '../data/merchants/fishing-merchant.json'
import { actions as _hilda } from '../data/merchants/hilda.json'
import { actions as _lotusEater } from '../data/merchants/lotus-eater.json'
import { actions as _marthos } from '../data/merchants/marthos.json'
import { actions as _nemo } from '../data/merchants/nemo.json'
import { actions as _phillip } from '../data/merchants/phillip.json'
import { actions as _plumberJoe } from '../data/merchants/plumber-joe.json'
import { actions as _researcherBeryl } from '../data/merchants/researcher-beryl.json'
import { actions as _seymour } from '../data/merchants/seymour.json'
import { actions as _skymart } from '../data/merchants/skymart.json'
import { actions as _smithmonger } from '../data/merchants/smithmonger.json'
import { actions as _minionsBlaze } from '../data/minions/blaze.json'
import { actions as _minionsCaveSpider } from '../data/minions/cave-spider.json'
import { actions as _minionsCreeper } from '../data/minions/creeper.json'
import { actions as _minionsEnderman } from '../data/minions/enderman.json'
import { actions as _minionsGhast } from '../data/minions/ghast.json'
import { actions as _minionsLilyPad } from '../data/minions/lily-pad.json'
import { actions as _minionsMycelium } from '../data/minions/mycelium.json'
import { actions as _minionsRedSand } from '../data/minions/red-sand.json'
import { actions as _minionsSkeleton } from '../data/minions/skeleton.json'
import { actions as _minionsSlime } from '../data/minions/slime.json'
import { actions as _minionsSpider } from '../data/minions/spider.json'
import { actions as _minionsVampire } from '../data/minions/vampire.json'
import { actions as _minionsZombie } from '../data/minions/zombie.json'
import { actions as _northStarsCrafts } from '../data/north-stars-crafts.json'
import { actions as _vanilla } from '../data/vanilla.json'

import { Action } from './types'

// materials

export const materialsCoal = _materialsCoal as Action[]
export const materialsDiamond = _materialsDiamond as Action[]
export const materialsLily = _materialsLily as Action[]
export const materialsLotus = _materialsLotus as Action[]
export const materialsMithril = _materialsMithril as Action[]
export const materialsMycelium = _materialsMycelium as Action[]
export const materialsRedSand = _materialsRedSand as Action[]

// merchants

export const adventurer = _adventurer as Action[]
export const bingo = _bingo as Action[]
export const bubu = _bubu as Action[]
export const bulvar = _bulvar as Action[]
export const einary = _einary as Action[]
export const elizabeth = _elizabeth as Action[]
export const fishingMerchant = _fishingMerchant as Action[]
export const hilda = _hilda as Action[]
export const lotusEater = _lotusEater as Action[]
export const marthos = _marthos as Action[]
export const nemo = _nemo as Action[]
export const phillip = _phillip as Action[]
export const plumberJoe = _plumberJoe as Action[]
export const researcherBeryl = _researcherBeryl as Action[]
export const seymour = _seymour as Action[]
export const skymart = _skymart as Action[]
export const smithmonger = _smithmonger as Action[]

// minions

export const minionsBlaze = _minionsBlaze as Action[]
export const minionsCaveSpider = _minionsCaveSpider as Action[]
export const minionsCreeper = _minionsCreeper as Action[]
export const minionsEnderman = _minionsEnderman as Action[]
export const minionsGhast = _minionsGhast as Action[]
export const minionsLilyPad = _minionsLilyPad as Action[]
export const minionsMycelium = _minionsMycelium as Action[]
export const minionsRedSand = _minionsRedSand as Action[]
export const minionsSkeleton = _minionsSkeleton as Action[]
export const minionsSlime = _minionsSlime as Action[]
export const minionsSpider = _minionsSpider as Action[]
export const minionsVampire = _minionsVampire as Action[]
export const minionsZombie = _minionsZombie as Action[]

// other

export const bitsCrafts = _bitsCrafts as Action[]
export const crimsonIsle = _crimsonIsle as Action[]
export const enchantments = _enchantments as Action[]
export const forging = _forging as Action[]
export const gems = _gems as Action[]
export const gemstones = _gemstones as Action[]
export const northStarsCrafts = _northStarsCrafts as Action[]
export const vanilla = _vanilla as Action[]

export const allActions: Action[] = [
	...adventurer,
	...bingo,
	...bitsCrafts,
	...bubu,
	...bulvar,
	...crimsonIsle,
	...einary,
	...elizabeth,
	...enchantments,
	...fishingMerchant,
	...forging,
	...gems,
	...gemstones,
	...hilda,
	...lotusEater,
	...marthos,
	...materialsCoal,
	...materialsDiamond,
	...materialsLily,
	...materialsLotus,
	...materialsMithril,
	...materialsMycelium,
	...materialsRedSand,
	...minionsBlaze,
	...minionsCaveSpider,
	...minionsCreeper,
	...minionsEnderman,
	...minionsGhast,
	...minionsLilyPad,
	...minionsMycelium,
	...minionsRedSand,
	...minionsSkeleton,
	...minionsSlime,
	...minionsSpider,
	...minionsVampire,
	...minionsZombie,
	...nemo,
	...northStarsCrafts,
	...phillip,
	...plumberJoe,
	...researcherBeryl,
	...seymour,
	...skymart,
	...smithmonger,
	...vanilla,
]
