import { test } from 'node:test';
import assert from 'node:assert/strict';
import { snakeCase } from '../src/case/snake.js';

test('WORDS-023 snakeCase lower-cases words and joins them with _', () => {
  assert.equal(snakeCase('NASA rocks, really!'), 'nasa_rocks_really');
});

test('WORDS-023 snakeCase gives an empty string for a blank string', () => {
  assert.equal(snakeCase('   '), '');
  assert.equal(snakeCase(''), '');
});

test('WORDS-025 snakeCase refuses a non-string by name, then works with a string', () => {
  assert.throws(() => snakeCase(42), { name: 'TypeError', message: 'snakeCase needs a string' });
  assert.equal(snakeCase('NASA rocks, really!'), 'nasa_rocks_really');
});
