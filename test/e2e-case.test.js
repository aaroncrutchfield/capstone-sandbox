import { test } from 'node:test';
import assert from 'node:assert/strict';
import { titleCase } from '../src/case/title.js';
import { camelCase } from '../src/case/camel.js';
import { snakeCase } from '../src/case/snake.js';
import { kebabCase } from '../src/case/kebab.js';

const sentence = 'The QUICK brown fox, jumps over the lazy dog!';
const expected = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Split each conversion's result back into lower-cased words.
const back = {
  titleCase: (s) => s.split(' ').map((w) => w.toLowerCase()),
  camelCase: (s) => s.split(/(?=[A-Z])/).map((w) => w.toLowerCase()),
  snakeCase: (s) => s.split('_'),
  kebabCase: (s) => s.split('-'),
};

for (const [name, convert] of Object.entries({ titleCase, camelCase, snakeCase, kebabCase })) {
  test(`WORDS-026 ${name} gives the sentence's words back in order`, () => {
    assert.deepEqual(back[name](convert(sentence)), expected);
  });
}

test('WORDS-026 all four conversions agree on the same words', () => {
  const results = [titleCase, camelCase, snakeCase, kebabCase].map((f) => back[f.name](f(sentence)));
  for (const words of results) assert.deepEqual(words, results[0]);
});
