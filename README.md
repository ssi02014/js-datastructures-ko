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
```js
  const { Stack } = requires('js-datastructures-ko');

  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.pop();
  console.log(stack.pop()); // 3
  console.log(stack); // Stack { arr: [ 1, 2 ], index: 2 }
  console.log(stack.top()); // 2
  console.log(stack.bottom()); // 1
```

<br />

### 2. 큐(Queue)
```js
  const { Queue } = require("js-datastructures-ko");

  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue); // Queue { arr: [ 1, 2, 3 ], index: 3 }
  console.log(queue.dequeue()); // 1
  console.log(queue); // Queue { arr: [ 2, 3 ], index: 2 }
  console.log(queue.top()); // 3
  console.log(queue.bottom()); // 2
```

<br />