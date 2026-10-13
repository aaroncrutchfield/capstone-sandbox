import test from 'node:test';
import assert from 'node:assert/strict';
import { wordLengths } from '../src/lengths.js';

test('WORDS-007 gives the length of each word in order', () => {
  assert.deepEqual(wordLengths('the quick  brown\tfox\n'), [3, 5, 5, 3]);
});

test('WORDS-007 a blank string gives []', () => {
  assert.deepEqual(wordLengths(''), []);
  assert.deepEqual(wordLengths('  \n\t '), []);
});

test('WORDS-008 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, ['a b'], {}]) {
    assert.throws(() => wordLengths(bad), { name: 'TypeError', message: 'wordLengths needs a string' });
  }
  assert.deepEqual(wordLengths('still works'), [5, 5]);
});
