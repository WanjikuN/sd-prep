// Group Anagrams

// Given an array of strings strs, group the anagrams together.
// An anagram is a word formed by rearranging the letters of another word.

// For example:

// "eat" → "tea" → "ate"
// They all contain exactly the same letters.

// Example 1
// Input:
// ["eat","tea","tan","ate","nat","bat"]

// Output:
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

// The order of the groups doesn't matter.
const groupAnFn = (strs) => {
    const map = new Map();
    // iterate through the array
    for (const char of strs) {
        let sort = char.split("").sort().join("");
        if (map.has(sort)) {
            map.get(sort).push(char);
        } else {
            map.set(sort, [char]);
        }
    }
    return [...map.values()];
};
console.log(groupAnFn(["eat", "tea", "tan", "ate", "nat", "bat"]));
