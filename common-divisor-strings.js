'use strict';

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const a = str1.length;
  const b = str2.length;

  const gcds = function (x, y) {
    if (!y) {
      return x;
    }
    return gcds(y, x % y);
  }

  const div = gcds(a, b);

  return str1.slice(0, div);
}

// Big O Notation
// Time - O(log(min(a, b)))
// Space - O(1)