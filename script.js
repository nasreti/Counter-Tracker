
const negative = document.getElementById("button2");
const rest = document.getElementById("reset");
const add = document.getElementById("button1");
const countLabel = document.getElementById("counter");
let count = 0;


add.onclick = function(){
    count++;
    countLabel.textContent = count;
}

negative.onclick = function(){
    count--;
    countLabel.textContent = count;
}

rest.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}