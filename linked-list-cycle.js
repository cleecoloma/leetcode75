'use strict';

function hasCycle(head) {
  let visitedNodes = new Map();
  let currentNode = head;
  while (currentNode !== null) {
    if (visitedNodes.has(currentNode)) {
      return true;
    }
    visitedNodes.set(currentNode, currentNode.value);
    currentNode = currentNode.next;
  }
  return false;
}