class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length >= this.MAX_SIZE) {
      return false;
    } else if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
    // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    if (this.isEmpty === false) {
      let shiftItem = this.queueControl.shift();
      return this.shiftItem;
    } else {
      throw new Error("QUEUE_UNDERFLOW");
    }
    // ... your code goes here
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
