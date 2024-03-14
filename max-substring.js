'use strict';

function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  const charIndexMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charIndexMap.has(char)) {
      start = Math.max(charIndexMap.get(char) + 1, start);
    }

    charIndexMap.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// Big O Notation
// Time - O(n)
// Space - O(min(m,n)) where m is the # of characters in the map and n is the length of the input string;
