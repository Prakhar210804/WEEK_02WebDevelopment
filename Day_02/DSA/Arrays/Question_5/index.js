function reverseArray(arr) {
    // Your code here
    let a = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i]);
    }
    return a;
  }
  console.log(reverseArray([1, 2, 3, 4]));