import tseslint from 'typescript-eslint'
import eslintConfig from '@skyblock-finance/eslint-config'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = (() => {
	const cause = []

	try {
		// eslint-disable-next-line no-undef
		const result = __dirname
		if (result) return result
	} catch (error) {
		cause.push(error)
	}

	try {
		const result = import.meta.dirname
		if (result) return result
	} catch (error) {
		cause.push(error)
	}

	try {
		const result = path.dirname(fileURLToPath(import.meta.url))
		if (result) return result
	} catch (error) {
		cause.push(error)
	}

	throw new Error('could not determine project root', { cause })
})()

export default tseslint.config(
	/**
	 * DO NOT ADD ANY OTHER KEYS TO THIS FIRST OBJECT
	 *
	 * @see {@link https://eslint.org/docs/latest/use/configure/ignore#ignoring-files}
	 */
	{
		ignores: ['**/dist/**', '**/.turbo/**', 'packages/schemas/data/*.json'],
	},
	{
		extends: [...eslintConfig.configs.default],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json', './packages/*/tsconfig.json'],
				tsconfigRootDir: root,
			},
		},
	},
	...eslintConfig.configs.json,
)
