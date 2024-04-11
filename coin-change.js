'use strict';

function coinChange(coins, amount) {
  const dp = new Array(amount + 1). fill(amount + 1);
  dp[0] = 0;

  for (let amt = 1; amt <= amount; amt++) {
    for (let coin of coins) {
      if (coin <= amt) {
        dp[amt] = Math.min(dp[amt], 1 + dp[amt - coin]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

// Big O Notation
// Time - 
// Space - 
