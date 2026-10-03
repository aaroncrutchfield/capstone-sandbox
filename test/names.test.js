import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formatName } from '../src/names.js'

test('formats Ada Lovelace', () => {
  assert.equal(formatName({ first: 'Ada', last: 'Lovelace' }), 'Ada Lovelace')
})

test('formats another name', () => {
  assert.equal(formatName({ first: 'Alan', last: 'Turing' }), 'Alan Turing')
})
