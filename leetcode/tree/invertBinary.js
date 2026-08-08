// Invert Binary Tree

// Given:

//         4
//        / \
//       2   7
//      / \ / \
//     1  3 6  9

// Invert it so that every node's left and right children are swapped:

//         4
//        / \
//       7   2
//      / \ / \
//     9  6 3  1
// Here's the interesting part

// At every node, we simply need to:

// swap(left, right)

// Then recursively invert the two subtrees.
const invertTree = (root) => {
    if (root === null) {
        return null;
    }
    [root.left,root.right] =[root.right,root.left]
    invertTree(root.left)
    invertTree(root.right)
    return root
};
