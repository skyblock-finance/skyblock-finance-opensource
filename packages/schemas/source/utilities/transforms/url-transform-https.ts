import { z } from 'zod/v4'

export const urlTransformHttps = z.preprocess(
	(url) => (url as string).replace(/^http:/, 'https:'),
	z.string().url(),
)
