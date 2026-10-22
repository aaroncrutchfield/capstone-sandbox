import { test } from 'node:test';
import assert from 'node:assert/strict';
import { camelCase } from '../src/case/camel.js';

test('WORDS-022 camelCase joins the words, first lower-case, later ones capitalized', () => {
  assert.equal(camelCase('NASA rocks, really!'), 'nasaRocksReally');
  assert.equal(camelCase('hello WORLD'), 'helloWorld');
});

test('WORDS-022 camelCase gives an empty string for a blank string', () => {
  assert.equal(camelCase(''), '');
  assert.equal(camelCase('   '), '');
});

test('WORDS-025 camelCase refuses anything but a string, and works again after', () => {
  assert.throws(() => camelCase(42), { name: 'TypeError', message: 'camelCase needs a string' });
  assert.equal(camelCase('hello world'), 'helloWorld');
});
