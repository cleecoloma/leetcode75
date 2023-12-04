'use strict';

function twoSum(nums, target) {
  let map = new Map();
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      results.push(map.get(target - nums[i]))
      results.push(i)
      return results;
    } else {
      map.set(nums[i], i)
    }
  }
  return results;
}