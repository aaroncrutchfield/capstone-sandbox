import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sumDurations } from '../src/sum-durations.js'

test('sumDurations totals pairs in seconds', () => {
  assert.equal(sumDurations([[1, 'h'], [30, 'm']]), 5400)
})

test('sumDurations of an empty list is 0', () => {
  assert.equal(sumDurations([]), 0)
})

test('sumDurations throws the toSeconds RangeError for an unknown unit, and a corrected list then succeeds', () => {
  assert.throws(() => sumDurations([[1, 'h'], [2, 'w']]), {
    name: 'RangeError',
    message: 'Unknown time unit "w": use one of d, h, m, s',
  })
  assert.equal(sumDurations([[1, 'h'], [2, 'd']]), 3600 + 172800)
})
