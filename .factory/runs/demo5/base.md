# feat(words): capitalize the words in text

The only slice of SAN-8. SAN-8's behavior, verbatim:

* **WORDS-006** When I call `capitalizeWords(text)` with a string, it shall return its words with each first letter upper-cased, joined by single spaces, and '' for a blank string.

Add that line exactly to `docs/behaviors/words.md`, after the last WORDS line. Write `src/capitalize.js` exporting `capitalizeWords(text)`; reuse `splitWords` from `src/words.js`. Test it in `test/capitalize.test.js` with node:test, each test name starting with WORDS-006, covering `capitalizeWords('  hello   big world ')` returning 'Hello Big World' and `capitalizeWords('   ')` returning ''. Change only the files this slice owns.
