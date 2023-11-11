var score=0;
var timer=60;
var hitrn=0;


function makebubble(){
    var clutter = '';

for(var i=1;i<=168;i++){
    let rdm = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rdm}</div>`;    /* 1 clutteer means 1 pura bubble */
  
}
document.querySelector("#pbtm").innerHTML=clutter;
}


function runtimer(){
    let timerint = setInterval(function (){
    
        if(timer>0){
            timer--;
            document.querySelector("#timer").innerText=timer;
            // console.log(timer);
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over<br>Your Score is:${score}</h1>`;
        }
    
    },1000);

}

function increasescore(){
score +=10;
document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent= hitrn;
}

 document.querySelector("#pbtm").addEventListener("click",function(detail){
    var clickedbtn = Number(detail.target.textContent);
    if(hitrn === clickedbtn){
        increasescore();
        getNewHit();
        makebubble();
    }
   
    

});

runtimer();
makebubble();
getNewHit();



