'use strict';

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right)
    return Math.max(left, right) + 1
  }

  dfs(root);
  return diameter;
}

// Big O Notation
// Time - O(n)
// Space - O(n)
