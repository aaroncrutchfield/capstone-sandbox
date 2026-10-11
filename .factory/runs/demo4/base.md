# feat(words): reverse the words in text

The only slice of SAN-6. SAN-6's behavior, verbatim:

* **WORDS-005** When I call `reverseWords(text)` with a string, it shall return its words in reverse order joined by single spaces, and '' for a blank string.

Add that line exactly to `docs/behaviors/words.md`, after WORDS-004. Write `src/reverse.js` exporting `reverseWords(text)`; reuse `splitWords` from `src/words.js`. Test it in `test/reverse.test.js` with node:test, each test name starting with WORDS-005, covering `reverseWords('  to be   or not ')` returning 'not or be to' and `reverseWords('   ')` returning ''.
