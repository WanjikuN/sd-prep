// Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Example:

//        4
//       / \
//      2   7
//     / \ / \
//    1  3 6  9

// After inversion:

//        4
//       / \
//      7   2
//     / \ / \
//    9  6 3  1
// Time: O(n)
// Space: O(h) -h-height
// Balanced tree → O(log n)
// Completely skewed tree → O(n)
const invertTree = (node) => {
    // base case
    if (node === null) {
        return null;
    }

    // swap left and right
    // invert left subtree
    // invert right subtree
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    // Recursively invert both subtrees
    invertTree(node.left)
    invertTree(node.right)

    return node
};
