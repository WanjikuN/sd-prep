// Valid Parentheses

// Given a string s containing only the characters:
// '(', ')', '{', '}', '[', ']'

// Determine if the input string is valid.
// A string is valid if:

// Every opening bracket has a corresponding closing bracket.
// Brackets close in the correct order.
// Every closing bracket corresponds to the most recently opened bracket.
// Example 1
// Input:
// s = "()"

// Output:
// true
// time complexity:O(n)
// space complexity:O(n)
const validParFn = (s) => {
    const matchFn = (par) => {
        if (par == "{") {
            return "}";
        } else if (par === "(") {
            return ")";
        } else if (par === "[") {
            return "]";
        } else return false;
    };
    let stack = [];
    let set = new Set(["(", "{", "["]);
    for (const char of s) {
        if (set.has(char)) {
            stack.push(char);
        } else {
            let top = stack[stack.length - 1];
            if (matchFn(top) !== char) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
};
console.log(validParFn("({}]"));
