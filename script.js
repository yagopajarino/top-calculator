function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return b == 0 ? "Math Error" : a/b
}

function operate(operator, a, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    if (operator === "+") {
        return add(a,b)
    }
    else if (operator === "-") {
        return subtract(a,b)
    }
    else if (operator === "*") {
        return multiply(a,b)
    }
    else {
        return divide(a,b)
    }
}

let display = document.querySelector(".display")
let numbers = document.querySelectorAll(".number")
let k = 0

numbers.forEach(element => {
    element.addEventListener("click",event => {
        let d = display.textContent
        if (d == ""|| k==1) {
            display.textContent = element.textContent
            k = 0
        }
        else {
            display.textContent += element.textContent
        }
    })
});


let clearBtn = document.querySelector("#clear_btn")
clearBtn.addEventListener("click", clearDisplay)

function clearDisplay(){
    let display = document.querySelector(".display")
    display.textContent = ""
}

let borrarBtn = document.querySelector("#borrar_btn")
borrarBtn.addEventListener("click", borrarUltimo)

function borrarUltimo(){
    let d = display.textContent
    display.textContent = d.slice(0,d.length-1)
}

let operators = document.querySelectorAll(".operator")
let n1 = 0
let n2 = 0
let operSel = ""
operators.forEach(element => {
    element.addEventListener("click", event => {
        n1 = display.textContent
        operSel = event.target.textContent
        clearDisplay()
    })
});

let eqBtn = document.querySelector(".equalBtn")
eqBtn.addEventListener("click", event => {
    n2 = display.textContent
    let res = operate(operSel,n1,n2)
    displayAnswer(res)
})

// Usage with keys
document.addEventListener("keydown", event => {
    let char = event.key
    numbers = ["0","1","2","3","4","5","6","7","8","9",","]
    let d = display.textContent
    if (numbers.includes(char)){
        if(char == ","){
            char = "."
        }
        if (d == ""|| k==1) {
            display.textContent = char
            k = 0
        }
        else {
            display.textContent += char
        }
    }
    else if (char == "Escape"){
        clearDisplay()
    }
    else if (char == "Backspace"){
        borrarUltimo()
    }
    else if (["+","-","*","/"].includes(char)){
        n1 = d
        operSel = char
        clearDisplay()
    }
    else if (char == "Enter") {
        n2 = d
        let res = operate(operSel,n1,n2)
        displayAnswer(res)
        k = 1
    }
})

function displayAnswer(res){
    if (res % 1 === 0) {
        display.textContent = res
    }
    else {
        display.textContent = res.toString().slice(0,10)
    }
}