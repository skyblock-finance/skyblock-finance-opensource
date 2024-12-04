import { actionSchema } from './schema'
import { allActions } from './data'
import { z } from 'zod'
import { describe, expect, test } from 'bun:test'
import assert from 'node:assert'
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

describe('every action’s workbench inputs match its crafing grid', () => {
	for (const action of allActions) {
		for (const grid of action.place.filter((x) => x.type === 'workbench')) {
			test(`${JSON.stringify(action.outputs)} is valid`, () => {
				assert(grid.type === 'workbench')

				const actual = sumUp(action.inputs.filter((x) => x.type === 'item'))

				const expected = sumUp(grid.grid.filter((x) => x !== null))

				expect(actual).toEqual(expected)
			})
		}
	}
})

describe('every action’s anvil inputs match its crafing grid', () => {
	for (const action of allActions) {
		for (const grid of action.place.filter((x) => x.type === 'anvil')) {
			test(`${JSON.stringify(action.outputs)} is valid`, () => {
				assert(grid.type === 'anvil')

				const actual = sumUp(action.inputs.filter((x) => x.type === 'item'))

				const expected = sumUp([grid.left, grid.right])

				expect(actual).toEqual(expected)
			})
		}
	}
})
