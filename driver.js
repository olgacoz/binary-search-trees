import Tree from "./Tree.js";

function generateRandomArray(size = 15, maxExclusive = 100) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * maxExclusive));
  }
  return arr;
}

const bst = new Tree(generateRandomArray());

console.log("Initial Tree");
bst.prettyPrint();
console.log(`isBalanced: ${bst.isBalanced()}`);

console.log("\nPreorder traversal");
let arr = [];
bst.preOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nPostorder traversal");
arr = [];
bst.postOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nInorder traversal");
arr = [];
bst.inOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nLevel order traversal");
arr = [];
bst.levelOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nUnbalance tree by adding several values greater than 100");
bst.insert(101);
bst.insert(102);
bst.insert(103);
bst.insert(104);
bst.insert(105);
console.log("Tree after insertion");
bst.prettyPrint();
console.log(`isBalanced: ${bst.isBalanced()}`);

console.log("\nTree after calling rebalance()");
bst.rebalance();
bst.prettyPrint();
console.log(`isBalanced: ${bst.isBalanced()}`);

console.log("\nPreorder traversal");
arr = [];
bst.preOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nPostorder traversal");
arr = [];
bst.postOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nInorder traversal");
arr = [];
bst.inOrderForEach((value) => arr.push(value));
console.log(arr);

console.log("\nLevel order traversal");
arr = [];
bst.levelOrderForEach((value) => arr.push(value));
console.log(arr);
