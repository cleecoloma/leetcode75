'use strict';

function llPalindrome(head) {
  let string1 = '';
  let string2 = '';
  let node = head;

  while (node != null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
}

// Big O Notation
// Time - O(n)
// Space - O(n)
