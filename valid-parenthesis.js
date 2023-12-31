'use strict';

function validParentheses(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map(c))
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
}

// Big O Notation
// Time - O(n)
// Space - O(n)