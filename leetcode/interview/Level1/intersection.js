// Intersection of Two Arrays
// Return the unique values appearing in both arrays.
// nums1 = [1,2,2,1]
// nums2 = [2,2]
// → [2]

// Another:
// nums1 = [4,9,5]
// nums2 = [9,4,9,8,4]
// → [4,9]
const interFn = (nums1, nums2) => {
    const set = new Set(nums1);
    let result = new Set();
    for (char of nums2) {
        if (set.has(char)) {
            result.add(char);
        }
    }
    return result;
};
console.log(interFn([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(interFn([1, 2, 2, 1], [2, 2]));
