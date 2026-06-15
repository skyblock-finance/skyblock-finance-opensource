import { z } from 'zod/v4'

import {
	actionIoCrystalSchema,
	actionIoCurrencySchema,
	actionIoItemSchema,
	actionIoPetSchema,
	actionIoSchema,
	actionRequirementSchema,
	actionSchema,
	npcIdSchema,
} from './schema'

export type Action = z.output<typeof actionSchema>
export type ActionCurrency = z.output<typeof actionIoCurrencySchema.shape.id>
export type ActionIo = z.output<typeof actionIoSchema>
export type ActionIoCrystal = z.output<typeof actionIoCrystalSchema>
export type ActionIoCurrency = z.output<typeof actionIoCurrencySchema>
export type ActionIoItem = z.output<typeof actionIoItemSchema>
export type ActionIoPet = z.output<typeof actionIoPetSchema>
export type ActionRequirement = z.output<typeof actionRequirementSchema>
export type NpcId = z.output<typeof npcIdSchema>
