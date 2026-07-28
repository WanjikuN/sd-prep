// Two pointers
// Problem

// Determine whether there are two equal values whose indices differ by k.
// Input ---> Output
// [1,2,3,1],k=3 ---> true
// l=0
// r=k
// constant window
// space complexity  O(1)
// time complexity O(n)
const dupFn = (nums, k) => {
    let l = 0;
    let r = k;
    while(r<nums.length){
        if(nums[l] == nums[r]){
            return true
        }
        l++
        r++
    }
    return false;
};
console.log(dupFn([1,2,3,9,3],3))