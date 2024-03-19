'use strict';

function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }

  return expectedSum-actualSum;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
