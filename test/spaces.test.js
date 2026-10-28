import test from 'node:test';
import assert from 'node:assert/strict';
import { spaces } from '../src/spaces.js';

test('WORDS-035 counts the space characters in a string', () => {
  assert.equal(spaces('a b c'), 2);
  assert.equal(spaces('   '), 3);
});

test('WORDS-035 tabs, newlines and other whitespace count as 0', () => {
  assert.equal(spaces(''), 0);
  assert.equal(spaces('a\tb\nc d e'), 0);
});

test('WORDS-036 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, [' '], {}]) {
    assert.throws(() => spaces(bad), { name: 'TypeError', message: 'spaces needs a string' });
  }
  assert.equal(spaces('route 66'), 1);
});
