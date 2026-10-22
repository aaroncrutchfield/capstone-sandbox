import { test } from 'node:test';
import assert from 'node:assert/strict';
import { caseWords } from '../src/case/words.js';
import { sentenceWords } from '../src/sentence.js';

test('WORDS-025 caseWords refuses anything but a string, naming the function called', () => {
  for (const name of ['titleCase', 'camelCase', 'snakeCase', 'kebabCase']) {
    for (const bad of [undefined, null, 42, ['a'], {}]) {
      assert.throws(() => caseWords(bad, name), { name: 'TypeError', message: `${name} needs a string` });
    }
  }
});

test('WORDS-025 a call with a string works after a refusal', () => {
  assert.throws(() => caseWords(7, 'snakeCase'), TypeError);
  assert.deepEqual(caseWords('Hello, World!', 'snakeCase'), ['Hello', 'World']);
});

test('WORDS-026 caseWords gives the words as sentenceWords does, for every conversion', () => {
  const text = '  Ada met Charles, again! ';
  for (const name of ['titleCase', 'camelCase', 'snakeCase', 'kebabCase']) {
    assert.deepEqual(caseWords(text, name), sentenceWords(text));
  }
  assert.deepEqual(caseWords('   ', 'titleCase'), []);
});
