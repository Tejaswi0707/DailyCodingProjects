const mybutton=document.getElementById("mybutton");
const myLabel=document.getElementById("myLabel");

const min=5;
const max=10;
let randomNum;

mybutton.onclick=function(){
    randomNum=Math.floor(Math.random() * (max-min))+min;
    myLabel.textContent=randomNum;
}