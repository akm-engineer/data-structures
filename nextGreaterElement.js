const Stack = require("./Stack");

let nums1 = [2, 1, 3, 4, 5];

function nextGreaterElements(nums) {
  let greater = new Array(nums.length);
  let monoStack = new Stack();
  for (let i = nums.length - 1; i >= 0; i--) {
    while (!monoStack.isEmpty() && monoStack.top() <= nums[i]) {
      monoStack.pop();
    }
    if (monoStack.isEmpty()) {
      greater[i] = -1;
    } else {
      greater[i] = monoStack.top();
    }
    monoStack.push(nums[i]);
  }
  return greater;
}

console.log(nums1, nextGreaterElements(nums1));
