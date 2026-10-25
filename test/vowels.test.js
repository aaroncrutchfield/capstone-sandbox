import test from 'node:test';
import assert from 'node:assert/strict';
import { vowels } from '../src/vowels.js';

test('WORDS-029 counts the vowels in a string, either case', () => {
  assert.equal(vowels('Hello World'), 3);
  assert.equal(vowels('AEIOU aeiou'), 10);
});

test('WORDS-029 a blank or vowel-free string counts as 0', () => {
  assert.equal(vowels(''), 0);
  assert.equal(vowels('  \n\t '), 0);
  assert.equal(vowels('rhythm gym'), 0);
});

test('WORDS-030 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, ['a'], {}]) {
    assert.throws(() => vowels(bad), { name: 'TypeError', message: 'vowels needs a string' });
  }
  assert.equal(vowels('still works'), 3);
});
