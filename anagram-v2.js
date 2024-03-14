'use strict';

// Compare short string and long text to 
// determine if anagrams of the short string inside the long text 
function validAnagramV2(s, t) {
  let results = []
  const words = t.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (checkAnagram(s, words[i])) {
      results.push(words[i])
    }
  }

  function checkAnagram(short, long) {
    if (short.length !== long.length) {
      return false;
    }

    let letters = {};

    for (let i = 0; i < short.length; i++) {
      letters[short[i]] = letters[short[i]] ? letters[short[i]] + 1 : 1;
      letters[long[i]] = letters[long[i]] ? letters[long[i]] - 1 : -1;
    }

    for (let letter in letters) {
      if (letters[letter] !== 0) {
        return false;
      }
    }

    return true;
  }

  return results;
}

// Big O Notation
// Time - 
// Space - 
