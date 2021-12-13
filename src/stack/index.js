class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }

  /**
   * Add an element to the stack
   * 스택에 요소를 추가
   * @public
   * @param {any} element
   */
  push(element) {
    this.arr[this.length++] = element;
  }

  /**
   * Remove an element from the stack and return the removed element.
   * 스택에서 요소 제거 후 제거된 요소 반환
   * @public
   * @returns {any}
   */
  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    else {
      const previous = this.arr[--this.length];
      const temp = [];

      for (let i = 0; i < this.length; i++) {
        temp[i] = this.arr[i];
      }
      this.arr = temp;

      return previous;
    }
  }

  /**
   * Check if the stack is empty
   * 스택이 비었는지 확인
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Check the stack size.
   * 스택의 크기를 확인
   * @public
   * @returns {number}
   */
  size() {
    return this.arr.length;
  }

  /**
   * Returns the top element of the stack.
   * 스택의 최상의 요소를 반환
   * @public
   * @returns {any}
   */
  top() {
    if (this.isEmpty()) return undefined;
    return this.arr[this.size() - 1];
  }

  /**
   * Returns the bottom element of the stack.
   * 스택의 맨 아래 요소를 반환
   * @public
   * @returns {any}
   */
  bottom() {
    if (this.isEmpty()) return undefined;
    return this.arr[0];
  }

  /**
   * Clear the stack
   * 스택 초기화
   * @public
   */
  clear() {
    this.arr = [];
    this.length = 0;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();

console.log(stack);

module.exports = Stack;
