'use strict';

// SORT way
// function validAnagram(strs) {
//   const map = new Map();

//   for (const str of strs) {
//     const sortedString = str.split("").sort().join("");

//     if (!map.has(sortedString)) {
//       map.set(sortedString,[]);
//     }

//     map.get(sortedString).push(str);
//   }

//   return Array.from(map.values())
// }

// Big O Notation
// Time - O(n log(n))
// Space - O(n)

// Non SORT way
function validAnagram(strs) {
  const map = new Map();

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[index]++;
    }

    const key = count.join('#');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}

// Big O Notation
// Time - O(n)
// Space - O(n)
