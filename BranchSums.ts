// This is the class of the input root.
// Do not edit it.
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

export function branchSums(root: BinaryTree): number[] {
  let result: number[] = [];
  dfs(root, result, 0);
  return result.length > 0 ? result : [-1];
}

export function dfs(root: BinaryTree, array: number[], sum: number) {
  // On the leaf node, add it to the array of results
  // Keep diving in the tree otherwise and adding to running sum
  if (!root.left && !root.right) {
    array.push(sum + root.value);
  } else {
    sum += root.value;

    // Sum left tree
    if (!!root.left) {
      dfs(root.left!, array, sum);
    }

    // Sum right tree
    if (!!root.right) {
      dfs(root.right!, array, sum);
    }
  }
}
