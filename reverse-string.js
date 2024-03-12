'use strict';

function reverseString(s) { // word
  let start = 0;
  let end = s.length - 1;
  let temp = '';

  while (start < end) {
    temp = s[start]; // w
    s[start] = s[end]; // d
    s[end] = temp;
    start++;
    end--;
  }

  return s;
}

// Big O Notation
// Time -
// Space -
