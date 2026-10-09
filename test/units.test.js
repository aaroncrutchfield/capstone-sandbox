import { test } from 'node:test'
import assert from 'node:assert/strict'
import { UNITS, toSeconds } from '../src/units.js'

test('UNITS maps d, h, m, s to seconds and is frozen', () => {
  assert.deepEqual(UNITS, { d: 86400, h: 3600, m: 60, s: 1 })
  assert.ok(Object.isFrozen(UNITS))
})

test('toSeconds multiplies the amount by the unit length', () => {
  assert.equal(toSeconds(2, 'd'), 172800)
  assert.equal(toSeconds(3, 'h'), 10800)
  assert.equal(toSeconds(5, 'm'), 300)
  assert.equal(toSeconds(7, 's'), 7)
})

test('toSeconds throws a RangeError naming an unknown unit, then accepts a valid one', () => {
  assert.throws(() => toSeconds(1, 'w'), { name: 'RangeError', message: /"w"/ })
  assert.throws(() => toSeconds(1, 'toString'), RangeError)
  assert.equal(toSeconds(1, 'h'), 3600)
})
