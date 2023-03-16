var rand1 = Math.ceil(Math.random()*6);
var rand2 = Math.ceil(Math.random()*6);
document.getElementById("img1").src = "images/dice"+rand1+".png";
document.getElementById("img2").src = "images/dice"+rand2+".png";
if(rand1 === rand2){
    document.getElementById("title").innerHTML = "Draw😢";
}
else if(rand1>rand2){
    document.getElementById("title").innerHTML = "💸player 1 wins💸";
}
else if(rand1<rand2){
    document.getElementById("title").innerHTML = "💸player 2 wins💸";
}