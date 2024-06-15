import { actions as _bits } from '../data/bits.json'
import { actions as _bitsCrafts } from '../data/bits-crafts.json'
import { actions as _gems } from '../data/gems.json'
import { Action } from './types'

export const bits = _bits as Action[]
export const bitsCrafts = _bitsCrafts as Action[]

export const gems = _gems as Action[]

export const allActions = [...bits, ...bitsCrafts, ...gems]
