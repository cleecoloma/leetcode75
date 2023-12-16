'use strict';

function myQueue() {
  this.stack1 = [];
  this.stack2 = [];
  this.front = null;
}

myQueue.prototype.push = function(x) {
  if (this.stack1.length == 0) {
    this.front = x;
  }
  this.stack1.push(x)
}

myQueue.prototype.pop = function() {
  if (this.stack2.length == 0) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
}

myQueue.prototype.peek = function() {
  return this.stack2.length == 0 ? this.front : this.stack2[this.stack2.length - 1];
}

myQueue.prototype.empty = function() {
  return this.stack1.length == 0 && this.stack2.length == 0;
}

//Big O notation
/* 
push operation:
Time Complexity: O(1)
Space Complexity: O(1)

pop operation:
Time Complexity: Amortized O(1)
Space Complexity: O(n)
The pop operation may require moving all elements from stack1 to stack2 once. However, this is an amortized analysis. In the worst case, where pop is called just after a series of push operations, it can be O(n), but over a sequence of operations, it averages out to O(1) per pop operation.

peek operation:
Time Complexity: O(1)
Space Complexity: O(1)

empty operation:
Time Complexity: O(1)
Space Complexity: O(1)
*/