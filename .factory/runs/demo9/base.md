# feat(words): capitalize each word of a text

The base slice of SAN-20. Add SAN-20's behaviors WORDS-013 to WORDS-017 to `docs/behaviors/words.md` after the last WORDS line, exactly as SAN-20 states them. Write `src/capitalize.js` exporting `capitalizeWords(text)` (WORDS-013), reusing `splitWords` from `src/words.js`. Test it in `test/capitalize.test.js` with node:test, each test name starting with its behavior ID. Change only the files this slice owns.
