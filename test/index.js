const { Stack } = require("simple-datastructures-js");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();
console.log(stack);

stack.clear();
console.log(stack);
