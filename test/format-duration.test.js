import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formatDuration } from '../src/format-duration.js'

test('formatDuration puts the largest units first and skips zero parts', () => {
  assert.equal(formatDuration(5400), '1h 30m')
  assert.equal(formatDuration(90061), '1d 1h 1m 1s')
})

test('formatDuration(0) is "0s"', () => {
  assert.equal(formatDuration(0), '0s')
})

test('formatDuration refuses negative or fractional seconds, then accepts a whole number', () => {
  assert.throws(() => formatDuration(-1), RangeError)
  assert.throws(() => formatDuration(1.5), RangeError)
  assert.equal(formatDuration(60), '1m')
})
