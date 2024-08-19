const { NoDeprecatedCustomRule } = require("graphql");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const tempNode = new Node(val);
    if (this.root == null) {
      this.root = tempNode;
      return this;
    }

    let curr = this.root;
    let parent = null;

    while (curr != null) {
      parent = curr;
      if (curr.val > val)
        curr = curr.left;
      else if (curr.val < val)
        curr = curr.right;
    }

    if (parent.val > val) {
      parent.left = tempNode;
      return this;
    }
    if (parent.val < val) {
      parent.right = tempNode;
      return this;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    const tempNode = new Node(val);

    if (this.root == null) {
      this.root = tempNode;
      return this;
    }

    if (node.val > val) {
      if (node.left == null) {
        node.left = tempNode;
        return this;
      }
      return this.insertRecursively(val, node.left,);
    }
    if (node.val < val) {
      if (node.right == null) {
        node.right = tempNode;
        return this;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    while (node != null) {
      if (node.val < val) {
        node = node.right;
      } else if (node.val > val) {
        node = node.left;
      } else {
        return node;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node == null)
      return undefined;

    if (node.val > val)
      return node.left == null ? undefined : this.findRecursively(val, node.left);
    if (node.val < val)
      return node.right == null ? undefined : this.findRecursively(val, node.right);
    return node;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (this.root == null)
      return [];

    let arr = [];
    function traverse(node) {
      arr.push(node.val);

      if (node.left != null)
        traverse(node.left);
      if (node.right != null)
        traverse(node.right);

      return;
    }

    traverse(this.root);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (this.root == null)
      return [];

    let arr = [];
    function traverse(node) {
      if (node.left != null)
        traverse(node.left);

      arr.push(node.val);

      if (node.right != null)
        traverse(node.right);

      return;
    }

    traverse(this.root);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (this.root == null)
      return [];

    let arr = [];
    function traverse(node) {
      if (node.left != null)
        traverse(node.left);
      if (node.right != null)
        traverse(node.right);

      arr.push(node.val);

      return;
    }

    traverse(this.root);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root == null)
      return [];

    let arr = [];
    let traversalArray = [this.root];
    while (traversalArray.length > 0) {
      let node = traversalArray.shift();
      arr.push(node.val);

      if (node.left != null)
        traversalArray.push(node.left);
      if (node.right != null)
        traversalArray.push(node.right);
    }

    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    function deleteNode(node, val) {
      if (node == null)
        return node;

      if (node.val > val)
        node.left = deleteNode(node.left, val);
      else if (node.val < val)
        node.right = deleteNode(node.right, val);
      else {
        if (node.left == null)
          return node.right;
        if (node.right == null)
          return node.left;

        let child = getChild(node);
        node.val = child.val;
        node.right = deleteNode(node.right, child.val);
      }
      return node;
    }

    function getChild(node) {
      node = node.right;
      while (node != null && node.left != null)
        node = node.left;
      return node;
    }

    return deleteNode(this.root, val);
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    function balanceValue(node) {
      if (node == null)
        return 0;

      let left = balanceValue(node.left);
      if (left == -1)
        return -1;

      let right = balanceValue(node.right);
      if (right == -1)
        return -1;

      if (Math.abs(left - right) > 1)
        return -1;
      else
        return Math.max(left, right) + 1;
    }

    if (balanceValue(this.root) > 0)
      return true;
    return false;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(node = this.root) {
    if (this.root == null || (this.root.left == null && this.root.right == null))
      return undefined;

    while (node != null) {
      if (node.left != null && node.right == null)
        return this.findSecondHighest(node.left);

      if (node.right != null && node.right.left == null && node.right.right == null)
        return node.val;

      node = node.right;
    }
  }
}

module.exports = BinarySearchTree;
