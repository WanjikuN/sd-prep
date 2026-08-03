## Binary Search
#### Binary Search Fundamentals
 
    ```

    Sorted array
    [2, 5, 8, 12, 16, 23, 38, 56, 72]
    Find 23

    Method 1 - Linear Search
    Start from the beginning 2->5->8->12->16->23 O(n)

    Method 2 - Binary Search
    Can I eliminate half of the remaining search space
    start n/2 -> 16
    compare 23 > 16
    search 23,38,56,72
    middle 38
    compare 23<38
    search 23
    Found

    ```
#### The biggest Requirement - ordered
- Sorted array
- Sorted list
- Monotonic function
- Answer space that behaves monotonically

#### Why is it O(log n)?
- Every step halves the remaining work, which is why the complexity is : `O(log n)`
#### Binary Search Asks
- Suppose: 
    ```
    nums[mid] = 16
    target = 23

    ```
- There are only three possibilities:
    1.  `target == nums[mid]` Found
    2. `target < nums[mid]` Search the left half
    3. `target > nums[middle]` Search the right half

```

let left = 0;
left right = nums.length - 1
while(left <= right ){
    const mid = Math.floor((left+right/2));
    if(nums[mid] == target){
        return mid
    }else if(target < nums[mid])
    {
        right = mid - 1
    }else{
        left =mid +1
    }

}
return -1;
```
- Every iteration must strictly reduce the search space.
