// Expression stacks
// Decode String
// Problem

// Given an encoded string, return its decoded version.

// The encoding rule is:

// k[encoded_string]

// meaning:

// Repeat encoded_string exactly k times.

// You may assume:

// k is always a positive integer.
// The input is always valid.
// There are no extra spaces.

// currentNumber
// currentString
// Create an empty stack.

// Create:
//     currentString = ""
//     currentNumber = 0

// Traverse the string one character at a time.

// If the character is a digit:
//     Build the number.
//     (Handles numbers like 12[a])

// If the character is '[':
//     Push (currentString, currentNumber) onto the stack.
//     Reset currentString and currentNumber.

// If the character is a letter:
//     Append it to currentString.

// If the character is ']':
//     Pop the previous string and repeat count.
//     currentString = previousString + currentString repeated repeatCount times.

// After processing all characters:
//     Return currentString.
// Input --> s = "3[a]2[bc]"
// Output --> "aaabcbc"
// Behaviour --> 3[a] -> aaa 2[bc] -> bcbc
const decodeString = (s) => {
    const stack = [];
    let currentNumber = 0;
    let currentString = "";

    for (const char of s) {
        if (/[0-9]/.test(char)) {
            currentNumber = currentNumber * 10 + Number(char);
        } else if (char === "[") {
            stack.push([currentString, currentNumber]);
            currentNumber = 0;
            currentString = "";
        } else if (char === "]") {
            const [prevString, repeatCount] = stack.pop();
            currentString = prevString + currentString.repeat(repeatCount);
        } else {
            currentString = currentString + char;
        }
    }

    return currentString;
};

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("12[a]"));      // "aaaaaaaaaaaa"
