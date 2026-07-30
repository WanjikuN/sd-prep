// Monootonic stack
// Stock span
// Problem
// Design a data structure that collects the daily stock price and returns the span of the stock's price for the current day.

// The span of today's price is the number of consecutive days (including today) for which the stock price has been less than or equal to today's price.
// Implement the StockSpanner class:

// next(price) — Records today's stock price and returns its span.

input = [100, 80, 60, 70, 60, 75, 85];
output = [1, 1, 1, 2, 1, 4, 6];
const stockSpanFn = () => {
    const stack = [];

    const next = (price) => {
        let span = 1;

        while (stack.length > 0 && stack[stack.length - 1][0] <= price) {
            const [, poppedSpan] = stack.pop();
            span += poppedSpan;
        }

        stack.push([price, span]);
        return span;
    };

    return { next };
};
const stock = stockSpanFn();
console.log(stock.next(100));
console.log(stock.next(80));
// console.log(stock.next(60));
// console.log(stock.next(70));
// console.log(stock.next(60));
// console.log(stock.next(75));
// console.log(stock.next(85));
