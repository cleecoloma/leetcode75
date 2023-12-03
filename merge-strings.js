'use strict';

function mergeAlternately(word1, word2) {
  let mergedWord = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      mergedWord += word1[1];
    }
    if (i < word2.length) {
      mergedWord += word2[i];
    }
  }
  return mergedWord;
}

// Big O notation
// Time - O(max(a, b))) -> O(n) where a and b are lengths of word1 and word2, respectively
// Space - O(a + b) -> O(n)