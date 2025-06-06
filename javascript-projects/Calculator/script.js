const PI=3.14159;
let circum;
document.getElementById("mysubmit").onclick=function(){
    let radius=document.getElementById('rad').value;
    radius=Number(radius);
    circum=2*PI*radius;
    document.getElementById("circ").textContent=circum+" cm";
}

