// Problem
// Two Sum
// Problem: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. 

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because nums[0] + nums[1] == 9)
// Constraints: You may not use the same element twice. You can return the answer in any order. Assume exactly one solution exists

// Time Complexity
// Linear O(n)- as time will increase proportionally to the input size
// Space Complexity
// constant O(1) - list does not grow as input grows
// Lessons Learned
// Find a solution first then optimize

// Approach
const twoSum = (s, target) =>{
    let indicesArray = []
    
    // loop trough array
    for(let i=0; i<s.length;i++){
        if(s[i] == s.length -1) return
        let x = s[i] + s[i+1]
        if( x == target){
            indicesArray.push(i)
            indicesArray.push(i+1)
        }
    }
    return indicesArray
}
console.log(twoSum([2, 7, 11, 15],9))