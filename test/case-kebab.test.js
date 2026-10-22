import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kebabCase } from '../src/case/kebab.js';

test('WORDS-024 kebabCase lower-cases words and joins them with -', () => {
  assert.equal(kebabCase('NASA rocks, really!'), 'nasa-rocks-really');
});

test('WORDS-024 kebabCase gives an empty string for a blank string', () => {
  assert.equal(kebabCase('   '), '');
  assert.equal(kebabCase(''), '');
});

test('WORDS-025 kebabCase refuses a non-string by name, then works with a string', () => {
  assert.throws(() => kebabCase(42), { name: 'TypeError', message: 'kebabCase needs a string' });
  assert.equal(kebabCase('NASA rocks, really!'), 'nasa-rocks-really');
});
