import { actions as _accessoryAnguish } from '../data/accessories/anguish.json'
import { actions as _agingItems } from '../data/aging-items.json'
import { actions as _armorSorrow } from '../data/armor/sorrow.json'
import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { actions as _crimsonIsle } from '../data/crimson-isle.json'
import { actions as _enchantmentCrafts } from '../data/enchantment-crafts.json'
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
import { actions as _merchantAdventurer } from '../data/merchants/adventurer.json'
import { actions as _merchantAnita } from '../data/merchants/anita.json'
import { actions as _merchantBingo } from '../data/merchants/bingo.json'
import { actions as _merchantBubu } from '../data/merchants/bubu.json'
import { actions as _merchantBulvar } from '../data/merchants/bulvar.json'
import { actions as _merchantEinary } from '../data/merchants/einary.json'
import { actions as _merchantElizabeth } from '../data/merchants/elizabeth.json'
import { actions as _merchantFishingMerchant } from '../data/merchants/fishing-merchant.json'
import { actions as _merchantHilda } from '../data/merchants/hilda.json'
import { actions as _merchantLotusEater } from '../data/merchants/lotus-eater.json'
import { actions as _merchantLumina } from '../data/merchants/lumina.json'
import { actions as _merchantMarthos } from '../data/merchants/marthos.json'
import { actions as _merchantNemo } from '../data/merchants/nemo.json'
import { actions as _merchantPhillip } from '../data/merchants/phillip.json'
import { actions as _merchantPlumberJoe } from '../data/merchants/plumber-joe.json'
import { actions as _merchantResearcherBeryl } from '../data/merchants/researcher-beryl.json'
import { actions as _merchantSeymour } from '../data/merchants/seymour.json'
import { actions as _merchantSkymart } from '../data/merchants/skymart.json'
import { actions as _merchantSmithmonger } from '../data/merchants/smithmonger.json'
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
import { actions as _unique } from '../data/unique.json'
import { actions as _vanilla } from '../data/vanilla.json'

import { Action } from './types'

// accessories

export const accessoryAnguish = _accessoryAnguish as Action[]

// armor

export const armorSorrow = _armorSorrow as Action[]

// materials

export const materialsCoal = _materialsCoal as Action[]
export const materialsDiamond = _materialsDiamond as Action[]
export const materialsLily = _materialsLily as Action[]
export const materialsLotus = _materialsLotus as Action[]
export const materialsMithril = _materialsMithril as Action[]
export const materialsMycelium = _materialsMycelium as Action[]
export const materialsRedSand = _materialsRedSand as Action[]

// merchants

export const merchantAdventurer = _merchantAdventurer as Action[]
export const merchantAnita = _merchantAnita as Action[]
export const merchantBingo = _merchantBingo as Action[]
export const merchantBubu = _merchantBubu as Action[]
export const merchantBulvar = _merchantBulvar as Action[]
export const merchantEinary = _merchantEinary as Action[]
export const merchantElizabeth = _merchantElizabeth as Action[]
export const merchantFishingMerchant = _merchantFishingMerchant as Action[]
export const merchantHilda = _merchantHilda as Action[]
export const merchantLotusEater = _merchantLotusEater as Action[]
export const merchantLumina = _merchantLumina as Action[]
export const merchantMarthos = _merchantMarthos as Action[]
export const merchantNemo = _merchantNemo as Action[]
export const merchantPhillip = _merchantPhillip as Action[]
export const merchantPlumberJoe = _merchantPlumberJoe as Action[]
export const merchantResearcherBeryl = _merchantResearcherBeryl as Action[]
export const merchantSeymour = _merchantSeymour as Action[]
export const merchantSkymart = _merchantSkymart as Action[]
export const merchantSmithmonger = _merchantSmithmonger as Action[]

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

export const agingItems = _agingItems as Action[]
export const bitsCrafts = _bitsCrafts as Action[]
export const crimsonIsle = _crimsonIsle as Action[]
export const enchantmentCrafts = _enchantmentCrafts as Action[]
export const enchantments = _enchantments as Action[]
export const forging = _forging as Action[]
export const gems = _gems as Action[]
export const gemstones = _gemstones as Action[]
export const northStarsCrafts = _northStarsCrafts as Action[]
export const unique = _unique as Action[]
export const vanilla = _vanilla as Action[]

export const allActions: Action[] = [
	...accessoryAnguish,
	...agingItems,
	...armorSorrow,
	...bitsCrafts,
	...crimsonIsle,
	...enchantmentCrafts,
	...enchantments,
	...forging,
	...gems,
	...gemstones,
	...materialsCoal,
	...materialsDiamond,
	...materialsLily,
	...materialsLotus,
	...materialsMithril,
	...materialsMycelium,
	...materialsRedSand,
	...merchantAdventurer,
	...merchantAnita,
	...merchantBingo,
	...merchantBubu,
	...merchantBulvar,
	...merchantEinary,
	...merchantElizabeth,
	...merchantFishingMerchant,
	...merchantHilda,
	...merchantLumina,
	...merchantLotusEater,
	...merchantMarthos,
	...merchantNemo,
	...merchantPhillip,
	...merchantPlumberJoe,
	...merchantResearcherBeryl,
	...merchantSeymour,
	...merchantSkymart,
	...merchantSmithmonger,
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
	...northStarsCrafts,
	...unique,
	...vanilla,
]
