'use strict';

function addBinary(a,b) {
  // Convert binary strings to BigIntegers for accurate large integer arithmetic
  const num1 = BigInt('0b' + a);
  const num2 = BigInt('0b' + b);

  // Add the numbers and convert the sum back to a binary string
  const sum = num1 + num2;
  return sum.toString(2);
}

// Big O Notation
// Time - 
// Space - 
