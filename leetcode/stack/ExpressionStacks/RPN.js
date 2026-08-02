// E Stacks
// Evaluate Reverse Polish Notation
// Problem

// You are given an array of tokens representing an arithmetic expression in Reverse Polish Notation.

// Evaluate the expression and return its value.

// The valid operators are:

// +
// -
// *
// /

// Division truncates toward zero.

// Input --> ["2","1","+","3","*"]
// Output -->9
// Complexity
// Time
// O(n)

// Every token is processed once.

// Space
// O(n)

// Worst case:

// ["1","2","3","4","5"]

// Everything gets pushed before any operators appear.

const rpnFn = (nums) => {
    const stack = [];
    const operators = new Set(["+", "-", "*", "/"]);

    for (let i = 0; i < nums.length; i++) {
        if (operators.has(nums[i]) && stack.length >= 2) {
            const right = stack.pop();
            const left = stack.pop();
            switch (nums[i]) {
                case "+":
                    stack.push(left + right);
                    break;
                case "-":
                    stack.push(left - right);
                    break;
                case "*":
                    stack.push(left * right);
                    break;
                case "/":
                    stack.push(Math.trunc(left / right));
                    break;
            }
        } else {
            stack.push(Number(nums[i]));
        }
    }
    return stack[stack.length - 1];
};
console.log(rpnFn(["2", "1", "+", "3", "*"]));
