import test from 'node:test';
import assert from 'node:assert/strict';
import { uniqueWords } from '../src/unique.js';

test('WORDS-006 keeps words in first-seen order with repeats removed', () => {
  assert.deepEqual(uniqueWords('the cat  saw the\tdog and the cat'), ['the', 'cat', 'saw', 'dog', 'and']);
});

test('WORDS-006 repeats are case-sensitive', () => {
  assert.deepEqual(uniqueWords('The the THE the'), ['The', 'the', 'THE']);
});

test('WORDS-006 a blank string gives []', () => {
  assert.deepEqual(uniqueWords(''), []);
  assert.deepEqual(uniqueWords('  \n\t '), []);
});
