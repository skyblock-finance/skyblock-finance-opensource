import { z } from 'zod'

import { toDate } from '../utilities/preprocessors/to-date'

export const apiResponseSchema = z.object({
	lastUpdated: z.preprocess(toDate, z.date()),
	success: z.boolean(),
})
