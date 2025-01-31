function findLargest(arr) {
    // Your code here
    let l = 0;
    for (let index = 0; index < arr.length; index++) {
      if(arr[index]>=l){
        l = arr[index];
      }
        
    }
    return l;
  }
  console.log(findLargest([10, 5, 8, 20])); 