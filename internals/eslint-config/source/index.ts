import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import jsonc from 'eslint-plugin-jsonc'
import jsoncEslintParser from 'jsonc-eslint-parser'
import { TSESLint } from '@typescript-eslint/utils'

export default {
	configs: {
		default: tseslint.config({
			extends: [
				eslint.configs.recommended,
				...tseslint.configs.recommendedTypeChecked,
				...tseslint.configs.stylisticTypeChecked,
			],
			ignores: ['**/*.json'],
			languageOptions: {
				parser: tseslint.parser,
			},
			linterOptions: {
				reportUnusedDisableDirectives: 'error',
			},
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						args: 'all',
						argsIgnorePattern: '^_',
						caughtErrors: 'all',
						caughtErrorsIgnorePattern: '^_',
						destructuredArrayIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						ignoreRestSiblings: true,
					},
				],
			},
		}),
		json: tseslint.config(
			{
				files: ['**/*.json'],
				ignores: ['**/tsconfig*.json'],
				languageOptions: {
					parser: jsoncEslintParser,
				},
				plugins: {
					jsonc,
				},
				rules: {
					...(jsonc.configs['recommended-with-json']
						.rules as TSESLint.FlatConfig.Rules),
					'jsonc/sort-keys': [
						'warn',
						{
							pathPattern: '^exports(?:\\[[^\\]]+\\]|\\.[^.]+)+$',
							order: ['types', 'default', 'import', 'require'],
						},
						{
							pathPattern: '.*',
							order: { type: 'asc' },
						},
					],
				},
			},
			{
				files: ['**/tsconfig*.json'],
				languageOptions: {
					parser: jsoncEslintParser,
				},
				plugins: {
					jsonc,
				},
				rules: {
					...(jsonc.configs['recommended-with-jsonc']
						.rules as TSESLint.FlatConfig.Rules),
					'jsonc/sort-keys': [
						'warn',
						{
							pathPattern: '.*',
							order: { type: 'asc' },
						},
					],
				},
			},
		),
	},
}
