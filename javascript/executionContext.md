## JavaScript Deep Dive
### 1. Memory creation phase aka creation phase
- Before JS  runs code line by line , it does a setup pass first.
- JS creates and sets up memory for variables and functions before executing anything
- JS scans through entire code (top to bottom) without executing and for every variable and func declararions:
    ##### a. `var` declaration
    - JS allocates memory and sets value to `undefined`
    ##### b.  `let` and `const` declarations
    - JS allocates memory( not initialized to `undefined`)
    - They stay in TDZ(Temporal Dead Zone), reserved but unusable until execution reaches that line 
    ##### c. Function Declarations
    - JS stores entire funcction in memory
### 2. Execution phase
- This is where the code actually runs, line by line, top to bottom.
    ##### a. Assign real values to variables
    - Replacing `undefined` with whatever you actually assigned.
    ##### b. Execute function calls
    - creates a brand new Execution context (with its own mini memory + execution phase) for that function.
### 3. Hoisting
- This is the behaviour you observe as a result of memory creation phase.
-The fact that variables and functions are available in memory before their line of code actually executes
### 4. var vs let vs const

### 5. Function declarations
- A func declared with the `function` keyword, as a standalone statement, with a name.
    ```
    function greet() 
    {
    console.log("Hello!");
    }
    ```
- Fully hoisted.
### 6. Function expressions
- A function assigned to a variable. Can be named or anonymous but is treated as a value.
    ```
    const greet = function () {
    console.log("Hello!");
    };
    ```
- Follows hoisting rules of whatever it's assigned to.

### 7. Scope chain & Lexical scoping
- Scope is the region of code where a variable is accessible.
- Lexical scoping , A function's scope is determined by where it is physically written in the code .
- Scope chain is the lookup path for a variable that starts from the current scope to the global scope.