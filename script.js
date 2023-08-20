var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}
function getNewHit() {
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
}
function makeBubble() {
    var clutter = "";

for(var i=1; i<=126; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function rumTimer() {
    var timerint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1 id ="endg" >Game Over</h1>`;
           
        }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();       
        getNewHit();
        makeBubble();
    }
})
makeBubble();
rumTimer();
getNewHit();
