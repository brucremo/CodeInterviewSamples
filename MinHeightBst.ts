export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

export function minHeightBst(array: number[]) {
  return binarySearchAux(array, 0, array.length - 1, null);
}

export function binarySearchAux(
  array: number[],
  left: number,
  right: number,
  bst: BST | null
): BST | null {
  const middle = Math.floor((left + right) / 2);

  if (left > right) return null;

  bst = new BST(array[middle]);
  bst.left = binarySearchAux(array, left, middle - 1, bst);
  bst.right = binarySearchAux(array, middle + 1, right, bst);

  return bst;
}
