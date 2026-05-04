const board = document.querySelector(".board")
const startButton = document.querySelector(".start-btn")
const restartBtn = document.querySelector(".restart-btn")
const startGame = document.querySelector(".start-game")
const endGame = document.querySelector(".end-game")
const modal = document.querySelector(".modal")
const scoreElement = document.querySelector(".score")
const HighscoreElement = document.querySelector(".high-score")
const TimeElement = document.querySelector(".time")

let score = 0;
let Highscore = localStorage.getItem("highscore") || 0
let time = `00-00`


HighscoreElement.innerHTML = Highscore
const blockheight = 50;
const blockwidth = 50;

const rows = Math.floor(board.clientHeight / blockheight)
const cols = Math.floor(board.clientWidth / blockwidth)

const blocks = []

let timeintervalId = null;
let intervalId = null;
let snake = [{
    x:1,
    y:4
}
]

let food = {x:Math.floor(Math.random () * rows) ,y: Math.floor(Math.random () * cols) }
 
let direction = "right";


for (let row = 0; row < rows;row++) {
    for (let col = 0; col < cols;col++) {
      const block = document.createElement("div")
      block.classList.add("block")
      board.appendChild(block)
    //    block.innerHTML = `${row}-${col}`
      blocks[`${row}-${col}`] = block
        
    }
    
}

function render() {
    

  let head = null;
  
    blocks[`${food.x}-${food.y}`].classList.add("food")

    if (direction === "right") {
        head = {x:snake[0].x,y:snake[0].y + 1}
    } else if(direction === "left"){
        head = {x:snake[0].x,y:snake[0].y - 1}
               
    } else if(direction === "up"){
        head = {x:snake[0].x - 1,y:snake[0].y }
             
    } else if(direction === "down"){
        head = {x:snake[0].x + 1,y:snake[0].y }
            
    } 
 

     

    //   Wall collision 
      if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    
        modal.style.display = "flex";
          startGame.style.display = "none"
          endGame.style.display = "flex"
        clearInterval(intervalId)
        return;
    }


       if (head.x == food.x && head.y == food.y) {
        
        blocks[`${food.x}-${food.y}`].classList.remove("food")
        food = {x:Math.floor(Math.random () * rows) ,y: Math.floor(Math.random () * cols) }
        blocks[`${food.x}-${food.y}`].classList.add("food")
        snake.unshift(head)
        score += 10;
        scoreElement.innerHTML = score

        if (score > Highscore) {
            Highscore = score
            localStorage.setItem("highscore",Highscore.toString())
        } 
    }

      
        snake.forEach(element =>{
        blocks[`${element.x}-${element.y}`].classList.remove("fill")
    })
   

    snake.unshift(head)
    snake.pop()

    snake.forEach(element =>{
        blocks[`${element.x}-${element.y}`].classList.add("fill")
    })

     
   
}


function restartGame() {
    modal.style.display = "none"
     blocks[`${food.x}-${food.y}`].classList.remove("food")
     
        snake.forEach(element =>{
        blocks[`${element.x}-${element.y}`].classList.remove("fill")
    })
    score = 0;
    time = `00-00`
    scoreElement.innerHTML = score
    HighscoreElement.innerHTML = Highscore
    TimeElement.innerHTML = time
     snake = [{
    x:1,
    y:4
}
]

food = {x:Math.floor(Math.random () * rows) ,y: Math.floor(Math.random () * cols) }

  intervalId = setInterval(() => {
    render()
  
    
}, 300);
direction = "down"

}


timeintervalId = setInterval(() => {
    let [min,sec] = time.split("-").map(Number)
     if (sec == 59) {
        min += 1
        sec = 0
     } else{
        sec += 1
     }
     time = `${min}-${sec}`
     TimeElement.innerHTML = time

}, 1000);


addEventListener('keydown',(event)=>{

    if (event.key == "ArrowUp") {
        direction = "up";
    } else if (event.key == "ArrowDown") {
        direction = "down";
    } else if (event.key == "ArrowLeft"){
        direction = "left";
    } else if(event.key == "ArrowRight"){
        direction = "right"
    }
})




startButton.addEventListener('click',()=>{
    modal.style.display = "none"
 intervalId = setInterval(() => {
    render()
  
    
}, 300);

})

restartBtn.addEventListener("click",restartGame)