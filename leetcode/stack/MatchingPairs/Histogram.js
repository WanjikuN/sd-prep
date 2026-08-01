// stack
// Largest Rectangle in Histogram → combines multiple monotonic stack concepts into one problem

// Previous Smaller Element
// Next Smaller Element
// Width calculation
// Area calculation

// Problem

// You are given an array heights where each element represents the height of a bar in a histogram.

// Each bar has a width of 1.

// Return the area of the largest rectangle that can be formed.
// Input => [2,1,5,6,2,3]
// Output => 10
// Next greater el ->[2,2] ->[5,10] ->[6,6]
const histogramFn = (nums) => {
    const stack =[]
    const maxArea=[]
    const area = height * width
    const nextSmaller = 0
    const previousSmaller = 0

    for(const i=0; i<nums.length;i++){
        // next smaller
        while(stack.length >0 && nums[stack[stack.length-1]] >nums[i]){
            const popped =stack.pop()
            nextSmaller=nums[popped]
        }
        // previous smaller
         while(stack.length >0 && nums[i]> nums[stack[stack.length-1]] ){
            stack.pop()
        }
                    // previousSmaller=nums[]

     
        // stack.push([i,nums[i]*])
    }

 
    return 0;
};

