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
    if (this.isEmpty()) return undefined;
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
   * Returns the top element of the stack.
   * @public
   * @returns {any}
   */
  top() {
    if (this.isEmpty()) return undefined;
    return this.arr[this.size() - 1];
  }

  /**
   * Returns the bottom element of the stack.
   * @public
   * @returns {any}
   */
  bottom() {
    if (this.isEmpty()) return undefined;
    return this.arr[0];
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
