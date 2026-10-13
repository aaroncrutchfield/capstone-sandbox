import { test } from 'node:test';
import assert from 'node:assert/strict';
import { uniqueWords } from '../src/unique.js';
import { wordLengths } from '../src/lengths.js';
import { initials } from '../src/initials.js';

const sentence = '  the quick brown fox jumps over the lazy dog  the end ';

test('WORDS-010 the unique words, their lengths and the initials agree on one sentence', () => {
  const unique = uniqueWords(sentence);
  assert.deepEqual(unique, ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog', 'end']);

  const lengths = wordLengths(unique.join(' '));
  assert.deepEqual(lengths, unique.map((word) => word.length));
  assert.deepEqual(lengths, [3, 5, 5, 3, 5, 4, 4, 3, 3]);

  const letters = initials(unique.join(' '));
  assert.equal(letters, unique.map((word) => word[0].toUpperCase()).join(''));
  assert.equal(letters, 'TQBFJOLDE');
  assert.equal(letters.length, lengths.length);
});

test('WORDS-010 a blank sentence gives no unique words, no lengths and no initials', () => {
  const unique = uniqueWords('   ');
  assert.deepEqual(unique, []);
  assert.deepEqual(wordLengths(unique.join(' ')), []);
  assert.equal(initials(unique.join(' ')), '');
});
