'use strict';

function containsDuplicate(nums) {
  const mapper = {};
  for (let num of nums) {
    if (mapper[num]) {
      return true;
    } else {
      mapper[num] = 1;
    }
  }
  return false;
}

// Big O Notation
// Time -
// Space -
