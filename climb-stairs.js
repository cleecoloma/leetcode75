'use strict';

function climbStairs(n) {
  if (n < 2) {
    return n;
  }

  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }

  return thirdStep;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
