'use strict';

function buildTree(preorder, inorder) {
  let p = 0;
  let i = 0;

  function build(stop) {
    if (inorder[i] != stop) {
      let root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  }
  return build();
}
// Big O Notation
// Time -
// Space -
