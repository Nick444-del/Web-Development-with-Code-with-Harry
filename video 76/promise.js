console.log("This is promise");

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a > 0.5){
        reject("Your request was rejected by the server");
    }else{
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("ABC");
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a > 0.5){
        reject("Your request was rejected by the server 2");
    }else{
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("ABC 2");
        }, 3000);
    }
})

let prom3 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a > 0.5){
        reject("Your request was rejected by the server 3");
    }else{
        setTimeout(() => {
            console.log("Yes I am done 3");
            resolve("ABC 3");
        }, 3000);
    }
})

let prom4 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a > 0.5){
        reject("Your request was rejected by the server 4");
    }else{
        setTimeout(() => {
            console.log("Yes I am done 4");
            resolve("ABC 4");
        }, 3000);
    }
})


let prom5 = Promise.all([prom1, prom2, prom3, prom4])
prom3.then((a) =>{
    console.log(a);
}).catch((err) =>{
    console.log(err);
})