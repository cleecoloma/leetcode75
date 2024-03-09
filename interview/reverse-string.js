'use strict';

function reverseString(string) {
  let temp = "";
  let start = 0;
  let end = string.length - 1;
  let stringArray = string.split("");

  while (start < end) {
    temp = stringArray[start];
    stringArray[start] = stringArray[end];
    stringArray[end] = temp;

    start++;
    end--;
  }

  return stringArray.join("");
}

// Big O Notation
// Time - 
// Space - 
