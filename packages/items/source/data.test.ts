import { describe, expect, test } from 'bun:test'

import { allItems } from './data'

describe('items with SF:SOME_IDs are always type missing', () => {
	allItems.forEach((value, key) => {
		if (key.startsWith('SF:')) {
			test(`${key} is of type "missing"`, () => {
				expect(value.type).toEqual('missing')
			})
		}
	})
})
