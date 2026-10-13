# feat(words): split a sentence into bare words

The only slice of SAN-12. Add SAN-12's behaviors WORDS-011 and WORDS-012 to `docs/behaviors/words.md` after the last WORDS line, exactly as SAN-12 states them. Write `src/sentence.js` exporting `sentenceWords(text)` (WORDS-011), reusing `splitWords` from `src/words.js`, and test it in `test/sentence.test.js` with node:test, each test name starting with WORDS-011. WORDS-012 changes `src/words.js`, which this slice doesn't own: don't build or test it here; it is the milestone's to settle. Change only the files this slice owns.
