'use strict';

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let start = 0;
  let end = x.length - 1;

  while (start < end) {
    if (x[start] !== x[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Big O Notation
// Time -
// Space -
