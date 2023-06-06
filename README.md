# Text Analyzer

#### By _Lindsay Warr_

#### _An application to count the number of words in a sentence_

## Technologies Used

* JavaScript
* HTML

## Description


## Setup/Installation Requirements

* 

## Tests
### Describe: wordCounter()

Test 1: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test 2: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test 3: "It should return 0 if the passage is empty."
Code: 
text = "";
wordCounter(text);
Expected Output: 0

Test 4: "It should return 0 for a string that is only spaces."
Code: 
text = "           ",
wordCounter("            ");
Expected Output: 0

Test 5: "It should not count numbers as words."
Code:
text = "hi there 77 19";
wordCounter("hi there 77 19");
Expected Output: 2

## Known Bugs

* 

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_