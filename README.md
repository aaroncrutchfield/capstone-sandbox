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
