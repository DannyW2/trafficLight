function stop () {
    let redLight = document.querySelector("#stopLight")
    redLight.style.backgroundColor = "#cc0605"
    let turnSlowOff = document.querySelector("#slowLight")
    let turnGoOff = document.querySelector("#goLight")
    turnSlowOff.style.backgroundColor = "#111"
    turnGoOff.style.backgroundColor = "#111"
}

let turnRed = document.querySelector("#stopButton").addEventListener("click", stop)

function slow () {
    let yellowLight = document.querySelector("#slowLight")
    yellowLight.style.backgroundColor = "#81ff00"
    let turnStopOff = document.querySelector("#stopLight")
    let turnGoOff = document.querySelector("#goLight")
    turnStopOff.style.backgroundColor = "#111"
    turnGoOff.style.backgroundColor = "#111"
}
let turnYellow = document.querySelector("#slowButton").addEventListener("click", slow)

function go () {
    let greenLight = document.querySelector("#goLight")
    greenLight.style.backgroundColor = "#00ff54"
    let turnStopOff = document.querySelector("#stopLight")
    let turnSlowOff = document.querySelector("#slowLight")
    turnStopOff.style.backgroundColor = "#111"
    turnSlowOff.style.backgroundColor = "#111"
}

turnGreen = document.querySelector("#goButton").addEventListener("click", go)