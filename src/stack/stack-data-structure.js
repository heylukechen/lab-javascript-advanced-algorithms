class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else if (this.stackControl.length >= this.MAX_SIZE) return false;
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error("STACK_OVERFLOW");
    }
  }

  pop() {
    if (this.isEmpty() === false) {
      let popItem = this.stackControl.pop();
      return popItem;
    } else if (this.isEmpty() === true) {
      throw new Error("STACK_UNDERFLOW");
    }
  }

  display() {
    return this.stackControl;
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
