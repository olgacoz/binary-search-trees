export default class Tree {
  constructor(array = []) {
    this.root = this.#buildTree(array);
  }

  #buildTree(array) {
    const arrayWithoutDuplicates = [...new Set(array)];
    const sortedArray = arrayWithoutDuplicates.sort((a, b) => a - b);

    return this.#buildBalancedTree(sortedArray, 0, sortedArray.length - 1);
  }

  #buildBalancedTree(array, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = this.#buildBalancedTree(array, start, mid - 1);
    root.right = this.#buildBalancedTree(array, mid + 1, end);

    return root;
  }

  includes(value) {
    let node = this.root;

    while (node !== null) {
      if (node.data === value) {
        return true;
      }
      if (value > node.data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return false;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
