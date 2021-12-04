# 💻 js-datastructures-ko
- 취업 준비를 하면서 npm 배포 경험 겸 필요한 자료구조들을 자바스크립트로 구현한 저장소입니다.

## 📃 패키지 설치
```
  npm install js-datastructures-ko
  yarn add js-datastructures-ko
```

<br />

## 📁 자료구조
### 1. Stack
```js
  const { Stack } = requires('js-datastructures-ko');

  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack); // Stack { arr: [ 1, 2, 3 ], index: 3 }
```

<br />