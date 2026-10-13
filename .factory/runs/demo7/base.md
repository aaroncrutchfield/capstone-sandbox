# feat(words): list the unique words in text

The base slice of SAN-11. Add SAN-11's behaviors WORDS-006 to WORDS-010 to `docs/behaviors/words.md` after the last WORDS line, exactly as SAN-11 states them. Write `src/unique.js` exporting `uniqueWords(text)`, reusing `splitWords` from `src/words.js`. Test it in `test/unique.test.js` with node:test, each test name starting with its behavior ID. Change only the files this slice owns.
