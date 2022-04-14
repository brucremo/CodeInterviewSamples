// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function nodeDepths(root: BinaryTree) {
  // Starting at depth -1 as the root is depth 0
  let depth: number = -1;
  // Using an array for sum to pass it by reference recursively (number is passed by value)
  let sum: number[] = [0];
  // Call dfs on root
  dfs(root, depth, sum);

  return sum[0];
}

// Depth first search to support the depth calculation
export function dfs(root: BinaryTree, depth: number, sum: number[]) {
  // Increase depth on each node
  depth++;

  // Get left side depth
  if (!!root.left) {
    dfs(root.left, depth, sum);
  }

  // Get right side depth
  if (!!root.right) {
    dfs(root.right, depth, sum);
  }

  // Sum current node's depth to the total
  sum[0] += depth;
}
