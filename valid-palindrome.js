'use strict';

function validPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
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

// Big O Notation
// Time - O(n)
// Space - O(1)
