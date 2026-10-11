# Words behaviors

* **WORDS-001** When I call `splitWords(text)` with a string, it shall return its words split on runs of whitespace, with no empty entries.
* **WORDS-002** When I call `countWords(text)` with a string, it shall return how many words it has; an empty or blank string has 0.
* **WORDS-003** If I call `countWords` with anything but a string, then it shall throw a TypeError saying "countWords needs a string", and a later call with a string shall work.
* **WORDS-004** When I call `longestWord(text)`, it shall return the longest word, the first one on a tie, and '' for a blank string.
* **WORDS-006** When I call `capitalizeWords(text)` with a string, it shall return its words with each first letter upper-cased, joined by single spaces, and '' for a blank string.
