const sample = [1, 2, 3, 4, 5];
const sample2 = [1, 2, 3, 4, 5];

function rotateArray(arr, k) {
  let arrayLength = arr.length;

  if (arrayLength < k) {
    k = k % arrayLength;
  }

  let rotated = arr.splice(arrayLength - k, k);
  arr.unshift(...rotated);
  return arr;
}
console.log(rotateArray(sample, 2));

//Time:-O(n)

function optimisedArray(nums, k) {
  let size = nums.length;
  if (size < k) {
    k = k % size;
  }
  reverseArr(nums, 0, nums.length - 1);
  reverseArr(nums, 0, k - 1);
  reverseArr(nums, k, nums.length - 1);

  return nums;
}
function reverseArr(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(optimisedArray(sample2, 2));
