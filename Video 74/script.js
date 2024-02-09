let button = document.getElementById('btn');

button.addEventListener('dblclick', ()=>{
    document.querySelector(".box").innerHTML = "<b>You clicked on Button </b> Enjoy your click.";
})

button.addEventListener('contextmenu', ()=>{
    alert("Don't do it again!");
});

button.addEventListener('keydown', (e)=>{
    console.log(e);
});

setInterval(() => {
    alert("Times up!");
}, 1000);