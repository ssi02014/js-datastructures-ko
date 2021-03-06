# ๐ป js-datastructures-ko
- npm ๋ฐฐํฌ ๊ฒฝํ๊ณผ ์ฌ๋ฌ๊ฐ์ง ์๋ฃ ๊ตฌ์กฐ๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๊ตฌํํ๊ธฐ ์ํด ๋ง๋  ์ ์ฅ์์๋๋ค. ๐
- It is a repository created to implement npm deployment experience and various data structures in JavaScript. ๐

<br />

## ๐ ํจํค์ง ์ค์น(Package Installation)
```
  npm install js-datastructures-ko
  yarn add js-datastructures-ko
```

<br />

## ๐ ํจํค์ง ์ฌ์ฉ ๊ฐ์ด๋(Package Usage Guide)
### 1. ์คํ(Stack)
- ์ปดํจํฐ์ ๊ธฐ๋ณธ์ ์ธ ์๋ฃ ๊ตฌ์กฐ์ค ํ๊ฐ์ง๋ก, ์์ถ๋ ฅ ๋ฐฉ์์ `ํ์์ ์ถ(LIFO:Last In, First Out)` ๋ฐฉ์์ธ ์๋ฃ ๊ตฌ์กฐ์ด๋ค.
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

### 2. ํ(Queue)
- ์ปดํจํฐ์ ๊ธฐ๋ณธ์ ์ธ ์๋ฃ ๊ตฌ์กฐ์ค ํ๊ฐ์ง๋ก, ์์ถ๋ ฅ ๋ฐฉ์์ `์ ์์ ์ถ(FIFO:First In, First Out)` ๋ฐฉ์์ธ ์๋ฃ ๊ตฌ์กฐ์ด๋ค.
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

### 3. ์ฐ๊ฒฐ๋ฆฌ์คํธ(Linked list)
- ์๋ฃ๊ตฌ์กฐ์ ๊ฐ ๋ถ๋ถ์ธ `๋ธ๋๋ค์ด ์ฐ๊ฒฐ๋์ด ์๋ ๋ฐฉ์`์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๋ ์๋ฃ๊ตฌ์กฐ์ด๋ค.
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

### 4. ํด์ ๋งต(HashMap)
- Java์์๋ HashMap๊ณผ ์ ์ฌํ๊ฒ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๊ตฌํ
- It's implemented in JavaScript similar to HashMap in Java.
- Map ์ธํฐํ์ด์ค์ ํ ์ข๋ฅ, `key-value` ํํ๋ก ๋ฐ์ดํฐ๋ฅผ ๋ฌถ์ด entry๋ก ์ ์ฅํ๋ ํํ์ด๋ค.
- It is a type of Map interface, a form of key-value, in which data is grouped and stored as entry.
```js
  const { HashMap } = require("js-datastructures-ko");

  const hashMap = new HashMap();

  hashMap.put("hi", 1);
  hashMap.put("bye", 2);
  hashMap.put(1, 3);
  hashMap.remove("hi");

  console.log(hashMap); // HashMap { map: { '1': 3, bye: 2 } }

  console.log(hashMap.get(1)); // 3
  console.log(hashMap.containsKey("hi")); // false
  console.log(hashMap.containsValue(2)); // true
  console.log(hashMap.keys()); // [ '1', 'bye' ]
  console.log(hashMap.values()); // [ 3, 2 ]

  const clone = hashMap.clone();
  clone.put("hahaha", "hahaha");

  console.log(hashMap); // HashMap { map: { '1': 3, bye: 2 } }
  console.log(clone); // HashMap { map: { '1': 3, bye: 2, hahaha: 'hahaha' } }

  hashMap.clear();
  console.log(hashMap.isEmpty()); // true
```