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