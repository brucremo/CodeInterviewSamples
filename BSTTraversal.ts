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

export function inOrderTraverse(tree: BST | null, array: number[]) {
    if (tree == null) {
        return;
    }

    // Traverse nodes in actual order
    // Check left node (smaller)
    if (!!tree.left) {
        inOrderTraverse(tree.left, array);
    }

    array.push(tree.value);

    // Check left node (greater)
    if (!!tree.right) {
        inOrderTraverse(tree.right, array);
    }

    return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
    if (tree == null) {
        return;
    }

    array.push(tree.value);

    // DFS pretty much
    if (!!tree.left) {
        preOrderTraverse(tree.left, array);
    }

    if (!!tree.right) {
        preOrderTraverse(tree.right, array);
    }

    return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
    if (tree == null) {
        return;
    }

    if (!!tree.left) {
        postOrderTraverse(tree.left, array);
    }

    if (!!tree.right) {
        postOrderTraverse(tree.right, array);
    }

    array.push(tree.value);

    return array;
}
