const display = document.getElementById('display')


const buttons = document.querySelectorAll('#keys button')

buttons.forEach(num=>{
    num.addEventListener('click', function(e){
        const value = num.textContent;
        if (value === 'C') {
            clearDisplay();
        } else if(value === '=') {
           Calculate();
        } else {
            appendtoDisplay(value);
        }

    })
})


function appendtoDisplay(input) {
    display.value  += input;
}


function clearDisplay() {
    display.value = "";
}

function Calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = `Error`
        
    }
}