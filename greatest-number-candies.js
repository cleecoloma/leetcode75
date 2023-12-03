'use strict';

function kidsWithCandies(candies, extraCandies) {
  const results = [];
  let maxValue = 0;
  for (const value of candies) {
    value > maxValue && ( maxValue = value )
  }
  for (let i = 0; i < candies.length; i++) {
    results.push(candies[i] + extraCandies >= maxValue)
  }
  return results;
};

/* 
Big O Notation
Time - O(2n) -> O(n)
Space - O(n)
*/