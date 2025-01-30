// 5. Count the Number of Vowels in a String

function countVowels(str) {
    let count = 0;
  for(let char of str){
  if(vowels.includes(char)){
  count++;
  }
  }
  return count;
  }
  console.log(countVowels("javascript"));