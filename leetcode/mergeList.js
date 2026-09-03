// Merge Two Sorted Lists

// Given the heads of two sorted linked lists, list1 and list2,
// merge them into one sorted linked list.
// Return the head of the merged list.

// Example 1
// Input:
// list1 = [1,2,4]
// list2 = [1,3,4]
//
// Output:
// [1,1,2,3,4,4]

const mergeLstFn = (lst1, lst2) => {
    let L1 = 0;
    let L2 = 0;
    let result = [];

    // Compare while both lists still have elements
    while (L1 < lst1.length && L2 < lst2.length) {
        if (lst1[L1] <= lst2[L2]) {
            result.push(lst1[L1]);
            L1++;
        } else {
            result.push(lst2[L2]);
            L2++;
        }
    }

    // Add remaining elements from list1
    while (L1 < lst1.length) {
        result.push(lst1[L1]);
        L1++;
    }

    // Add remaining elements from list2
    while (L2 < lst2.length) {
        result.push(lst2[L2]);
        L2++;
    }

    return result;
};

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

console.log(mergeLstFn(list1, list2));
// [1, 1, 2, 3, 4, 4]

console.log(mergeLstFn([1, 5, 7], [1, 2, 3, 6, 8]));
// [1, 1, 2, 3, 5, 6, 7, 8]

console.log(mergeLstFn([0, 2, 5], [1, 3]));
// [0, 1, 2, 3, 5]

console.log(mergeLstFn([], [1, 2]));
// [1, 2]

console.log(mergeLstFn([1, 2], []));
// [1, 2]

console.log(mergeLstFn([1], [2, 3, 4]));
// [1, 2, 3, 4]