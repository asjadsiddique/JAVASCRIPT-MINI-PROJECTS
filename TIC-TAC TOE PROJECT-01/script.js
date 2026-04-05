const boxes = document.querySelectorAll('.box')

const playtext = document.querySelector("#playtext")
const restart = document.querySelector('#restartBtn')
console.log(boxes);
let spaces = [];
const O_Text = "O";
const X_Text = "X";
let currentPlayer = O_Text;
const drawboard = () =>{
boxes.forEach((box,index)=>{
    let styleString = "";
    if (index < 3) {
        styleString += "border-bottom: 3px solid #203138;";
    }
    if (index %3 === 0) {
        styleString += "border-right: 3px solid #203138;";
    }
    if (index %3 === 2) {
        styleString += "border-left: 3px solid #203138;";
    }
    if (index > 5) {
        styleString += "border-top: 3px solid #203138;";
    }

    box.style = styleString;
    const buttonclicked = (e)=>{
    const id = e.target.id
    // console.log(id);
    if (!spaces[id]) {
           
       spaces[id] = currentPlayer;
        e.target.innerHTML= currentPlayer;
        if (PlayerhasWon()) {
            playtext.innerHTML = `${currentPlayer} has won`
            restart();
            return;
        }
        currentPlayer = currentPlayer === O_Text ? X_Text : O_Text;
    }
     
}
      box.addEventListener('click',buttonclicked)
  
})

}
drawboard()


const PlayerhasWon = () =>{

    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
        
         return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
        
         return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
        
         return true;
         
        }
    }
    if (spaces[2] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[0] === currentPlayer) {
        
         return true;
        }
        if (spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
        
         return true;
        }
        if (spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
        
         return true;
         
        }
    }
    if (spaces[6] === currentPlayer) {
        if (spaces[3] === currentPlayer && spaces[0] === currentPlayer) {
        
         return true;
        }
        if (spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
        
         return true;
        }
        if (spaces[4] === currentPlayer && spaces[2] === currentPlayer) {
        
         return true;
         
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[5] === currentPlayer && spaces[2] === currentPlayer) {
         
         return true;
         
        }
        if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
      
         return true;

        }
       
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
        
         return true;

        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
    
         return true;
         
        }
       
    } 

}


restart.addEventListener('click',(e) => {

    spaces.forEach((space,index)=>{
       spaces[index] = null;
    })
    boxes.forEach((box)=>{
        box.innerText = '';
    })
    playtext.innerHTML = `Let's Play!`
    currentPlayer = O_Text;
})


//  LOGIC //

// We make grid-box by using Loop on boxes,
// 1-Check weather spaces is empty or not,
// 2-If emply player can click otherwise not,
// 3-store that to index of array,
// 4-Change Players Turn,
// Check win conditions by using spaces[] 
// 



