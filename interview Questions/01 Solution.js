let students = ["shubh", "anjali", "Shivani", "Annapurna", "Shubham", "Krishanendu", "Ravindranathan", "Shivesh", "kaif", "emanuel"];

let houses = [];

for (const student of students) {
    if(student.length > 6) {
        houses.push("Red");
    }else if(student.length < 8){
        houses.push("Yellow");
    }else if(student.length > 8){
        houses.push("Blue");
    }else{
        houses.push("Green");
    }
}

console.log(houses);