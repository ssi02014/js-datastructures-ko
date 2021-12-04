class Queue {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  /**
   * Adds an element to the queue
   * @public
   * @param {any} element
   */
  enqueue(element) {
    this.arr[this.index++] = element;
  }

  /**
   * Remove an element from the queue
   * @public
   * @returns {any}
   */
  dequeue() {
    if (this.isEmpty()) throw new Error("queue is empty");
    else {
      const previous = this.arr[0];
      const temp = [];

      for (let i = 1; i < this.index; i++) {
        temp[i - 1] = this.arr[i];
      }
      this.arr = temp;
      this.index--;

      return previous;
    }
  }

  /**
   * Check if the queue is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Check the queue size.
   * @public
   * @returns {number}
   */
  size() {
    return this.arr.length;
  }

  /**
   * Clear the queue
   * @public
   */
  clear() {
    this.arr = [];
    this.index = 0;
  }
}

module.exports = Queue;
