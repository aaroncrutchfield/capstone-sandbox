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
import { uniqueWords } from './src/unique.js'
import { wordLengths } from './src/lengths.js'
import { initials } from './src/initials.js'
import { titleCase } from './src/case/title.js'
import { camelCase } from './src/case/camel.js'
import { snakeCase } from './src/case/snake.js'
import { kebabCase } from './src/case/kebab.js'
```

- `splitWords(text)` splits on runs of whitespace with no empty entries: `splitWords('  to be ')` gives `['to', 'be']`. Splitting on commas as well (`splitWords('a,b c')` giving `['a', 'b', 'c']`, WORDS-012) is specified but not yet built: today that call gives `['a,b', 'c']`.
- `countWords(text)` counts the words, 0 for a blank string, and throws a TypeError saying "countWords needs a string" for anything else.
- `longestWord(text)` returns the longest word, the first one on a tie, and `''` for a blank string: `longestWord('to be or not')` gives `'not'`.
- `reverseWords(text)` returns the words in reverse order joined by single spaces: `reverseWords('  to be   or not ')` gives `'not or be to'`.
- `uniqueWords(text)` returns the words in first-seen order with repeats removed (case-sensitive), and `[]` for a blank string: `uniqueWords('to be or not to be')` gives `['to', 'be', 'or', 'not']`.
- `wordLengths(text)` returns the length of each word, `[]` for a blank string, and throws a TypeError saying "wordLengths needs a string" for anything else: `wordLengths('to be')` gives `[2, 2]`.
- `initials(text)` returns the first letter of each word, upper-cased and joined, and `''` for a blank string: `initials('ada lovelace')` gives `'AL'`.
- `sentenceWords(text)` returns the words with trailing `. , ! ?` removed, and `[]` for a blank string: `sentenceWords('Hi, there!')` gives `['Hi', 'there']`.
- `titleCase(text)` capitalizes every word (as `sentenceWords` gives them) and lower-cases the rest: `titleCase('hello WORLD!')` gives `'Hello World'`.
- `camelCase(text)` joins the words with nothing, the first lower-case and each later one capitalized: `camelCase('hello WORLD!')` gives `'helloWorld'`.
- `snakeCase(text)` lower-cases the words and joins them with `_`: `snakeCase('hello WORLD!')` gives `'hello_world'`.
- `kebabCase(text)` lower-cases the words and joins them with `-`: `kebabCase('hello WORLD!')` gives `'hello-world'`.
- Each of the four throws a TypeError saying "<name> needs a string" (for example "titleCase needs a string") for anything but a string.

The behaviors behind these are listed in `docs/behaviors/words.md` (WORDS-001 to WORDS-026).
