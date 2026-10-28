# Words behaviors

* **WORDS-001** When I call `splitWords(text)` with a string, it shall return its words split on runs of whitespace (and on commas, per WORDS-012), with no empty entries.
* **WORDS-002** When I call `countWords(text)` with a string, it shall return how many words it has; an empty or blank string has 0.
* **WORDS-003** If I call `countWords` with anything but a string, then it shall throw a TypeError saying "countWords needs a string", and a later call with a string shall work.
* **WORDS-004** When I call `longestWord(text)`, it shall return the longest word, the first one on a tie, and '' for a blank string.
* **WORDS-005** When I call `reverseWords(text)` with a string, it shall return its words in reverse order joined by single spaces, and '' for a blank string.
* **WORDS-006** When I call `uniqueWords(text)` with a string, it shall return its words in first-seen order with repeats removed (case-sensitive), and \[\] for a blank string.
* **WORDS-007** When I call `wordLengths(text)` with a string, it shall return the length of each word in order, and \[\] for a blank string.
* **WORDS-008** If I call `wordLengths` with anything but a string, then it shall throw a TypeError saying "wordLengths needs a string", and a later call with a string shall work.
* **WORDS-009** When I call `initials(text)` with a string, it shall return the first letter of each word, upper-cased, joined with nothing between, and '' for a blank string.
* **WORDS-010** When I chain the helpers on one sentence, the unique words, their lengths and the initials shall agree with each other (the end-to-end test).
* **WORDS-011** When I call `sentenceWords(text)` with a string, it shall return its words with trailing punctuation (. , ! ?) removed, and \[\] for a blank string.
* **WORDS-012** When I call `splitWords(text)` with a string, it shall split on commas as well as whitespace: `splitWords('a,b c')` gives `['a', 'b', 'c']`.
* **WORDS-020** When I call `slugify(text)` with a string, it shall return its words (as `splitWords` gives them) lower-cased and joined with `-`, and '' for a blank string.
* **WORDS-021** When I call `titleCase(text)` with a string, it shall return its words (as `sentenceWords` gives them), each with its first letter upper-cased and the rest lower-cased, joined by single spaces, and '' for a blank string.
* **WORDS-022** When I call `camelCase(text)` with a string, it shall return its words (as `sentenceWords` gives them) joined with nothing, the first all lower-case and each later one with its first letter upper-cased and the rest lower-cased, and '' for a blank string.
* **WORDS-023** When I call `snakeCase(text)` with a string, it shall return its words (as `sentenceWords` gives them) lower-cased and joined with `_`, and '' for a blank string.
* **WORDS-024** When I call `kebabCase(text)` with a string, it shall return its words (as `sentenceWords` gives them) lower-cased and joined with `-`, and '' for a blank string.
* **WORDS-025** If I call `titleCase`, `camelCase`, `snakeCase` or `kebabCase` with anything but a string, then it shall throw a TypeError saying "<name> needs a string" with the name of the function called, and a later call with a string shall work.
* **WORDS-026** When I convert one sentence with all four conversions, they shall give the same words in the same order (the end-to-end test).
* **WORDS-027** When I call `shortestWord(text)` with a string, it shall return the shortest of its words (as `splitWords` gives them), the first one seen on a tie, and '' for a blank string.
* **WORDS-028** If I call `shortestWord` with anything but a string, then it shall throw a TypeError saying "shortestWord needs a string", and a later call with a string shall work.
* **WORDS-029** When I call `vowels(text)` with a string, it shall return how many of its characters are a, e, i, o or u (not y) in either case, and 0 when there are none.
* **WORDS-030** If I call `vowels` with anything but a string, then it shall throw a TypeError saying "vowels needs a string".
* **WORDS-031** When a user calls `consonants(text)` with a string, it shall return how many of its characters are letters a to z, in either case, other than a, e, i, o and u.
* **WORDS-032** If a user calls `consonants` with anything but a string, then it shall throw a TypeError saying "consonants needs a string".
* **WORDS-033** When a user calls `digits(text)` with a string, it shall return how many of its characters are the digits 0 to 9.
* **WORDS-034** If a user calls `digits` with anything but a string, then it shall throw a TypeError saying "digits needs a string".
* **WORDS-035** When a user calls `spaces(text)` with a string, it shall return how many of its characters are the space character U+0020.
* **WORDS-036** If a user calls `spaces` with anything but a string, then it shall throw a TypeError saying "spaces needs a string".
