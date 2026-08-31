// Problem

// Given an array of strings strs, group the anagrams together.

// An anagram is a word formed by rearranging the letters of another word, using the same letters the same number of times.

// Return the grouped anagrams in any order.

// Example 1
// Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

// return []-array
// create a map keys - sorted strings, value - array of strings
// return the values of the map as an array
const groupAnagrams = (strs) =>{
    const map = new Map()
    for(const word of strs){
        const sorted = word.split("").sort().join("") //O(k log k)
        if(map.has(sorted)){
            map.get(sorted).push(word)

        }else{
            map.set(sorted,[word])
        }
    }
    // console.log(map)
   
    return [...map.values()]
}
console.log(groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]))