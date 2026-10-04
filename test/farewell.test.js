import { test } from 'node:test'
import assert from 'node:assert/strict'
import { capitalize, farewell } from '../src/farewell.js'

test('capitalize uppercases the first letter and lowercases the rest', () => {
  assert.equal(capitalize('lovelace'), 'Lovelace')
  assert.equal(capitalize('HOPPER'), 'Hopper')
})

test('farewell capitalizes a lowercase full name', () => {
  assert.equal(farewell('ada lovelace'), 'Goodbye, Ada Lovelace!')
})

test('farewell keeps an already-capitalized full name', () => {
  assert.equal(farewell('Grace Hopper'), 'Goodbye, Grace Hopper!')
})

test('farewell ignores surrounding whitespace', () => {
  assert.equal(farewell('  ada lovelace  '), 'Goodbye, Ada Lovelace!')
})
