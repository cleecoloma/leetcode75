'use strict';

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let letters = {};
  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
    letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
  }
  for (let letter in letters) {
    if (letters[letter] !== 0) {
      return false;
    }
  }
  return true;
}

// Big O Notation
// Time - O(n)
// Space - O(n)
