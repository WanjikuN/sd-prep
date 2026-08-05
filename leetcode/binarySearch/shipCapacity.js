// weights = [1,2,3,4,5,6,7,8,9,10]
const canShip = (weights, capacity, days) => {
    // O(n)
    let currentWeight = 0;
    let daysUsed = 1;
    for (const weight of weights) {
        if (currentWeight + weight > capacity) {
            daysUsed++;
            currentWeight = weight;
        } else {
            currentWeight += weight;
        }
    }
    return daysUsed <= days;
};
const shipWithinDays = (weights, days) => {
    // O(log(sum(weights)))
    let left = Math.max(...weights);
    let right = weights.reduce((sum, curr) => curr + sum, 0);
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
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
