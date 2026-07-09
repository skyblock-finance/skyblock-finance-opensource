import { z } from 'zod/v4'

import { base64JsonToObject } from '../../utilities/preprocessors/base64-json-to-object'
import { urlTransformHttps } from '../../utilities/transforms/url-transform-https'

export const skinSchema = z
	.object({
		signature: z.string().optional(),
		value: z
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
			.transform((x) => x.textures.SKIN.url),
	})
	.strict()
