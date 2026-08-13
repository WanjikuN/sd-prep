// Contains Duplicate
// Given an integer array, return true if any value appears more than once.
// nums = [1,2,3,1]
// → true

// nums = [1,2,3,4]
// → false
const containDupFn = (nums) => {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};
console.log(containDupFn([1, 2, 3, 4]));
console.log(containDupFn([1, 2, 3, 1, 4]));
