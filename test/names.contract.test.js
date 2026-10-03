import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formatName } from '../src/names.js'

test('formatName is exported as a function', () => {
  assert.equal(typeof formatName, 'function')
})
