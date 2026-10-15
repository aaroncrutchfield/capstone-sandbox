# feat(words): keep the first n words of a text

Write `src/truncate.js` exporting `truncateWords(text, n)` (WORDS-015, WORDS-016), reusing `splitWords` from `src/words.js`. Test it in `test/truncate.test.js` with node:test, each test name starting with its behavior ID. Change only the files this slice owns.

WORDS-015 leaves the marker to the owner, and only the owner can choose it. Before writing any code, stop and ask the owner which marker to add when words were dropped: the single character '…' (recommended) or three dots '...'. Don't pick one yourself.
