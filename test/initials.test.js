import test from 'node:test';
import assert from 'node:assert/strict';
import { initials } from '../src/initials.js';

test('WORDS-009 gives the upper-cased first letter of each word, joined', () => {
  assert.equal(initials('portable  network\tgraphics'), 'PNG');
});

test('WORDS-009 keeps already upper-cased letters and single-letter words', () => {
  assert.equal(initials('A b C'), 'ABC');
});

test('WORDS-009 a blank string gives an empty string', () => {
  assert.equal(initials(''), '');
  assert.equal(initials('  \n\t '), '');
});
