// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is unique.

// Example 1:

// Input:  [1, 2, 3, 1]
// Output: true

// Because 1 appears twice.
const dupsFn = (nums) => {
    if (nums.length <= 1) return false;
    const set = new Set(nums);
    return set.size !== nums.length;
};
console.log(dupsFn([1, 2, 3, 1]));
// const dupsFn = (nums) => {
//     const seen = new Set();

//     for (const num of nums) {
//         if (seen.has(num)) {
//             return true;
//         }

//         seen.add(num);
//     }

//     return false;
// };