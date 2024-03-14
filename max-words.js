'use strict';

function mostWordsFound(sentences) {
  let max = 0;

  for (let sentence of sentences) {
    let wordCount = sentence.split(" ").length;
    max = Math.max(max, wordCount);
  }
  return max;
}

// Big O Notation
// Time - 
// Space - 
