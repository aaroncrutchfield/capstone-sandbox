import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalizeWords } from '../src/capitalize.js';

test('WORDS-006 capitalizes each word and joins with single spaces', () => {
  assert.equal(capitalizeWords('  hello   big world '), 'Hello Big World');
});

test('WORDS-006 returns empty string for a blank string', () => {
  assert.equal(capitalizeWords('   '), '');
});
