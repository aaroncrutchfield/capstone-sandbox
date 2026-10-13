# Words behaviors

* **WORDS-001** When I call `splitWords(text)` with a string, it shall return its words split on runs of whitespace, with no empty entries.
* **WORDS-002** When I call `countWords(text)` with a string, it shall return how many words it has; an empty or blank string has 0.
* **WORDS-003** If I call `countWords` with anything but a string, then it shall throw a TypeError saying "countWords needs a string", and a later call with a string shall work.
* **WORDS-004** When I call `longestWord(text)`, it shall return the longest word, the first one on a tie, and '' for a blank string.
* **WORDS-005** When I call `reverseWords(text)` with a string, it shall return its words in reverse order joined by single spaces, and '' for a blank string.
* **WORDS-011** When I call `sentenceWords(text)` with a string, it shall return its words with trailing punctuation (. , ! ?) removed, and \[\] for a blank string.
* **WORDS-012** When I call `splitWords(text)` with a string, it shall split on commas as well as whitespace: `splitWords('a,b c')` gives `['a', 'b', 'c']`.
