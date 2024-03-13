'use strict';

function topKFrequent(nums, k) {
  const map = new Map();
  const array = [];
  const results = [];

  // Count the frequency of each number
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Transform the map into an array of [number, frequency] pairs
  for (let [key, value] of map) {
    array.push([key, value]);
  }

  // Sort the array based on frequency in descending order
  let sortedArray = array.sort((a, b) => b[1] - a[1]);

  // Collect the top k elements
  for (let i = 0; i < k; i++) {
    results.push(sortedArray[i][0]); // Only push the element, not the frequency
  }

  return results;
}

// Big O Notation
// Time - O(n log (n))
// Space - O(n)
