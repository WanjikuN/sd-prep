// Max Depth
//     3
//    / \
//   9   20
//      /  \
//     15   7
// depth(node) = 1+ Math.max(depth(left),depth(right))
// Time:  O(n)
// Space: O(h)
const maxDepth = (root) => {
    if (root == null) {
        return 0;
    }
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
};
console.log(maxDepth(root)); // 3
console.log(maxDepth(null)); // 0
