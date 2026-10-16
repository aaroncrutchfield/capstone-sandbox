import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slug.js';

test('WORDS-020 lower-cases the words and joins them with -', () => {
  assert.equal(slugify('Hello World  Again'), 'hello-world-again');
  assert.equal(slugify('  One\tTWO\n'), 'one-two');
  assert.equal(slugify(''), '');
  assert.equal(slugify('   '), '');
});
