import { test } from 'node:test';
import assert from 'node:assert/strict';
import { longestWord } from '../src/longest.js';

test('WORDS-004 returns the longest word', () => {
  assert.equal(longestWord('a quick  brown\tfox'), 'quick');
});

test('WORDS-004 returns the first word on a tie', () => {
  assert.equal(longestWord('cat dog bird fish'), 'bird');
});

test('WORDS-004 returns an empty string for a blank string', () => {
  assert.equal(longestWord(''), '');
  assert.equal(longestWord('  \n '), '');
});
