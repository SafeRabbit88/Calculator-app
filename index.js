const display = document.getElementById("display");
let memoryValues = [];
let preventDisplay = false;

function appendToDisplay(input){
    if (preventDisplay) {
        display.value = input;
        preventDisplay = false;
    } else {
        if (display.value === "Error") {
            display.value = input;
        } else if (input === '0' && display.value === '0') {
            return;
        } else {
            display.value += input;
        }
    }
}

function clearDisplay(){
    display.value = "";
    preventDisplay = false;
}

function calculate(){
    try{
        display.value = eval(display.value);
        preventDisplay = true;
    }
    catch(error){
        display.value = "Error";
    }
}

function memoryStore(){
    let result = null;
    try{
        result = eval(display.value);
        preventDisplay = true;
    }
    catch(error){
        display.value = "Error";
    }
    
    if (result !== null && !isNaN(result)) {
        display.value = result;
        memoryValues.push(result);
    }
}

function memoryRecall(){
    let total = memoryValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    display.value = total;
}



function memoryClear(){
    memoryValues = [];
    display.value = "";
}
