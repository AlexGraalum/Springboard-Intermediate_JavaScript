/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function minDepthHelper(root) {
      if (root == null)
        return 0;

      if (root.left == null && root.right == null)
        return 1;

      if (root.left == null)
        return this.minDepthHelper(root.right) + 1;

      if (root.right == null)
        return this.minDepthHelper(root.left) + 1;

      return Math.min(minDepthHelper(root.left), minDepthHelper(root.right)) + 1;
    }

    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function maxDepthHelper(root) {
      if (root == null)
        return 0;

      if (root.left == null && root.right == null)
        return 1;

      if (root.left == null)
        return this.maxDepthHelper(root.right) + 1;

      if (root.right == null)
        return this.maxDepthHelper(root.left) + 1;

      return Math.max(maxDepthHelper(root.left), maxDepthHelper(root.right)) + 1;
    }

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let path = 0;
    function maxSumHelper(root) {
      if (root == null)
        return 0;

      let leftPath = maxSumHelper(root.left);
      let rightPath = maxSumHelper(root.right);
      let rootPath = Math.max(Math.max(leftPath, rightPath) + root.val, root.val);

      path = Math.max(path,
        Math.max(rootPath, leftPath + rightPath + root.val)
      );

      return rootPath;
    }

    maxSumHelper(this.root);
    return path;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root == null) return null;

    let smallest = null;
    let nodes = [this.root];

    while (nodes.length > 0) {
      let curr = nodes.pop();

      if (curr.val > lowerBound && (curr.val < smallest || smallest == null))
        smallest = curr.val;

      if (curr.left != null) nodes.push(curr.left);
      if (curr.right != null) nodes.push(curr.right);
    }

    return smallest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    function getDepth(root, node, level) {
      if (root == null)
        return 0;

      if (root == node)
        return level;

      let leftDepth = getDepth(root.left, node, level + 1);
      return leftDepth != 0 ? leftDepth : getDepth(root.right, node, level + 1);
    }
    function getParent(root, node) {
      if (root == null)
        return null;

      if (root.left == node || root.right == node)
        return root;

      let leftParent = getParent(root.left, node);
      let rightParent = getParent(root.right, node);
      if (leftParent != null)
        return leftParent;
      if (rightParent != null)
        return rightParent;
      return null;
    }

    return ((getDepth(this.root, node1, 1) == getDepth(this.root, node2, 1)) &&
      (getParent(this.root, node1) != getParent(this.root, node2)));
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    let serial = [];

    function serializeHelper(node) {
      if (node == null) {
        serial.push('#');
        return;
      }

      serial.push(node.val);
      serializeHelper(node.left);
      serializeHelper(node.right);
    }

    serializeHelper(tree.root);
    return serial.join(',');
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (stringTree == "" || stringTree == null)
      return null;

    let serial = stringTree.split(',');

    function deserializeHelper() {
      if (serial.length) {
        let val = serial.shift();

        if (val === '#')
          return null;

        let newNode = new BinaryTreeNode(+val);
        newNode.left = deserializeHelper();
        newNode.right = deserializeHelper();

        return newNode;
      }
    }

    return new BinaryTree(deserializeHelper());
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, node = this.root) {
    if (node == null) return null;
    if (node == node1 || node == node2) return node;

    let left = this.lowestCommonAncestor(node1, node2, node.left);
    let right = this.lowestCommonAncestor(node1, node2, node.right);

    if (left != null && right != null) return node;
    if (left != null || right != null) return left || right;
    if (left == null && right == null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
