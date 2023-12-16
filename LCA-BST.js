'use strict';

//Lowest Common Ancestor of a Binary Search Tree

//Iterative solution
function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
}
// Big O Notation
// Time - O(h) where h is the height of the tree
// Space - O(1)

//Recursive solution
function lowestCommonAncestor(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
}
// Big O Notation
// Time - O(h) where h is the height of the tree
// Space - O(n)