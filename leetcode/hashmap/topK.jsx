// hash map
// Top K Frequent Elements
// Problem
// --> Given an integer array `nums` and an integer k, return the k moost frequent elements
// input ---> output
// [1,1,1,2,2,3], k=2 -->[1,2]
// frequency map
// 1-> 3
// 2 ->2
// 3->1
// // pseudo
// create a function named topKFn
//     initialize a map
//     loop through the array creating a frequency map
const topKFn = (nums, k) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    return [...map.entries()]
        .sort((a, b) => b[1]  - a[1])
        .slice(0, k)
        .map(([num]) => num);
};
console.log(topKFn([4, 4, 4, 6, 6, 2, 2, 2, 2], 1));
