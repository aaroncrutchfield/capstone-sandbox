import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseDuration } from '../src/parse-duration.js'

test('parses combined parts', () => {
  assert.equal(parseDuration('1h30m'), 5400)
  assert.equal(parseDuration('1d2h3m4s'), 93784)
})

test('parses a single part', () => {
  assert.equal(parseDuration('45s'), 45)
})

test('throws SyntaxError on an empty string', () => {
  assert.throws(() => parseDuration(''), SyntaxError)
})

test('throws SyntaxError on a number with no unit', () => {
  assert.throws(() => parseDuration('30'), SyntaxError)
  assert.throws(() => parseDuration('1h30'), SyntaxError)
})

test('throws SyntaxError on text between or around parts', () => {
  assert.throws(() => parseDuration('1h x30m'), SyntaxError)
  assert.throws(() => parseDuration(' 1h'), SyntaxError)
  assert.throws(() => parseDuration('1h '), SyntaxError)
  assert.throws(() => parseDuration('1w'), SyntaxError)
})

test('throws SyntaxError on a repeated unit', () => {
  assert.throws(() => parseDuration('1h2h'), SyntaxError)
})

test('throws SyntaxError on units out of order', () => {
  assert.throws(() => parseDuration('30m1h'), SyntaxError)
})

test('throws TypeError when text is not a string', () => {
  assert.throws(() => parseDuration(90), TypeError)
  assert.throws(() => parseDuration(undefined), TypeError)
})

test('a corrected input succeeds after a refusal', () => {
  assert.throws(() => parseDuration('1h30'), SyntaxError)
  assert.equal(parseDuration('1h30m'), 5400)
})
