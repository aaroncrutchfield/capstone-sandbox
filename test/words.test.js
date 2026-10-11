import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitWords } from '../src/words.js';

test('WORDS-001 splits on runs of whitespace with no empty entries', () => {
  assert.deepEqual(splitWords('  hello \t world\n again  '), ['hello', 'world', 'again']);
  assert.deepEqual(splitWords('one'), ['one']);
  assert.deepEqual(splitWords(''), []);
  assert.deepEqual(splitWords('   '), []);
});
