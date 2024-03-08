'use strict';

function shiftString(s, shifts) {
  let arr = s.split(''); // Convert string to array for easier manipulation

  for (let i = 0; i < shifts.length; i++) {
    for (let j = 0; j < shifts[i]; j++) {
      // Check if the character is 'z' and wrap around if needed
      if (arr[j] === 'z') {
        arr[j] = 'a';
      } else if (arr[j] === 'Z') {
        // For uppercase Z to A
        arr[j] = 'A';
      } else {
        // Shift character by 1, considering wrap around from 'z' to 'a'
        let code = arr[j].charCodeAt(0);
        arr[j] = String.fromCharCode(code + 1);
      }
    }
  }

  return arr.join(''); // Convert array back to string
}

// Big O Notation
// Time -
// Space -
