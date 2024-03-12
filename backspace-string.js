'use strict';

// TWO Pointers
// function backspaceCompare(s, t) {
//   let sChars = s.split('');
//   let tChars = t.split('');

//   let k = processString(sChars);
//   let p = processString(tChars);

//   if (k !== p) {
//     return false;
//   }

//   for (let i = 0; i < k; i++) {
//     if (sChars[i] !== tChars[i]) {
//       return false;
//     }
//   }
//   return true

//   function processString(chars) {
//     let k = 0;
//     for (let c of chars) {
//       if (c !== '#') {
//         chars[k++] = c;
//       } else if (k > 0) {
//         k--;
//       }
//     }
//     return k;
//   }
// }

// Big O Notation
// Time - O (n + m)
// Space - O (n + m)

// TWO Pointers
function backspaceCompare(s, t) {
  return processString(s) === processString(t);

  function processString(str) {
    const stack = [];
    for (let char of str) {
      if (char !== '#') {
        stack.push(char);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
    return stack.join('');
  }
}

// Big O Notation
// Time - O (n + m)
// Space - O (n + m)
