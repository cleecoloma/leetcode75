'use strict';

function flattenArray(nestedArray) {
  let results = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flatten(element[i]);
      }
    } else {
      results.push(element);
    }
  }

  flatten(nestedArray);

  return results;
}

// Big O Notation
// Time - O(n)
// Space - O(n)
