// Given:

//         3
//        / \
//       9   20
//          /  \
//         15   7

// Return:3
// Time:  O(n)
// Space: O(n)
const maxDepthBFS = (root) => {
    if (root === null) {
        return 0;
    }

    const queue = [root];
    let front = 0;
    let depth = 0;
     while (front < queue.length) {
        const levelSize = queue.length - front; // nodes remaining = this level

        for (let i = 0; i < levelSize; i++) {
            const node = queue[front++];

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        depth++;
    }

    return depth;
};