const numArr = [5, 10, 10, 34, 343];

function secondLarget(arr) {
  const uniqueArray = Array.from(new Set(arr)); //O(n)

  uniqueArray.sort((a, b) => {
    //O(nlogn)
    return b - a;
  });
  if (uniqueArray.length >= 2) {
    return uniqueArray[1];
  } else {
    return -1;
  }
}
console.log(secondLarget(numArr));
//Time : - O(nlogn)

function optimizedLargets(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(optimizedLargets(numArr));
//Time:-O(n)
//Space:-O(1)
