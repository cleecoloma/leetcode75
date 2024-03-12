'use strict';

function reverseWords(s) {
  function reverseStrings(word) {
    let chars = word.split('')
    let start = 0;
    let end = chars.length - 1;
    while (start < end) {
      let temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    }
    return chars.join('');
  }

  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseStrings(words[i]);
  }
  return words.join(" ");
}

// Big O Notation
// Time - O(n)
// Space - O(n)
