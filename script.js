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
    if (operator === "sum") {
        return add(a,b)
    }
    else if (operator === "sub") {
        return subtract(a,b)
    }
    else if (operator === "mult") {
        return multiply(a,b)
    }
    else {
        return divide(a,b)
    }
}

let display = document.querySelector(".display")
let numbers = document.querySelectorAll(".number")

numbers.forEach(element => {
    element.addEventListener("click",event => {
        let d = display.textContent
        if (d == 0) {
            display.textContent = element.textContent
        }
        else {
            display.textContent += element.textContent
        }
    })
});

let clearBtn = document.querySelector("#clear_btn")
clearBtn.addEventListener("click", event => {
    display.textContent = 0
})

let borrarBtn = document.querySelector("#borrar_btn")
borrarBtn.addEventListener("click", event => {
    let d = display.textContent
    display.textContent = d.slice(0,d.length-1)
})