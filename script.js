const display = document.getElementById("display")

function addToDisplay(input){
            display.value += input
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(err){
        display.value = "Error"
    }
}

function clear1(){
    display.value = ""
}

function delete1(){
    display.value = display.value.slice(0,-1)
}