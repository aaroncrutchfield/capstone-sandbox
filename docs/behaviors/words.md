# Words behaviors

* **WORDS-001** When I call `splitWords(text)` with a string, it shall return its words split on runs of whitespace, with no empty entries.
* **WORDS-002** When I call `countWords(text)` with a string, it shall return how many words it has; an empty or blank string has 0.
* **WORDS-003** If I call `countWords` with anything but a string, then it shall throw a TypeError saying "countWords needs a string", and a later call with a string shall work.
* **WORDS-004** When I call `longestWord(text)`, it shall return the longest word, the first one on a tie, and '' for a blank string.
* **WORDS-005** When I call `reverseWords(text)` with a string, it shall return its words in reverse order joined by single spaces, and '' for a blank string.
* **WORDS-006** When I call `uniqueWords(text)` with a string, it shall return its words in first-seen order with repeats removed (case-sensitive), and \[\] for a blank string.
* **WORDS-007** When I call `wordLengths(text)` with a string, it shall return the length of each word in order, and \[\] for a blank string.
* **WORDS-008** If I call `wordLengths` with anything but a string, then it shall throw a TypeError saying "wordLengths needs a string", and a later call with a string shall work.
* **WORDS-009** When I call `initials(text)` with a string, it shall return the first letter of each word, upper-cased, joined with nothing between, and '' for a blank string.
* **WORDS-010** When I chain the helpers on one sentence, the unique words, their lengths and the initials shall agree with each other (the end-to-end test).
