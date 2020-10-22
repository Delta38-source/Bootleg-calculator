// SETTING UP VARIABLES FROM THE HTML DOCUMENT //

// Output Fields
var outputNum = document.getElementById("outputNum")
var currentValue = ""
var lastValue = ""

// Function Buttons
var acBtn = document.getElementById("resetBtn")
var plusmBtn = document.getElementById("plusmBtn")
var percentBtn = document.getElementById("percentBtn")

// Operators
var divideBtn = document.getElementById("divideBtn")
var multiplyBtn = document.getElementById("multiplyBtn")
var substractBtn = document.getElementById("substractBtn")
var addBtn = document.getElementById("addBtn")
var equalBtn = document.getElementById("equalBtn")

// Number Buttons
var dotBtn = document.getElementById("dotBtn")
var num1 = document.getElementById("1Btn")
var num2 = document.getElementById("2Btn")
var num3 = document.getElementById("3Btn")
var num4 = document.getElementById("4Btn")
var num5 = document.getElementById("5Btn")
var num6 = document.getElementById("6Btn")
var num7 = document.getElementById("7Btn")
var num8 = document.getElementById("8Btn")
var num9 = document.getElementById("9Btn")
var num0 = document.getElementById("0Btn")

// Array for the number values
var numValues = [
    num0.value,
    num1.value,
    num2.value,
    num3.value,
    num4.value,
    num5.value,
    num6.value,
    num7.value,
    num8.value,
    num9.value
]

// ^^^^^^^ VARIABLE SETUP ^^^^^^^ //

console.log(numValues) // Test log to see if the values display correctly

// BUTTON LISTENER SETUP //

var btnPressed = ""

// Number Listeners
num0.addEventListener("click", newInput)
num1.addEventListener("click", newInput)
num2.addEventListener("click", newInput)
num3.addEventListener("click", newInput)
num4.addEventListener("click", newInput)
num5.addEventListener("click", newInput)
num6.addEventListener("click", newInput)
num7.addEventListener("click", newInput)
num8.addEventListener("click", newInput)
num9.addEventListener("click", newInput)
dotBtn.addEventListener("click", newInput)

function newInput(event) {
    btnPressed = event.target.value
    console.log("New input detected, " + btnPressed)

    if (outputNum.innerHTML == "0"){
        outputNum.innerHTML = btnPressed
        currentValue += btnPressed
        currentValue = parseFloat(currentValue)
        console.log(currentValue)
    }else{
        outputNum.innerHTML += btnPressed
        currentValue += btnPressed
        currentValue = parseFloat(currentValue)
        console.log(currentValue)
    }
}

// Operators Listeners

var lastOperator = ""

addBtn.addEventListener("click", newOpt)
substractBtn.addEventListener("click", newOpt)
multiplyBtn.addEventListener("click", newOpt)
divideBtn.addEventListener("click", newOpt)

function newOpt(event) {
    outputNum.innerHTML = 0
    lastValue = currentValue
    lastOperator = event.target.value
    currentValue = ""
    lastValue = parseFloat(lastValue)
    console.log("Last input: " + lastValue)
}

// Get result
equalBtn.addEventListener("click", final)

function final(event) {
    currentValue = lastValue + lastOperator + currentValue
    console.log("The operation is: " + currentValue)
    console.log("The result is: " + currentValue)
    outputNum.innerHTML = currentValue
}

// Function buttons
acBtn.addEventListener("click", reset)

function reset(event) {
    currentValue = ""
    lastOperator = ""
    lastValue = ""
    outputNum.innerHTML = 0
}