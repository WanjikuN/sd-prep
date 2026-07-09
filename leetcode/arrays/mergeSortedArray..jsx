// Problem
// Merge Sorted Array
// Problem: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. 

// Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should be stored inside nums1. 

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Constraints: nums1 has a length of m + n. The last n elements of nums1 are set to 0 and should be ignored. You must modify nums1 in-place.

// Time Complexity
// O(1)
// Space Complexity
// O(1)
// Lessons Learned
// difference btwn splice and slice
// Approach
const sortNumb = (nums1,nums2,m,n) =>{
    s = nums1 + nums2 
    t = s.split(",").map(Number)
    nums1 = t.slice(0,(m+n))
    return nums1
}
console.log(sortNumb([1, 2, 3, 0, 0, 0],[2, 5, 6],3,3))