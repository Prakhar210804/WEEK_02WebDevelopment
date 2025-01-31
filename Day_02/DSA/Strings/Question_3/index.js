function reverseString(str) {
    // Your code here
  let r = "";
  for(let i =str.length -1; i>=0;i--){
   r = r + str[i];
  }
  return r;
}
  
  console.log(reverseString("hello"));