## Closures

### Definition of a closure.

- A function that remembers the variables from where it was created, even after the outter function has finished running.

    ```
    function outer(){
        let count =0
        function inner(){
            count++;
            return count;
        }
        return inner // handing back the inner function
    }
    ```
- This is the normal rule: local variables die when the function returns.

### Why closures exist.
- So that functions can be treated as portable, self contained values; you can pass them around, return them, store them, call them later, and they'll still work correctly with the data they need.
### Practical use cases:
#### a. Event handlers
 - A click handler created inside a loop or map closes over the specific item's data (like an id or name), so each button remembers its own value instead of sharing one.
#### b. Private state
- Variables trapped inside a function are only reachable by other functions born inside it, letting you fake truly private data (like a bank balance) with no external access path.
#### c. Memoization
-  A function wraps a slow function with a private cache (hash map) that persists across calls, so repeated inputs return instantly instead of recomputing.
#### d. Currying (high level)
- A function takes its arguments one at a time, each call returning a new function that remembers the previous arguments via closure, until all are collected and the result is computed.

```
function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
```
#### solution
- The output will be 1 then 2 then 3 as the counter reference is one therefore the stored count increments on each call and stored the last variable value with each call.

### Question: What happens if two keys hash to the same location?
- Hash collison
-Hash maps handle collisions using techniques such as:

    a. Chaining (store multiple entries in a bucket)

    b. Open addressing (find another empty slot)
