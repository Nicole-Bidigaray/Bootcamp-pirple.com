// Events
/* 
    - Any event that takes place in the DOM
    - Can be user-generated or by an API
    - Many types of events
    - Event contains properties and methods
    - addEventListener function takes in the event to listen for, 
    and a second argument to be call whenever the described event fires.
        - addEventListener("click", function(){
          logic inside function
        })
*/

// const clickDiv = document.getElementById("clicky")

// clickDiv.addEventListener("click", function(){
//     alert("Clicked!")
// })

const clickDiv = document.getElementById("clicky")
const clickableButton = clickDiv.querySelector("button")

// clickDiv.addEventListener("click", function(event){
//     console.log(event.type)
// })

// clickableButton.addEventListener("click", function(event){
//     alert(event.type)
// })

// function handleClick() {
//     alert("Clicked :D")
// }

// clickableButton.addEventListener("focus", function(event) {
//     console.log(event)
// })

// clickableButton.addEventListener("focusout", function(event) {
//     console.log(event.type)
// })

clickableButton.addEventListener("click", logEvent)
// clickableButton.addEventListener("focus", logEvent)
// clickableButton.addEventListener("focusout", logEvent)

// function logEvent(e) {
//     console.log(e.type)
// }

// function logEvent(e) {
//     if(e.type === "click") {
//         console.log("Click")
//     }
//     if (e.type === "focus") {
//         console.log("Focus")
//     }
//     else {
//         return false
//     }
// }

function logEvent(e) {
    clickableButton.innerText = e.timeStamp
    clickableButton.removeEventListener("click", logEvent)
    console.log(e.type)
}

const bckgrnd = document.getElementById("background")
const listItemsUL = bckgrnd.querySelector("UL")
const allLIs = bckgrnd.querySelectorAll("LI")

// bckgrnd.addEventListener("mousedown", switchBackground)

// function switchBackground(e) {
//     console.log(e)
// }

// function switchBackground(e) {
//     if(e.which === 1) {
//         bckgrnd.classList.toggle("background-color")
//     }
// }

document.addEventListener("click", switchBackground)
listItemsUL.addEventListener("click", addGreenBackground)

function switchBackground(e) {
    const hasBeenClicked = bckgrnd.contains(e.target)
    if (hasBeenClicked) {
        bckgrnd.classList.add("background-color")
    }
    else {
        bckgrnd.classList.remove("background-color")
    }
}

// function addGreenBackground(e) {
//     console.log(e.target)
// }

// function addGreenBackground(e) {
//     const targetLI = e.target
//     targetLI.classList.add("green")
// }

// function addGreenBackground(e) {
//     e.stopPropagation()
//     const targetLI = e.target
//     targetLI.classList.add("green")
// }

function addGreenBackground(e) {
    e.stopPropagation()
    const targetLI = e.target
    if (targetLI.nodeName === "UL") {
        return
    }
    const green = document.querySelector(".green")
    if (green) {
        green.classList.remove("green")
    }
    targetLI.classList.add("green")
}

const div2 = document.getElementById("div2")
const myForm = document.getElementById("myForm")
// const myLink = div2.querySelector("a")

myForm.addEventListener("submit", addToList)

// myLink.addEventListener("click", function(event) {
//     event.preventDefault()
//     alert("Not today!")
// })

function addToList(e) {
    e.preventDefault()
    const myInput = document.getElementById("myInput").value
    const newLI = document.createElement("li")
    newLI.innerText = myInput
    listItemsUL.appendChild(newLI)
    myForm.reset()
}

const div3 = document.getElementById("div3")
const para = div3.querySelector("p")
const textArea = div3.querySelector("textarea")
const paraText = "User is typing"
let timer

textArea.addEventListener("keydown", addText)
textArea.addEventListener("keyup", removeText)

function addText(e) {
    para.innerText = paraText
}

function removeText(e) {
    clearTimeout(timer)
    timer = setTimeout(() => {
        para.innerText = ""
    }, 1000);
}

document.addEventListener("DOMContentLoaded", addToLog)
window.addEventListener("load", checkImageSize)

function addToLog() {
    console.log("DOM content loaded and parsed!")
    const myLog = document.getElementById("log")
    myLog.innerHTML += "<h1>Hiiiiii</h1>"
}

function checkImageSize() {
    const myImg = document.getElementById("myImg")
    console.log("Height: " + myImg.offsetHeight + " " + "width: " + myImg.offsetWidth)
    myImg.style.width = "500px"
    myImg.style.height = "auto"
    myImg.style.borderRadius = "50%"
}
