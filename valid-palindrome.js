'use strict';

function validPalindrome(s) {
  const regex = /[^a-z0-9]/g;
  const lowerCase = s.toLowerCase();
  const letters = lowerCase.replace(regex, '');
  let left = 0;
  let right = letters.length - 1;
  while (left < right) {
    if (letters[left] === letters[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

let string = 'A man, a plan, a canal: Panama';
console.log(validPalindrome(string));