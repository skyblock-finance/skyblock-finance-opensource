import { expect, test } from 'bun:test'

import { allItems } from './data'

test('items with SF:SOME_IDs are always type missing', () => {
	allItems.forEach((value, key) => {
		if (key.startsWith('SF:')) {
			expect(value.type, `${key} isn't of type "missing"`).toEqual('missing')
		}
	})
})
