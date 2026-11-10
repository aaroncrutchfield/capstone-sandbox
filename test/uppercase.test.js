import test from 'node:test';
import assert from 'node:assert/strict';
import { uppercase } from '../src/uppercase.js';

test('WORDS-037 counts the letters A to Z in a string', () => {
  assert.equal(uppercase('Hello World'), 2);
  assert.equal(uppercase('ABCXYZ'), 6);
});

test('WORDS-037 lower-case letters, digits, punctuation and accented capitals count as 0', () => {
  assert.equal(uppercase(''), 0);
  assert.equal(uppercase('abc 123 !? \n'), 0);
  assert.equal(uppercase('ÉÀ'), 0);
});
