// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
        if (!Number(element)){
        wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurencesInText(word, text) {
     
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++
        }
    });
    return wordCount;
}


function omitOffensiveWords(text) {
    const offensiveWords = ["zoinks" ,"muppeteer", "biffaroni", "loopdaloop"];
    const words = text.replace(/[^\w\s]|_/g, "").split(" ");
    words.forEach(function(word) {
        if (!offensiveWords.includes(word.toLowerCase())) {
            return words;
        }
    });
}

// function omitOffensiveWords(text) {
//     const offensiveWords = ["zoinks" ,"muppeteer", "biffaroni", "loopdaloop"];
//     const textArray = text.replace(/[^\w\s]|_/g, "").split(" ");
//     textArray.forEach(function(element) {
//         if(offensiveWords.includes(element.toLowerCase())){
//             return textArray
//         }
//     });
// }

//UI Logic
function handleFormSubmission(event) {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
  });