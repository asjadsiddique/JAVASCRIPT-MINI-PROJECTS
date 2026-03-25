let errors = 0;
let tileselected = ""
let numselected = "";
let attempts ="";
let remaining = "";

let board = [
    
"--74916-5",
"2---6-3-9",
"-----7-1-",
"-586----4",
"--3----9-",
"--62--187",
"9-4-7---2",
"67-83----",
"81--45---"

]

let solution = [
    
"387491625",
"241568379",
"569327418",
"758619234",
"123784596",
"496253187",
"934176852",
"675832941",
"812945763"
]


window.onload = function(){
    setGame()
}


function setGame() {
    for (let i = 1; i <=9; i++) {
        let number = document.createElement('div')
        number.id = i
        number.innerText = i
        number.classList.add('number')
        document.getElementById('digits').appendChild(number)
        number.addEventListener('click',selectedbutton)
        
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9 ; c++) {
            let tile = document.createElement('div')
            tile.id = r.toString() + "-" + c.toString()
            tile.classList.add("tile")
            document.getElementById('board').appendChild(tile) 
            tile.addEventListener('click',selecttile)
            if ([r] ==2 || [r] ==5) {
                tile.classList.add('horizontal-line')
            }
            if ([c] ==2 || [c] ==5) {
                tile.classList.add('vertical-line')
            }
            if (board[r][c] != "-") {
                 tile.innerText = board[r][c]
                 tile.classList.add('tile-color')
            }

           
            
        }
        
    }
}

function selectedbutton(e) {

    if (numselected != "") {
    numselected.classList.remove('change')
        
    }
     numselected = this
    numselected.classList.add('change')
    
    
}

function selecttile() {
    if (numselected) {
        if(this.innerText != ""){
           return
        }
       
    } 
    
        let coords = this.id.split('-')
        let r = parseInt(coords[0])
        let c = parseInt(coords[1])
       if (solution[r][c] === numselected.id) {
           this.innerText = numselected.id
           this.classList.add('color-tile')
       } else {
        errors += 1;
        document.getElementById('errors').innerText = errors;
       }
}