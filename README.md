# capstone-sandbox

A deliberately tiny repository for running real plans through custom-claude-ui end to end: Go, waves, the capstone, and Land. Gate command: `npm test` (Node's built-in test runner, no dependencies). Safe to break; never holds real work.

## Usage

Import from the module you need:

```js
import { greet, greetPerson } from './src/greeting.js'
import { farewell } from './src/farewell.js'
```

- `greet(name)` returns the greeting: `greet('Ada')` gives `'Hello, Ada!'`.
- `farewell(name)` returns the sign-off, capitalizing the name: `farewell('ada lovelace')` gives `'Goodbye, Ada Lovelace!'`.

`greetPerson({ first, last })` is the greeting variant that takes a person object.
- `shout(text)` upper-cases and exclaims: `shout('hi')` gives `'HI!'`.

## Words

```js
import { splitWords } from './src/words.js'
import { countWords } from './src/count.js'
import { longestWord } from './src/longest.js'
import { reverseWords } from './src/reverse.js'
import { sentenceWords } from './src/sentence.js'
```

- `splitWords(text)` splits on runs of whitespace with no empty entries: `splitWords('  to be ')` gives `['to', 'be']`. Splitting on commas as well (`splitWords('a,b c')` giving `['a', 'b', 'c']`, WORDS-012) is specified but not yet built: today that call gives `['a,b', 'c']`.
- `countWords(text)` counts the words, 0 for a blank string, and throws a TypeError saying "countWords needs a string" for anything else.
- `longestWord(text)` returns the longest word, the first one on a tie, and `''` for a blank string: `longestWord('to be or not')` gives `'not'`.
- `reverseWords(text)` returns the words in reverse order joined by single spaces: `reverseWords('  to be   or not ')` gives `'not or be to'`.
- `sentenceWords(text)` returns the words with trailing `. , ! ?` removed, and `[]` for a blank string: `sentenceWords('Hi, there!')` gives `['Hi', 'there']`.

The behaviors behind these are listed in `docs/behaviors/words.md` (WORDS-001 to WORDS-012).
