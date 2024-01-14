'use strict';

function longestPalindrome(s) {
  let result = 0;
  const counter = {};

  for (let char of s) {
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }

    if (counter[char] % 2 === 0) {
      result += 2
    }
  }

  return s.length > result ? result + 1 : result;
}

// Big O Notation
// Time -
// Space -
