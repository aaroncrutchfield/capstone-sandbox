import test from 'node:test';
import assert from 'node:assert/strict';
import { sentenceWords } from '../src/sentence.js';

test('WORDS-011 removes trailing punctuation from each word', () => {
  assert.deepEqual(sentenceWords('Hello, world! Is it me? Yes.'), ['Hello', 'world', 'Is', 'it', 'me', 'Yes']);
});

test('WORDS-011 removes repeated trailing punctuation and keeps inner punctuation', () => {
  assert.deepEqual(sentenceWords('Wait... what?! e.g. ok'), ['Wait', 'what', 'e.g', 'ok']);
});

test('WORDS-011 returns [] for a blank string', () => {
  assert.deepEqual(sentenceWords(''), []);
  assert.deepEqual(sentenceWords('  \n\t '), []);
});
