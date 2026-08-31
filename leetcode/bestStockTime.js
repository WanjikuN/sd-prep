// Problem

// You are given an array prices where:

// prices[i]

// is the price of a stock on day i.

// Choose one day to buy and a different day in the future to sell.

// Return the maximum profit you can achieve.

// If you cannot make a profit, return 0.

// Example 1
// Input:
// [7,1,5,3,6,4]

// Output:
// 5

// Buy at:

// 1

// Sell at:

// 6

// Profit:

// 6 - 1 = 5
// Time-O(n)
// space-O(1)
const stockPrices = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(prices[i] - minPrice, maxProfit);
        }
    }
    return maxProfit
};
console.log(stockPrices([7,1,5,3,6,4]))