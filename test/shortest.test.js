import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shortestWord } from '../src/shortest.js';

test('WORDS-027 returns the shortest word', () => {
  assert.equal(shortestWord('the quick brown ox'), 'ox');
});

test('WORDS-027 returns the first word on a tie', () => {
  assert.equal(shortestWord('bird cat dog fish'), 'cat');
});

test('WORDS-027 returns an empty string for a blank string', () => {
  assert.equal(shortestWord(''), '');
  assert.equal(shortestWord('  \n '), '');
});

test('WORDS-028 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [undefined, null, 42, ['a']]) {
    assert.throws(() => shortestWord(bad), { name: 'TypeError', message: 'shortestWord needs a string' });
  }
  assert.equal(shortestWord('a bc'), 'a');
});
