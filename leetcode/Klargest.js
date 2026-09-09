// Kth Largest Element in an Array
// The actual problem

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Important: kth largest means the kth element in sorted order, not the kth distinct element.

// Example 1
// nums = [3,2,1,5,6,4]
// k = 2
//elements
// const kLargest = (nums, k) => {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(i,nums[i]);
//     }
//     const entries = [...map.entries()]
//     entries.sort((a,b)=>b[1]-a[1])
//     return entries.slice(0,k).map(entry=> entry[1])
// };
//element
const kLargest = (nums, k) => {
    const sorted = [...nums].sort((a, b) => b - a);
    return sorted[k - 1];
};
console.log(kLargest([3, 2, 1, 5, 6, 4], 2));
