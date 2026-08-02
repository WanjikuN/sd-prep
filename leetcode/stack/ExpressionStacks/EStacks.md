## Reverse Polish Notation(RPN)
- Also known as postfix notation, is a mathematical syntax where operators follow their operands (e.g., 3 4 + instead of 3 + 4)

### Algorithm

1. Create an empty stack.

2. Traverse the tokens one by one.

3. If the current token is a number:
     -  Push it onto the stack.
4. Otherwise, the token is an operator:
     4.1 Pop the top value → right operand.
     4.2 Pop the next value → left operand.
     4.3 Perform the operation:
              +
              -
              *
              /
     4.4 Push the result back onto the stack.

5. After processing all tokens:
     - The stack contains one value,
     - which is the final answer.

6. Return the top of the stack.