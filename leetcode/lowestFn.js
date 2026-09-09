// Lowest Common Ancestor of a Binary Search Tree

// Given a Binary Search Tree (BST), find the lowest common ancestor (LCA) of two given nodes p and q.
// p = 2
// q = 8
// The lowest common ancestor is the deepest node that has both p and q somewhere in its subtree.
// Example:

//         6
//        / \
//       2   8
//      / \ / \
//     0  4 7  9
//       / \
//      3   5
// 6
// If p and q are BOTH smaller
//         ↓
//       go LEFT

// If p and q are BOTH larger
//         ↓
//       go RIGHT

// Otherwise
//         ↓
//    current node is LCA

const lowestFn = (node, q, p) => {
    if (node === null) {
        return null;
    }
    if (p.val < node.val && q.val < node.val) {
        // left
        return lowestFn(node.left, q, p);
    } else if (p.val > node.val && q.val > node.val) {
        // right
        return lowestFn(node.right, q, p);
    } else {
        return node;
    }
};
