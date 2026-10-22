import { test } from 'node:test';
import assert from 'node:assert/strict';
import { titleCase } from '../src/case/title.js';

test('WORDS-021 titleCase upper-cases each first letter and lower-cases the rest', () => {
  assert.equal(titleCase('hello, WORLD!'), 'Hello World');
});

test('WORDS-021 titleCase gives an empty string for a blank string', () => {
  assert.equal(titleCase(''), '');
  assert.equal(titleCase('   '), '');
});

test('WORDS-025 titleCase refuses anything but a string, and a later string call works', () => {
  assert.throws(() => titleCase(42), { name: 'TypeError', message: 'titleCase needs a string' });
  assert.equal(titleCase('ada lovelace'), 'Ada Lovelace');
});
