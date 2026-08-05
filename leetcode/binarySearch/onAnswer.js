// Binary Search on answer- search for the smallest possible answer that satisfies a condition.
// Koko Eating Bananas
// Problem
// Koko loves bananas.
// There are n piles of bananas.
// The ith pile has: piles[i] bananas.

// Koko can decide on one eating speed: k bananas per hour

// Every hour:
// She chooses one pile.
// She eats up to k bananas from that pile.
// If the pile has fewer than k, she finishes it and waits until the next hour.
// Given: piles and h
// Return the minimum eating speed so that she can finish all the bananas within h hours.
// Time Complexity -> O(n × log(maxPile))
// Space Complexity->O(1)
// Input -> piles =[3,6,7,11] h = 8
// Output -> 4

const canFinish = (piles, speed, h) => {
    let hrs = 0;
    for (const pile of piles) {
        hrs += Math.ceil(pile / speed);
    }
    return hrs <= h;
};
const minEatingSpeed = (piles, h) => {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canFinish(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
console.log(minEatingSpeed([3,6,7,11],8))