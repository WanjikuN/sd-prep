// weights = [1,2,3,4,5,6,7,8,9,10]
// days = 5
// Output = 15
// A ship has a fixed capacity.
// Each day, packages must be shipped in order. You cannot reorder them.
// Return the minimum capacity that allows all packages to be shipped within days.

// left =Math.max(...weights)
// right - weights.reduce((acc,curr)=>acc+curr,0)
// Overall → O(n log(sum(weights)))
// Space → O(1)
const canShip = (weights, capacity, days) => {
    let currentWeight = 0;
    let currentDays = 1;
    for (const weight of weights) {
        if (currentWeight + weight > capacity) {
            currentDays++;
            currentWeight = weight;
        } else {
            currentWeight += weight;
        }
    }
    return currentDays <= days;
};

const shipWithinDays = (weights, days) => {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, curr) => acc + curr, 0);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canShip(weights, mid, days)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));
// 15

console.log(shipWithinDays([3,2,2,4,1,4], 3));
// 6

console.log(shipWithinDays([1,2,3,1,1], 4));
// 3

console.log(shipWithinDays([10], 1));
// 10

console.log(shipWithinDays([7,2,5,10,8], 2));
// 18