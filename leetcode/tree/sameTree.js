// Same Tree
// Given two binary trees, determine whether they are identical.

// Example:
// Tree 1:          Tree 2:

//     1                1
//    / \              / \
//   2   3            2   3

// → true
// Tree 1:          Tree 2:

//     1                1
//    / \              / \
//   2   3            2   4

// → false
// sameTree(p, q)
//     =
// p.value === q.value
// AND
// sameTree(p.left, q.left)
// AND
// sameTree(p.right, q.right)

const isSameTree = (p, q) => {
    // both null → identical (base case)
    if (p == null && q == null) {
        return true;
    }
    // one is null, the other isn't → different structure
    if (p == null || q == null) {
        return false;
    }
    // values differ → not the same
    if (p.val !== q.val) {
        return false;
    }
    // recurse on both subtrees — both must match
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
console.log(
    isSameTree(
        { val: 1, left: { val: 2 }, right: { val: 3 } },
        { val: 1, left: { val: 2 }, right: { val: 3 } },
    ),
); // true
