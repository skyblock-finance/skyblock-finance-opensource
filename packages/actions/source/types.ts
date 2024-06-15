import { z } from 'zod'
import {
	actionIoCurrencySchema,
	actionIoItemSchema,
	actionIoSchema,
	actionSchema,
} from './schema'

export type Action = z.output<typeof actionSchema>
export type ActionCurrency = z.output<typeof actionIoCurrencySchema.shape.id>
export type ActionIo = z.output<typeof actionIoSchema>
export type ActionIoCurrency = z.output<typeof actionIoCurrencySchema>
export type ActionIoItem = z.output<typeof actionIoItemSchema>
