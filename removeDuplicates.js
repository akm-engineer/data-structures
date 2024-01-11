const sample = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8, 8, 9, 9];

function duplicateArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
}

console.log(duplicateArr(sample));

//2 pointers approach
function removeDuplicatesArrays(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesArrays(sample));
