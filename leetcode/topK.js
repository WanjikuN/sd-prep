// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements.
// You can return the answer in any order.

// Example 1
// Input:
// nums = [1,1,1,2,2,3]
// k = 2

// Output:
// [1,2]
const topKFn = (nums, k) => {
    const map = new Map();
    for (const char of nums) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    const entries=[...map.entries()]
    entries.sort((a,b)=>b[1]-a[1])
    let result = entries.slice(0, k).map(entry=>entry[0])

    return result;
};
console.log(topKFn([1,1,1,2,2,3],2))