import { test } from 'node:test'
import assert from 'node:assert/strict'
import { greet, greetPerson } from '../src/greeting.js'

test('greets by name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!')
})

test('greetPerson greets by formatted full name', () => {
  assert.equal(greetPerson({ first: 'Ada', last: 'Lovelace' }), 'Hello, Ada Lovelace!')
})
