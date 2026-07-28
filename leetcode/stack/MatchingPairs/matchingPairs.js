// stack
// Example: ()[]{}
// Question: ([{}]) , is it valid?
// Algorithm
// 1. Create an empty stack.
// 2. Traverse the string one character at a time.
// 3. If it's an opening bracket ((, {, [), push it onto the stack.
// 4. If it's a closing bracket (), }, ]):
//     4.1 If the stack is empty, return false.
//     4.2 Otherwise, compare it with the top of the stack.
//     4.3 If they don't match, return false.
//     4.4 If they match, pop the top element.
// 5. After processing all characters:
//     5.1 If the stack is empty, return true.
//     5.2 Otherwise, return false.

// Conditions for a valid string
// 1. Every closing bracket matches the top oof the stack
// 2. The stack stack is empty after processing the entire string

// Valid Parentheses
// Problem: Given a string s containing only the characters: '(' ')' '{' '}' '[' ']' Determine if the input string is valid
// A string is considered valid if:

// Every opening bracket has a corresponding closing bracket of the same type.
// Brackets are closed in the correct order.
// Every closing bracket has a matching opening bracket.

// Return true if the string is valid; otherwise, return false.
// 
// ----------------------------------

// const validPara = (s) => {
//     const stack = [];
//     const map = new Map();

//     map.set("(", ")").set("{", "}").set("[", "]");

//     // traverse the string
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             stack.push(s[i]);
//         } else {
//             if (stack.length === 0) {
//                 return false;
//             } else if (s[i] === map.get(stack[stack.length - 1])) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// };
// console.log(validPara("}}"));
// --------------------------------------


