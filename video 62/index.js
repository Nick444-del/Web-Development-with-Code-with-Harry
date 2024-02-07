

let rand = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();

let first, second, third;

if(rand<0.33){
    first = "Crazy";
}else if(rand<0.66 && rand>=0.33){
    first = "Amazing";
}else if(rand<1 && rand>=0.66){
    first = "Fire"
}

if(rand2<0.33){
    second = "Engin";
}else if(rand2<0.66 && rand2>=0.33){
    second = "Food";
}else if(rand2<1 && rand2>=0.66){
    second = "Garments";
}

if(rand3<0.33){
    third = "Bros";
}else if(rand3<0.66 && rand3>=0.33){
    third = "Limited";
}else if(rand3<1 && rand3>=0.66){
    third = "Hub"
}

console.log("The generated nusiness name is " + first +" "+ second +" "+ third);