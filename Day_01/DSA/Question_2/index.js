// 2. Find the Largest of Three Numbers

function findMax(a, b, c) {
    // Your code here
      if(a > b && a > c){
        return a;
  }
  else if(b > a && b>c){
    return b;
  }
  else {
   return c;
  } 
}  
console.log(findMax(10, 25, 15));