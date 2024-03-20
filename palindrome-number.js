'use strict';

function isPalindrome(x) {
  if (x < 0 || ( x % 10 === 0 && x > 0)) {
    return false;
  }

  const reverse = `${x}`.split('').reverse().join('');
  return x == reverse;
}

// Big O Notation
// Time - O(log(n))
// Space - O(log(n))
