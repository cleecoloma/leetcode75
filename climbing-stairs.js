'use strict';

//RECURSIVE WAY
function climbingStairs(n) {
  return n <= 3 ? n : climbingStairs(n - 1) + climbingStairs(n - 2)
}

// Big O Notation
// Time - O(2^n)
// Space - O(n)

//ITERATIVE WAY
function climbingStairs(n) {
  if (n <= 3) {
    return n;
  }
  let firstStep = 2;
  let secondStep = 3;
  let thirdStep = 0;

  for (let i = 4; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep
  }
  return thirdStep
}

// Big O Notation
// Time - O(n)
// Space - O(1)
