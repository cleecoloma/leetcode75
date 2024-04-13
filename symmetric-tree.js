'use strict';

function isSymmetric(root) {
  if (root == null) {
    return true;
  }

  return symmetricChecker(root.left, root.right);

  function symmetricChecker(left, right) {
    if (left == null && right == null) {
      return true;
    }
    if (left == null || right == null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return symmetricChecker(left.left, right.right) && symmetricChecker(left.right, right.left);
  }
}

// Big O Notation
// Time -
// Space -
