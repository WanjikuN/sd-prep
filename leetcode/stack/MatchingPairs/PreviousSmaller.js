const previousGreaterFn = (nums) => {
    const result = new Array(nums.length).fill(-1); //[-1,-1,-1]
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
            // result[i] = nums[popped]
        }
        if (stack.length > 0) result[i] = nums[stack[stack.length - 1]];
        stack.push(i);
    }
    return result;
};
console.log(previousGreaterFn([2, 1, 5, 3, 6, 4]));
