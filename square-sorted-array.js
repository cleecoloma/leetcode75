'use strict';

function sortedSquares(nums) {
  const results = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let position = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      results[position] = leftSquare;
      left++;
    } else {
      results[position] = rightSquare;
      right--;
    }
    position--;
  }

  return results;
}

// Big O Notation
// Time -
// Space -
