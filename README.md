// Time complexity 

Reading the file and splitting it into words: This step has a time complexity of O(n), where n is the number of characters in the file.

Creating a set of words: This step has a time complexity of O(k), where k is the number of unique words in the file. Since each insertion in a set has an average time complexity of O(1), the overall complexity is O(k).

Checking if a word is a compounded word: The isCompoundWord function uses memoization to avoid redundant computations. On average, each word is checked once and the results are stored in a map. Therefore, the time complexity is O(k), where k is the number of unique words.

Finding the longest and second longest compounded words: This step requires iterating through all words once, resulting in a time complexity of O(k).

 overall time complexity of the solution is O(n + k), where n is the number of characters in the file and k is the number of unique words.

// running and testing
npm i // install dependencies
npm start // runs index.js file to test outputs on inputs provided
npm test // runs test cases on functions made 

