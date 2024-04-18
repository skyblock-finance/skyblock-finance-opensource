import { z } from 'zod'

import { urlTransformHttps } from '../../utilities/transforms/url-transform-https'
import { base64JsonToObject } from '../../utilities/preprocessors/base64-json-to-object'

export const skinSchema = z
	.preprocess(
		base64JsonToObject,
		z.object({
			textures: z.object({
				SKIN: z.object({
					url: urlTransformHttps,
				}),
			}),
		}),
	)
	.transform((x) => x.textures.SKIN.url)
