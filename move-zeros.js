'use strict';

function moveZeroes(nums) {
  let index = 0; 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
