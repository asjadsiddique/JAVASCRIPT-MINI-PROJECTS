

   let timer = 60;
   let score = 0;

    let rhit = 0;


    function startgame() {
        runTimer()
         getHit()
        makeBubble()
    }
function makeBubble() {
    
let clutter = '';
 for (let i = 0; i <= 132; i++) {

    let number = parseInt(Math.random() *10)
     clutter += `<div class="bubble">${number}</div>`
     
}


document.querySelector('#bottom-panel').innerHTML = clutter
 }



function runTimer() {
 

    let timeint =  setInterval(function(){

        if (timer > 0) {
             timer--;
        document.querySelector('#time').textContent = timer;
        } else {
            
            clearInterval(timeint)
            document.querySelector("#bottom-panel").innerHTML = `<h2>GAME OVER</h2>`
        }
       
    },1000)
}

function getHit() {
      rhit =  parseInt(Math.random() * 10)
     document.querySelector("#hitval").textContent = rhit 
   
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#bottom-panel").addEventListener("click",(e)=>{
//   console.log(e.target.textContent)
   let clickednum = Number(e.target.textContent);
   if (clickednum === rhit) {
       increaseScore();
       makeBubble();
       getHit();
   } 
})


startgame()

