function makebubble() {
let bub = "";

  for (let i = 0; i < 184; i++) {
    let a = Math.floor(Math.random() * 10);
    bub += ` <div class="bubble">${a}</div>`;
  }
  document.querySelector(".b-panel").innerHTML = bub;
}

let startTime = 60;
function changeTimer() {
   
    let x = setInterval(() => {
        if(startTime>0){
        startTime--;
        document.querySelector("#time").innerHTML = startTime;}
        else if(startTime==0){
            document.querySelector(".b-panel").innerHTML= "<h1>GAME OVER </h1>"
        }
        else{
            clearInterval(x);
        }
      }, 1000);
    }
let a;
function hitchange(){
     a = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").innerHTML= a;
}  

let score = 0;
function scoreinc(){
  score += 10;
  document.querySelector("#score").innerHTML= score;
}

document.querySelector(".b-panel").addEventListener("click",(deta)=>{
    let b =parseInt(deta.target.textContent);
    if (b === a){
        scoreinc();
        hitchange();
        makebubble();
    }
})


    

hitchange();
changeTimer();
makebubble();
