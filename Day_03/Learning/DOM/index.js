console.log("hello world")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "red"



document.getElementById("b").style.backgroundColor = "yellow"



document.querySelector(".box").style.backgroundColor= "green"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})

e = document.getElementsByTagName("div")

e[4].matches("#b")