# feat(words): cut a text to its first n words

Write `src/truncate.js` exporting `truncateWords(text, n)` as SAN-21's WORDS-015 states it, reusing `splitWords` from `src/words.js`. Test it in `test/truncate.test.js` with node:test, each test name starting with WORDS-015. Change only the files this slice owns.

The cut marker is the owner's choice, and nothing in the ticket decides it. Before writing any code, stop and ask the owner which marker a cut text ends with, offering these answers: '…' (one character, recommended), '...' (three dots), or none. Don't pick one yourself.
