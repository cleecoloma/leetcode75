'use strict';

function ransomNote(ransomNote, magazine) {
  const counter = {};

  // map each magazine char to a value
  for (let char of magazine) {
    if (counter[char]) {
      counter[char]++
    } else {
      counter[char] = 1;
    }
  }

  // check ransomNote char is in counter 

  for (let letter of ransomNote) {
    if (!counter[letter] || counter[letter] === 0) {
      return false;
    } else {
      counter[letter]--;
    }
  }

  return true;
}

// Big O Notation
// Time -
// Space -
