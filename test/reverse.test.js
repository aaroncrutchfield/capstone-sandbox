import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverseWords } from '../src/reverse.js';

test('WORDS-005 reverses the words joined by single spaces', () => {
  assert.equal(reverseWords('  to be   or not '), 'not or be to');
});

test('WORDS-005 returns empty string for a blank string', () => {
  assert.equal(reverseWords('   '), '');
});
