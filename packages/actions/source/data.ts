import { actions as _bits } from '../data/bits.json'
import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { Action } from './schema'

export const bits = _bits as Action[]
export const bitsCrafts = _bitsCrafts as Action[]

export const allActions = [...bits, ...bitsCrafts]
