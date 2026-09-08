// Search in a Binary Search Tree
// The problem

// Given the root of a Binary Search Tree (BST) and a target value, find the node containing that value and return the subtree rooted at that node.

// If the value doesn't exist, return null.

// Example:
//         4
//        / \
//       2   7
//      / \
//     1   3

// Target:
// 2

// Expected result:
//     2
//    / \
//   1   3
const binarySFn = (node, target) => {
    if (!node) {
        return null;
    }
    if (target < node.val) {
        // left
        return binarySFn(node.left, target);
    } else if (target === node.val) {
        return node;
    } else {
        // right
        return binarySFn(node.right, target);
    }
};
