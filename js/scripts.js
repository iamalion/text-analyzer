//Utility Logic
function isEmpty(testString) {
    return (testString.trim().lenghth === 0)
}

// Business Logic
function wordCounter(text) {
    if (isEmpty(text)) {
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

function numberOfOccurrencesInText(word, text) {
     if (isEmpty(word)) {
        return 0;
     }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++
        }
    });
    return wordCount;
}

function boldPassage(word, text) {
    if ((isEmpty(text)) || (isEmpty(word))) {
      return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (word === element) {
        const bold = document.createElement("strong");
        bold.append(element);
        p.append(bold);
      } else {
        p.append(element);
      }
      if (index !== (textArray.length - 1)) {
        p.append(" ");
      }
    });
    return p;
  }


// function omitOffensiveWords(text) {
//     const offensiveWords = ["zoinks" ,"muppeteer", "biffaroni", "loopdaloop"];
//     const words = text.replace(/[^\w\s]|_/g, "").split(" ");
//     words.forEach(function(word) {
//         if (!offensiveWords.includes(word.toLowerCase())) {
//             return words;
//         }
//     });
// }

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

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
        } else {
            document.querySelector("div#bolded-passage").innerText = null;
        }
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
  });