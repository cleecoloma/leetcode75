'use strict';

function majorityElement(nums) {
  let element = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      element = num;
    }
    count += (num === element) ? 1 : -1;
  }

  return element;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
