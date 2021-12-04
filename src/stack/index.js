/**
 * @copyright 2021 JeonMinJae <ssi02014@naver.com>
 *
 * @class
 */

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
   * @returns {array}
   */
  pop() {
    if (this.isEmpty()) new Error("Stack is empty");
    else {
      --this.index;

      const temp = [];
      for (let i = 0; i < this.index; i++) {
        temp[i] = this.arr[i];
      }
      this.arr = temp;
    }
    return this.arr[this.index];
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
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.arr[this.size() - 1];
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
