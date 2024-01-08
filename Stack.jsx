class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length == 0) return "underflow";
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  top() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items[this.items.length - 1];
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

let stack = new Stack();
console.log(("The stack is empty?", stack.isEmpty()));
stack.push(45);
stack.push(41);
stack.push(12);
stack.pop();
stack.printStack();
console.log("Ths top element is ", stack.top());
console.log("This stack is empty ", stack.isEmpty());
