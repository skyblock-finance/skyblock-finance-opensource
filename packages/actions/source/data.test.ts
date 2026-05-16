import { expect, test } from 'bun:test'
import assert from 'node:assert'

import jsonStableStringify from 'json-stable-stringify'
import { z } from 'zod/v4'

import { allActions } from './data'
import { actionSchema } from './schema'
import { ActionIoItem } from './types'

test('all actions follow the schema', () => {
	expect(() => z.array(actionSchema).parse(allActions)).not.toThrow()
})

/**
 * Simplifies and "sorts" action input/output items
 */
const sumUp = (ios: ActionIoItem[]): Map<string, number> => {
	const result = new Map<string, number>()

	for (const io of ios) {
		const previousValue = result.get(io.id) ?? 0
		result.set(io.id, previousValue + io.amount)
	}

	return result
}

test('sumUp works', () => {
	expect(
		sumUp([
			{
				amount: 1,
				id: 'FOO',
				type: 'item',
			},
			{
				amount: 2,
				id: 'BAR',
				type: 'item',
			},
			{
				amount: 1,
				id: 'BAZ',
				type: 'item',
			},
		]),
	).toEqual(
		sumUp([
			{
				amount: 1,
				id: 'BAR',
				type: 'item',
			},
			{
				amount: 1,
				id: 'FOO',
				type: 'item',
			},
			{
				amount: 1,
				id: 'BAZ',
				type: 'item',
			},
			{
				amount: 1,
				id: 'BAR',
				type: 'item',
			},
		]),
	)
})

test('every action’s workbench inputs match its crafing grid', () => {
	for (const action of allActions) {
		for (const grid of action.place.filter((x) => x.type === 'workbench')) {
			assert(grid.type === 'workbench')

			const actual = sumUp(action.inputs.filter((x) => x.type === 'item'))

			const expected = sumUp(grid.grid.filter((x) => x !== null))

			expect(
				actual,
				`${JSON.stringify(action)} doesn't match its crafting grid`,
			).toEqual(expected)
		}
	}
})

test('every action’s anvil inputs match its crafing grid', () => {
	for (const action of allActions) {
		for (const grid of action.place.filter((x) => x.type === 'anvil')) {
			assert(grid.type === 'anvil')

			const actual = sumUp(action.inputs.filter((x) => x.type === 'item'))

			const expected = sumUp([grid.left, grid.right])

			expect(actual, `${JSON.stringify(action)} doesn't match`).toEqual(
				expected,
			)
		}
	}
})

test('no duplicate actions exist', () => {
	const seen = new Set<string>()

	for (const action of allActions) {
		for (const place of action.place) {
			const syntheticAction = {
				...action,
				place,
			}
			const json = jsonStableStringify(syntheticAction)

			if (!json) throw new Error(`invalid action: ${JSON.stringify(action)}`)

			if (seen.has(json)) {
				throw new Error(`duplicate action: ${json}`)
			} else {
				seen.add(json)
			}
		}
	}
})
