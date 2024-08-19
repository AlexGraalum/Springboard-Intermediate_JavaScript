/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    function sumValuesHelper(root) {
      if (root == null)
        return 0;

      let sum = root.val;

      for (let child of root.children) {
        sum += sumValuesHelper(child);
      }

      return sum;
    }

    return sumValuesHelper(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    function countEvensHelper(root) {
      if (root == null)
        return 0;

      let count = 0;

      if (root.val % 2 == 0)
        count++;

      for (let child of root.children) {
        count += countEvensHelper(child);
      }

      return count;
    }
    return countEvensHelper(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    function numGreaterHelper(root, lowerBound) {
      if (root == null)
        return 0;

      let count = 0;

      if (root.val > lowerBound)
        count++;

      for (let child of root.children) {
        count += numGreaterHelper(child, lowerBound);
      }

      return count;
    }

    return numGreaterHelper(this.root, lowerBound);
  }
}

module.exports = { Tree, TreeNode };
