'use strict';

function maxProfit(prices) {
  if (prices === null || prices.length <= 1) {
    return 0;
  }
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
}