import { z } from 'zod'

export const urlTransformHttps = z.preprocess(
	(url) => (url as string).replace(/^http:/, 'https:'),
	z.string().url(),
)
