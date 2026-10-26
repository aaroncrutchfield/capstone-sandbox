import test from 'node:test';
import assert from 'node:assert/strict';
import { digits } from '../src/digits.js';

test('WORDS-033 counts the digits 0 to 9 in a string', () => {
  assert.equal(digits('a1b2c3'), 3);
  assert.equal(digits('0123456789'), 10);
});

test('WORDS-033 letters, punctuation and non-ASCII digits count as 0', () => {
  assert.equal(digits(''), 0);
  assert.equal(digits('abc !? \n'), 0);
  assert.equal(digits('٣ ²'), 0);
});

test('WORDS-034 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, ['1'], {}]) {
    assert.throws(() => digits(bad), { name: 'TypeError', message: 'digits needs a string' });
  }
  assert.equal(digits('route 66'), 2);
});
