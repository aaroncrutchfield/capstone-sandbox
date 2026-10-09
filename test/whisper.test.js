import { test } from 'node:test';
import assert from 'node:assert/strict';
import { whisper } from '../src/whisper.js';

test('whisper lower-cases and trails off', () => {
  assert.equal(whisper('HI'), 'hi...');
});
