import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverseWords } from '../src/reverse.js';

test('WORDS-005 reverses the words, joined by single spaces', () => {
  assert.equal(reverseWords('one two three'), 'three two one');
  assert.equal(reverseWords('  hello \t\n world  '), 'world hello');
  assert.equal(reverseWords('solo'), 'solo');
});

test('WORDS-005 returns an empty string for a blank string', () => {
  assert.equal(reverseWords(''), '');
  assert.equal(reverseWords('   \t\n'), '');
});
