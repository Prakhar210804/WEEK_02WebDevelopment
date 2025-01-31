function countVowels(str) {
    let count = 0;
  for(let i = 0; i<=str.length;i++){
    let a = str.charAt(i);
    if(a=='a' || a=='i' || a=='e'|| a=="o" || a=='u'){
        count++;

    }

  }
  return count;
}
  console.log(countVowels("javascript"));