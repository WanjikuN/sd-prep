// Valid Palindrome

// Given a string s, determine whether it is a palindrome.
// A palindrome reads the same forward and backward.

// For this problem:

// Ignore case
// Ignore non-alphanumeric characters
// Letters and numbers count

// Example 1
// Input:
// "A man, a plan, a canal: Panama"

// Output:
// true
const validPalFn = (s) => {
    let cleanedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); //O(n)
    let left = 0;
    let right = cleanedS.length - 1;
    while (left <= right) { //O(n)
        if (cleanedS[left] === cleanedS[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
console.log(validPalFn("race a car"));
