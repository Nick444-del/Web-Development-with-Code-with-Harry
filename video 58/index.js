// function sum(a, b) {
//     return a + b;
// }

// result = sum(5, 10);

// console.log("The sum of the two numbers is " + result);


// const func1 = (x, y) => {
//     console.log("The sum of 2 numbers is " + x+y);
// }

// func1(5, 10);

console.log("Hello world!");

let rand = Math.random();

let box1 = document.getElementsByClassName("box1"); 
let box2 = document.getElementsByClassName("box2"); 
let box3 = document.getElementsByClassName("box3");
let box4 = document.getElementsByClassName("box4");
let box5 = document.getElementsByClassName("box5");

let box = document.getElementsByClassName("box"); 

if(rand < 0.33){
    backgroundColor = 'red';
}else if(rand < 0.66 && rand >= 0.33){
    backgroundColor = 'green';
}else if(rand < 0.99 && rand >= 0.66){
    backgroundColor = 'blue';
}

box[0].style.backgroundColor = value;