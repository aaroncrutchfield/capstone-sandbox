import test from 'node:test';
import assert from 'node:assert/strict';
import { consonants } from '../src/consonants.js';

test('WORDS-031 counts the consonants in a string, either case', () => {
  assert.equal(consonants('Hello World'), 7);
  assert.equal(consonants('BCDFGHJKLMNPQRSTVWXYZ bcdfghjklmnpqrstvwxyz'), 42);
});

test('WORDS-031 vowels, digits, punctuation and non a-z letters count as 0', () => {
  assert.equal(consonants(''), 0);
  assert.equal(consonants('aeiou AEIOU 123 !? \n'), 0);
  assert.equal(consonants('ñ ß é'), 0);
});

test('WORDS-032 throws a TypeError for a non-string, then works with a string', () => {
  for (const bad of [null, undefined, 42, ['b'], {}]) {
    assert.throws(() => consonants(bad), { name: 'TypeError', message: 'consonants needs a string' });
  }
  assert.equal(consonants('still works'), 8);
});
