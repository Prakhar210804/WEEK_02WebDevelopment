function isElementPresent(arr, num) {
    // Your code here
    for (let index = 0; index < arr.length; index++) {
        if(num== arr[index]){
            return true;
        }
        
    }
    return false;
  }
  console.log(isElementPresent([1, 2, 3, 4], 3));  // Output: true
  console.log(isElementPresent([1, 2, 3, 4], 5)); 