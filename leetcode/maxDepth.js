// Maximum Depth of Binary Tree

// We'll derive it from scratch, just like we did with Reverse Linked List.

// The problem:

//         3
//        / \
//       9   20
//          /  \
//         15   7

// Return
// 3

// 1. Ask left subtree for its depth
// 2. Ask right subtree for its depth
// 3. Take the larger one
// 4. Add 1 for the current noden:

// Time: O(n) — every node is visited once.
// Space: O(h) — recursion stack, where h is the tree height.
// Balanced tree: O(log n)
// Completely skewed tree: O(n)

const maxDepth = (node) => {
    if (node === null) {
        return 0;
    }

    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);

    return 1 + Math.max(leftDepth, rightDepth);
};