const fs = require("fs");


function processWordList(filePath) {
  const start = new Date();

  const data = fs.readFileSync(filePath, "utf8");


  const words = data.split(/\r?\n/);

  let longestCompoundWord = "";
  let secondLongestCompoundWord = "";


  const wordSet = new Set(words);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (isCompoundWord(word, wordSet)) {
      if (word.length > longestCompoundWord.length) {
        secondLongestCompoundWord = longestCompoundWord;
        longestCompoundWord = word;
      } else if (word.length > secondLongestCompoundWord.length) {
        secondLongestCompoundWord = word;
      }
    }
  }

  const end = new Date();
  const timeTaken = end - start;


  console.log("Longest Compound Word:", longestCompoundWord);
  console.log("Second Longest Compound Word:", secondLongestCompoundWord);
  console.log(`Time taken to process file ${filePath}: ${timeTaken} milliseconds`);
}

function isCompoundWord(word, wordSet, memo = new Map()) {
  if (memo.has(word)) {
    return memo.get(word);
  }

  if (word === "") {
    return false;
  }

  for (let i = 0; i < word.length; i++) {
    const prefix = word.slice(0, i + 1);
    const suffix = word.slice(i + 1);

    if (wordSet.has(prefix)) {
      if (wordSet.has(suffix) || isCompoundWord(suffix, wordSet, memo)) {
        memo.set(word, true);
        return true;
      }
    }
  }

  memo.set(word, false);
  return false;
}


const filePath1 = "Input_01.txt";
const filePath2 = "Input_02.txt";



processWordList(filePath1);
processWordList(filePath2);
module.exports = {
  processWordList,
  isCompoundWord
}

