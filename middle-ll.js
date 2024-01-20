'use strict';

function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
