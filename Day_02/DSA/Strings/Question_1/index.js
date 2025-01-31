// Find the Length of a String

function stringLength(str) {
    // Your code here
  let count = 0;
  for(const char of str){
    count++;
  }
  return count;
  }
  
   console.log(stringLength("hello"));  // Output: 5
  
  