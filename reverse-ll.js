'use strict';

//ITERATIVE
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

//RECURSIVE
function reverseLinkedList(head) {
  if (head = null || head.next == null) {
    return head;
  }
  let reverseList = reverseList(head.next)
  head.next.next = head;
  head.next = null;
  return reverseList;
}

// Big O Notation (RECURSIVE)
// Time - O(n)
// Space - O(n)
