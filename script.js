let pinGeneratorOutput = document.getElementById("pin-generator-output");
let pinGeneratorBtn = document.getElementById("pin-generator-btn");
let pinGeneratorInput = document.getElementById("pin-generator-input");
let pinSubmitBtn = document.getElementById("pin-submit-btn");
let matchNotification = document.getElementById("matched");
let notMatchedNotification = document.getElementById("not-matched");


/*******************************generating pin *************************************** */
pinGeneratorBtn.addEventListener("click",function(){
    generatePin();
        
})

/****************************degit display********* */
digitDisplay("one");
digitDisplay("two");
digitDisplay("three");
digitDisplay("four");
digitDisplay("five");
digitDisplay("six");
digitDisplay("seven");
digitDisplay("eight");
digitDisplay("nine");
digitDisplay("zero");
/************************delete one digit***************************** */
document.getElementById("delete-digit").addEventListener("click",function(){
    let display =pinGeneratorInput.value;
    let displayAfterDeletingDigit = display.slice(0,(display.length-1));
    pinGeneratorInput.value=displayAfterDeletingDigit; 
})

/****************************clear all digits******************************************** */
document.getElementById("clear-all").addEventListener("click",function(){
    pinGeneratorInput.value ="";
})

/****************************submiting pin****************************************** */
pinSubmitBtn.addEventListener("click",function(){
    if (pinGeneratorOutput.value==pinGeneratorInput.value) {
        matchNotification.style.display="block";
        notMatchedNotification.style.display="none";
    } else {
        matchNotification.style.display="none";
        notMatchedNotification.style.display="block";
    }
})

/************************ function for generating pin**************************************** */

function generatePin() {
    let pin= Math.trunc(Math.random()*10000)+"";
    
    if (pin.length==4) {
        pinGeneratorOutput.value=pin;
    }else{
        generatePin();
    }
}

/************************ function for digit display **************************************** */

function digitDisplay(id) {
    document.getElementById(id).addEventListener("click",function(){
        pinGeneratorInput.value+=document.getElementById(id).innerText;
    })
}

