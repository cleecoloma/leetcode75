'use strict';

// MAP
// function singleNumber(nums) {
//   const map = {};
//   for (let n of nums) {
//     if (map[n] == null) {
//       map[n] = 0;
//     }
//     map[n]++;
//   }

//   for (let n in map) {
//     if (map[n] === 1) return Number(n);
//   }
// }

// Big O Notation
// Time - O(n)
// Space - O(n)

// XOR
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }

  return result;
}

// Big O Notation
// Time - O(n)
// Space - O(1)
