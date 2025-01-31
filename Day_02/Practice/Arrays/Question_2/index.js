function sumArray(arr) {
    // Your code here
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
          sum+= arr[index];
        
    }
   return sum;
  }
  console.log(sumArray([1, 2, 3, 4])); 