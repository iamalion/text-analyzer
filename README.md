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

Test 6: "It should return 0 occurences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test 7: Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test 8: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test 9: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test 10: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test 11: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test 11.5: "If an empty string is passed in as a word, it should return 0.

Test 12: "It should remove all offensive words in a text."
Code:
const text = "zoinks this is loopdaloop";
omitOffensiveWords(text);
Expected Output: "this is"

Test 13: "It should remove all offensive words regardless of case."
Code:
const text = "Zoinks this is LOOPDALOOP"
Expected Output: "this is"

<!--- >this code works up to test 13:

function omitOffensiveWords(text) {
    const offensiveWords = ["zoinks" ,"muppeteer", 
    "biffaroni", "loopdaloop"];
    const words = text.split(" ");

    const filteredWords = [];
    words.forEach(function(word) {
        if (!offensiveWords.includes(word.toLowerCase())) {
            filteredWords.push(word);
        }
    });

    return filteredWords.join(" ")
}
-->
<!-- This test still isn't working
Test 14: "It should remove all offensive words regardless of puncuation."
Code:
const text = "Zoinks, this is LOOPDALOOP!"
omitOffensiveWords(text)
Expected Output: "this is"
-->
Describe: boldPassage()
Test 1: "It should return null if no word or text is entered."
Code: 
const text = "";
const word = "";
boldPassage(word, text);
expected output: null

Test 2: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test 3: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>


## Known Bugs

* 

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_