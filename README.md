# 💻 js-datastructures-ko
- npm 배포 경험 겸 자료구조들을 자바스크립트로 구현한 저장소입니다.

<br />

## 📃 패키지 설치
```
  npm install js-datastructures-ko
  yarn add js-datastructures-ko
```

<br />

## 📁 패키지 사용 가이드
### 1. 스택(Stack)
```js
  const { Stack } = requires('js-datastructures-ko');

  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  console.log(stack.pop()); // 2
  console.log(stack); // Stack { arr: [ 1 ], index: 1 }
```

<br />

### 2. 큐(Queue)
```js
  const { Queue } = require("js-datastructures-ko");

  const queue = new Queue();

  queue.enqueue("hi");
  queue.enqueue("bye");
  queue.enqueue("minjae");

  console.log(queue); // Queue { arr: [ 'hi', 'bye', 'minjae' ], index: 3 }
  console.log(queue.dequeue()); // hi
  console.log(queue); // Queue { arr: [ 'bye', 'minjae' ], index: 2 }
```

<br />