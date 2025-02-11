import { actions as _bits } from '../data/bits.json'
import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { actions as _crimsonIsle } from '../data/crimson-isle.json'
import { actions as _gems } from '../data/gems.json'
import { actions as _northStars } from '../data/north-stars.json'
import { actions as _northStarsCrafts } from '../data/north-stars-crafts.json'
import { actions as _pests } from '../data/pests.json'
import { actions as _wood } from '../data/wood.json'
import { Action } from './types'

export const bits = _bits as Action[]
export const bitsCrafts = _bitsCrafts as Action[]
export const crimsonIsle = _crimsonIsle as Action[]

export const gems = _gems as Action[]

export const northStars = _northStars as Action[]
export const northStarsCrafts = _northStarsCrafts as Action[]

export const pests = _pests as Action[]

export const wood = _wood as Action[]

export const allActions = [
	...bits,
	...bitsCrafts,
	...crimsonIsle,
	...gems,
	...northStars,
	...northStarsCrafts,
	...pests,
	...wood,
]
