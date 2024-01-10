const Stack = require("./Stack");

let string1 = "(())";
let string2 = "(()))";
let string3 = ")(";
let string4 = "((())";

function balancedParathesis(str) {
  let stack = new Stack();
  for (let ch of str) {
    if (ch == "(") {
      stack.push(ch);
    } else {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}
console.log(string1, balancedParathesis(string1));
console.log(string2, balancedParathesis(string2));
console.log(string3, balancedParathesis(string3));
console.log(string4, balancedParathesis(string4));

//Time complexity is linear as we r going over evry ch
// Time-O(n)
// Space-O(n)
/*
The function iterates through each character of the input string.
If the character is an opening parenthesis (, it is pushed onto the stack.
If the character is a closing parenthesis ), it checks if the stack is empty. If it is, then there is no corresponding opening parenthesis, and the function returns false. Otherwise, it pops an opening parenthesis from the stack, indicating a matched pair.
After iterating through the entire string, the function checks if the stack is empty. If it is, all parentheses are balanced, and the function returns true; otherwise, it returns false.
*/
