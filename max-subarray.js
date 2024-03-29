'use strict';

function maxSubArray(nums) {
  let max = nums[0];
  let current = Math.max(max, 0);

  for (let i = 1; i < nums.length; i++) {
    current += nums[i];
    max = Math.max(max, current);
    current = Math.max(current, 0);
  }

  return max;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
