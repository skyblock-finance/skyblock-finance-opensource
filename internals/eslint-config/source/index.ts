import eslint from '@eslint/js'
import { TSESLint } from '@typescript-eslint/utils'
import jsonc from 'eslint-plugin-jsonc'
import perfectionist from 'eslint-plugin-perfectionist'
import jsoncEslintParser from 'jsonc-eslint-parser'
import tseslint from 'typescript-eslint'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const result: any = {
	configs: {
		default: tseslint.config({
			extends: [
				eslint.configs.recommended,
				...tseslint.configs.recommendedTypeChecked,
				...tseslint.configs.stylisticTypeChecked,
				perfectionist.configs['recommended-natural'],
			],
			ignores: ['**/*.json'],
			languageOptions: {
				parser: tseslint.parser,
			},
			linterOptions: {
				reportUnusedDisableDirectives: 'error',
			},
			rules: {
				'@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						args: 'all',
						argsIgnorePattern: '^_',
						caughtErrors: 'all',
						caughtErrorsIgnorePattern: '^_',
						destructuredArrayIgnorePattern: '^_',
						ignoreRestSiblings: true,
						varsIgnorePattern: '^_',
					},
				],
				'perfectionist/sort-array-includes': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-classes': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-enums': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-exports': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-imports': [
					'warn',
					{
						customGroups: [
							{
								elementNamePattern: '^@skyblock\\-finance\\/.+$',
								groupName: 'skyblock-finance',
							},
							{
								elementNamePattern: '^(bun|bun:.+)$',
								groupName: 'bun',
							},
						],
						groups: [
							'type',
							['builtin', 'bun'],
							['type-external', 'external'],
							'skyblock-finance',
							'side-effect',
							['type-internal', 'internal'],
							['type-parent', 'parent'],
							['type-sibling', 'sibling', 'type-index', 'index'],
							'unknown',
						],
						order: 'asc',
						type: 'natural',
					},
				],
				'perfectionist/sort-interfaces': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-intersection-types': [
					'warn',
					{
						groups: ['named', 'object', 'function', 'unknown', 'nullish'],
						order: 'asc',
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-jsx-props': [
					'warn',
					{
						type: 'natural',
					},
				],
				'perfectionist/sort-maps': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-modules': 'off', // conflicts with @typescript-eslint/no-use-before-define
				'perfectionist/sort-named-exports': [
					'warn',
					{ partitionByComment: true, type: 'natural' },
				],
				'perfectionist/sort-named-imports': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-object-types': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-objects': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-sets': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-switch-case': [
					'warn',
					{
						type: 'natural',
					},
				],
				'perfectionist/sort-union-types': [
					'warn',
					{
						groups: ['named', 'object', 'function', 'unknown', 'nullish'],
						order: 'asc',
						partitionByComment: true,
						type: 'natural',
					},
				],
				'perfectionist/sort-variable-declarations': [
					'warn',
					{
						partitionByComment: true,
						type: 'natural',
					},
				],
			},
		}),
		json: tseslint.config(
			{
				files: ['**/*.json'],
				ignores: ['**/tsconfig*.json', '**/turbo.json'],
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
							order: ['types', 'default', 'import', 'require'],
							pathPattern: '^exports(?:\\[[^\\]]+\\]|\\.[^.]+)+$',
						},
						{
							order: { type: 'asc' },
							pathPattern: '.*',
						},
					],
				},
			},
			{
				files: ['**/tsconfig*.json', '**/turbo.json'],
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
							order: { type: 'asc' },
							pathPattern: '.*',
						},
					],
				},
			},
		),
	},
}

export default result
