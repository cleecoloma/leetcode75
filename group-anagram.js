'use strict';

function validAnagram(strs) {
  const map = new Map();

  for (const str of strs) {
    const sortedString = str.split("").sort().join("");

    if (!map.has(sortedString)) {
      map.set(sortedString,[]);
    }

    map.get(sortedString).push(str);
  }

  return Array.from(map.values())
}

// Big O Notation
// Time - O(n)
// Space - O(n)
