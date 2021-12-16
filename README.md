# 💻 js-datastructures-ko
- npm 배포 경험과 여러가지 자료 구조를 자바스크립트로 구현하기 위해 만든 저장소입니다. 😋
- It is a repository created to implement npm deployment experience and various data structures in JavaScript. 😋

<br />

## 📁 패키지 설치(Package Installation)
```
  npm install js-datastructures-ko
  yarn add js-datastructures-ko
```

<br />

## 📄 패키지 사용 가이드(Package Usage Guide)
### 1. 스택(Stack)
- 컴퓨터의 기본적인 자료 구조중 한가지로, 입출력 방식은 `후입선출(LIFO:Last In, First Out)` 방식인 자료 구조이다.
- It is one of the basic data structures of computers, and the input/output method is a `Last in, First Out (FIFO)` method.
```js
  const { Stack } = requires('js-datastructures-ko');

  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log(stack.pop()); // 4
  console.log(stack); // Stack { arr: [ 1, 2, 3 ], length: 3 }
  console.log(stack.top()); // 3
  console.log(stack.bottom()); // 1

  stack.print() // 1 2 3
```

<br />

### 2. 큐(Queue)
- 컴퓨터의 기본적인 자료 구조중 한가지로, 입출력 방식은 `선입선출(FIFO:First In, First Out)` 방식인 자료 구조이다.
- It is one of the basic data structures of computers, and the input/output method is a `First in, First Out (FIFO)` method.
```js
  const { Queue } = require("js-datastructures-ko");

  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.dequeue()); // 1
  console.log(queue); // Queue { arr: [ 2, 3, 4 ], length: 3 }
  console.log(queue.top()); // 4
  console.log(queue.bottom()); // 2

  queue.print() // 2 3 4
```

<br />

### 3. 연결리스트(Linked list)
- 자료구조의 각 부분인 `노드들이 연결되어 있는 방식`으로 데이터를 저장하는 자료구조이다.
- It is a data structure that stores data in a way that nodes, which are each part of the data structure, are connected.
```js
  const { LinkedList } = require("js-datastructures-ko");

  const linkedList = new LinkedList();

  linkedList.prepend(1);
  linkedList.append(2);
  linkedList.append(4);
  linkedList.insertAt(3, 2);

  /*
    LinkedList {
      length: 4,
      head: Node { data: 1, next: Node { data: 2, next: [Node] } }
    }
  */
  console.log(linkedList);
  console.log(linkedList.search(2)); // 3
  linkedList.removeAt(0);

  linkedList.print(); // 2 3 4
```

<br />