// Stacks
// Daily Temperatures
// Problem
// You are given an array of integers temperatures, where teperatures[i] represents the temperature on the ith day.
// For each day, determine how many days you would have to wait untill a warmer temperature
// if there is no future with a warmer temperature, return 0 for that day
// Input -> temperatures = [73,74,75,71,69,72,76,73]
// Output -> [1,1,4,2,1,1,0,0]

const dailyTempFn = (temps) => {
    const result = new Array(temps.length).fill(0);
    const stack = [];
    for (let i = 0; i < temps.length; i++) {
        while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
            // const diff =i-stack[stack.length-1]
            const popped = stack.pop();
            result[popped] = i - popped;
        }
        stack.push(i);
    }
    return result;
};
console.log(dailyTempFn([73, 74, 75, 71, 69, 72, 76, 73]));
