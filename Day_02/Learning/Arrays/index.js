let arr = [1,2,3,4,5,6]
console.log(arr)
console.log(arr.length)

arr[1]  = 34;

console.log(arr);

console.log(arr.toString())
console.log(arr.join("~"))
// console.log(arr.pop())
console.log(arr.push(100))
console.log(arr)
console.log(arr.shift())
console.log(arr.unshift(33))
console.log(arr)
console.log(delete arr[4])
console.log(arr)

// looping

let a = [1,2,3,4,5,6]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}


a.forEach((value, index,a)=>{
       console.log(value,index,a)
})



for (const element of a) {
    console.log(element)
}



let newArr = a.map((e)=>{
    return e**2
})
console.log(newArr)



const greaterThanSeven = (e)=>{
    if(e>7){
        return true 
    }
    return false
} 

console.log(newArr.filter(greaterThanSeven))


const red = (a,b)=>{
    return a+b
}

console.log(newArr.reduce(red))

Array.from("harry")