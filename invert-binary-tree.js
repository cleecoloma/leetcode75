'use strict';

function invertBinaryTree(root) {
    if (root === null) {
      return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    if (root.left) {
      invertTree(root.left);
    }
    if (root.right) {
      invertTree(root.right);
    }
    return root;
}

// Big O Notation
// Time - O(n)
// Space - O(h) where h is the height/levels of the tree (temp variable)
