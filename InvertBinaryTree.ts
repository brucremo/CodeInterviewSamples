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

export function invertBinaryTree(tree: BinaryTree | null) {
  if (!tree) {
    return null;
  }

  // Use BFS to invert level by level
  let queue: BinaryTree[] = [];

  // Add root
  queue.push(tree);

  while (queue.length) {
    // Shift 1st node from queue
    let node = queue.shift()!;

    // Swap its children
    // Arbitrarily picked left one, could be null or not shouldn't be a problem
    let aux: BinaryTree | null = node!.left!;

    // Swap nodes using aux
    node.left = node.right;
    node.right = aux;

    // Add children to queue
    if (!!node.left) queue.push(node.left);
    if (!!node.right) queue.push(node.right);
  }
}
