'use strict';

function isBalanced(root) {
  let balance = true;

  function checker(node, height) {
    if (!node) {
      return 0;
    }
    let left = checker(node.left, height + 1)
    let right = checker(node.right, height + 1);

    if (Math.abs(left - right) > 1) {
      balance = false;
    }
    return Math.max(left, right) + 1;
  }
  checker(root, 0);
  return balance;
}
