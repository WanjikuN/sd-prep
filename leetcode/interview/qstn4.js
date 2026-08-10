// Given an array of strings, group the anagrams together.
// [
//     "eat",
//     "tea",
//     "tan",
//     "ate",
//     "nat",
//     "bat"
// ]
// [
//     ["eat", "tea", "ate"],
//     ["tan", "nat"],
//     ["bat"]
// ]
// ate -> eat, tea, ate
// ant-> tan, nat
// abt -> bat
// 1. What pattern/data structure would you use? hash map

// 2. How will you identify that two strings belong to the same group?key -> a sorted char

// 3. What will your Map's key and value represent? key-> sorted char, value->array of strings
// Time =O(n log n)
// Space = O(n)
const anagrams = (nums) => {
    const map = new Map();
    let result =[]
    for (const char of nums) {
        let charSorted = char.split('').sort().join("");
        if (map.has(charSorted)) {
            map.get(charSorted).push(char);
        } else {
            map.set(charSorted, [char]);
        }
    }
    console.log(map)
    for (const val of map.values()) {
        result.push(val);
    }
    return result
};
console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
