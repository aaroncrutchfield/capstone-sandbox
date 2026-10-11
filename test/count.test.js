import test from 'node:test';
import assert from 'node:assert/strict';
import { countWords } from '../src/count.js';

test('WORDS-002 counts the words in a string', () => {
  assert.equal(countWords('the quick  brown\tfox\n'), 4);
});

test('WORDS-002 an empty or blank string has 0 words', () => {
  assert.equal(countWords(''), 0);
  assert.equal(countWords('   \n\t '), 0);
});

test('WORDS-003 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, ['a b'], {}]) {
    assert.throws(() => countWords(bad), { name: 'TypeError', message: 'countWords needs a string' });
  }
  assert.equal(countWords('still works'), 2);
});
