//Valid Palindrome
//Ignore spaces, punctuation and capitalization.
//s = "A man, a plan, a canal: Panama"
// → true

// s = "race a car"
// → false

const validPalindrome = (s) => {
    let extras = [" ", ",", ":"];
    let stack = [];
    let left = 0;
    for (str of s) {
        if (extras.includes(str)) {
            continue;
        } else {
            stack.push(str.toLowerCase());
        }
    }
    while (stack.length > 0 && left < stack.length) {
        const top = stack[stack.length - 1];

        if (top === stack[left]) {
            left++;
        } else {
            return false;
        }
        stack.pop();
    }

    return true;
};
console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
