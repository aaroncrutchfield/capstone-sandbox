import { test } from 'node:test'
import assert from 'node:assert/strict'
import { farewell } from '../src/farewell.js'

test('farewell is exported as a function', () => {
  assert.equal(typeof farewell, 'function')
})
