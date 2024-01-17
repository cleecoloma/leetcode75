'use strict';

//iterative
function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}


// Big O Notation (ITERATIVE)
// Time - O(n)
// Space - O(1)