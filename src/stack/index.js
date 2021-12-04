class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  /**
   * Adds an element to the stack
   * @public
   * @param {any} element
   */
  push(element) {
    this.arr[this.index++] = element;
  }

  /**
   * Remove an element from the stack
   * @public
   * @returns {any}
   */
  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    else {
      const previous = this.arr[this.index - 1];
      const temp = [];

      this.index--;

      for (let i = 0; i < this.index; i++) {
        temp[i] = this.arr[i];
      }
      this.arr = temp;

      return previous;
    }
  }

  /**
   * Check if the stack is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Check the stack size.
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
   * Clear the stack
   * @public
   */
  clear() {
    this.arr = [];
    this.index = 0;
  }
}

module.exports = Stack;
