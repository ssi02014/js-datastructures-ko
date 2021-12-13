class Queue {
  constructor() {
    this.arr = [];
    this.length = 0;
  }

  /**
   * Adds an element to the queue
   * 큐에 요소를 추가
   * @public
   * @param {any} element
   */
  enqueue(element) {
    this.arr[this.length++] = element;
  }

  /**
   * Remove an element from the queue and return the removed element.
   * 큐에서 요소 제거 후 제거된 요소 반환
   * @public
   * @returns {any}
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    else {
      const previous = this.arr[0];
      const temp = [];

      for (let i = 1; i < this.length; i++) {
        temp[i - 1] = this.arr[i];
      }
      this.arr = temp;
      this.length--;

      return previous;
    }
  }

  /**
   * Check if the queue is empty
   * 큐가 비었는지 확인
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Check the queue size.
   * 큐의 크기를 확인
   * @public
   * @returns {number}
   */
  size() {
    return this.arr.length;
  }

  /**
   * Returns the top element of the queue.
   * 큐의 최상의 요소를 반환
   * @public
   * @returns {any}
   */
  top() {
    if (this.isEmpty()) return undefined;
    return this.arr[this.size() - 1];
  }

  /**
   * Returns the bottom element of the queue.
   * 큐의 맨 아래 요소를 반환
   * @public
   * @returns {any}
   */
  bottom() {
    if (this.isEmpty()) return undefined;
    return this.arr[0];
  }

  /**
   * Clear the queue
   * 큐 초기화
   * @public
   */
  clear() {
    this.arr = [];
    this.length = 0;
  }

  /**
   * Print data from Queue
   * 큐 데이터 출력
   * @public
   */
  print() {
    if (this.isEmpty()) return undefined;
    for (let i = 0; i < this.size(); i++) {
      console.log(this.arr[i]);
    }
  }
}

module.exports = Queue;
