let random = Math.random();
let a = prompt("Enter the value of a")
let b = prompt("Enter the value of b")
let c = prompt("Enter a operator")

let obj ={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}