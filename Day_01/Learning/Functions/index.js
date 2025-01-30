console.log("Function in javaScript")


function nice(name){
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are tshirt is good")
    console.log("Hey " + name + " you are course is also good ")

}

nice("rohan")
nice("kajal")


// console.log("Hey Harry you are nice!")
// console.log("Hey Harry you are good!")
// console.log("Hey Harry your course is good too!")

function sum(a,b){
    return a+b
}

function sum2(a,b,c=3){
    return a+b
}

result  = sum(3,5);

console.log("this is sum of these numbers " + result)

const funct1 =(x)=>{
 console.log("Iam an aarrow function",x)
}

funct1(34)
funct1(45)
funct1(26)