// This is an input class. Do not edit.
class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function validateBst(tree: BST): boolean {
    try {
        return bstHelper(tree, -Infinity, Infinity);
    } catch (ex) {
        console.log(ex)
        return false;
    }
}

function bstHelper(tree: BST | null, min: number, max: number): boolean {
    if (tree == null) return true;
    if (tree.value < min || tree.value >= max) return false;
    // Max value is now the root. All nodes to the left need to be smaller than it
    const leftValid = bstHelper(tree.left, min, tree.value);
    // Min value is now the root. All nodes to the right need to be greater than it
    return leftValid && bstHelper(tree.right, tree.value, max);
}