import test from 'node:test';
import assert from 'node:assert/strict';
import { lowercase } from '../src/lowercase.js';

test('WORDS-039 counts the letters a to z in a string', () => {
  assert.equal(lowercase('Hello World'), 8);
  assert.equal(lowercase('abcxyz'), 6);
});

test('WORDS-039 upper-case letters, digits, punctuation and accented letters count as 0', () => {
  assert.equal(lowercase(''), 0);
  assert.equal(lowercase('ABC 123 !? \n'), 0);
  assert.equal(lowercase('éà'), 0);
});

test('WORDS-040 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, ['a'], {}]) {
    assert.throws(() => lowercase(bad), { name: 'TypeError', message: 'lowercase needs a string' });
  }
  assert.equal(lowercase('route 66'), 4);
});
