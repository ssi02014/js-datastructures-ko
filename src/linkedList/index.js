const Node = require("../node");

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /**
   * Insert data into the first index of the linked list
   * 연결 리스트 첫번째 인덱스에 데이터 삽입
   * @public
   * @param {any} data
   */
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.length += 1;
  }

  /**
   * Insert data at the last index of the linked list
   * 연결 리스트 마지막 인덱스에 데이터 삽입
   * @public
   * @param {any} data
   */
  insertLast(data) {
    const node = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }

  /**
   * Insert data at specific index in linked list
   * 연결 리스트 특정 인덱스에 데이터 삽입
   * @public
   * @param {any} data
   * @param {number} index
   */
  insertAt(data, index) {
    rangeCheck(index);

    if (!index) {
      const node = new Node(data, this.head);
      this.head = node;
      this.length += 1;
    }

    const node = new Node(data);
    let current = this.head;
    let count = 0;

    while (count < index) {
      count++;
      current = current.next;
    }

    node.next = current;
    this.length += 1;
  }

  /**
   * Search for data at a specific index in linked list
   * 연결 리스트 특정 인덱스의 데이터를 검색
   * @public
   * @param {number} index
   * @returns {any}
   */
  search(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    throw new Error("There is no element in that index");
  }

  /**
   * Remove the linked list specific index and return the removed element.
   * 연결 리스트 특정 인덱스를 제거 후 제거된 요소 반환
   * @public
   * @param {number} index
   * @returns {any}
   */
  removeAt(index) {
    let current = this.head;
    let count = 0;

    rangeCheck(index);

    if (!index) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        current = current.next;
      }
    }
    this.length--;
    return current.data;
  }

  /**
   * Clear linked list
   * 연결 리스트 초기화
   * @public
   */
  clear() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Print data from a linked list
   * 연결 리스트 데이터 출력
   * @public
   */
  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  /**
   * Check the range of the input index.
   * 연결 리스트 데이터 출력
   * @public
   */
  rangeCheck(index) {
    if (index > 0 && index > this.length) {
      throw new Error("Linked list range exceeded.");
    } else if (index < 0) {
      throw new Error("The index cannot be less than zero.");
    }
    return true;
  }
}

module.exports = LinkedList;
