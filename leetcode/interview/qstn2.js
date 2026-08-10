// Given an integer array nums, return true if any value appears at least twice. Return false if every element is distinct.
// nums = [1,2,3,1]
// → true

// nums = [1,2,3,4]
// → false

// nums = [1,1]
// → true
// 1. What pattern/data structure would you use?duplicates-> hash set

// 2. Why? We need to know whether we've already seen a value.

// 3. What would you store? store the array characters
// Time = O(n)
// Space=O(n)
const duplicates = (nums)=>{
    const set = new Set()
    for(const char of nums){
        if(!set.has(char)){
            set.add(char)
        }else{
            return true
        }
    }

    return false
}
console.log(duplicates([1,2,3,1]))
console.log(duplicates([1,2,3,4]))
console.log(duplicates([1,1]))