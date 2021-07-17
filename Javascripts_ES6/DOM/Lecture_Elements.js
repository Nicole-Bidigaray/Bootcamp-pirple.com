// const creationDiv = document.getElementById("created")

// const newElement = document.createElement("P")
// newElement.innerText = "I was created by SCIENCE!"
// // console.log(newElement)
// newElement.classList.add("purple", "foo")

// creationDiv.appendChild(newElement)

const myFaveIceCreams = ["vanilla", "rocky road", "strawberry", "chocolate"]

const creationDiv = document.getElementById("created")

const newElement = document.createElement("div")

const newUL = document.createElement("UL")

for(let i = 0 ; i < myFaveIceCreams.length ; i++) {
    const newLI = document.createElement("LI")
    newLI.innerText = myFaveIceCreams[i]
    newUL.appendChild(newLI)
}

newElement.appendChild(newUL)
creationDiv.appendChild(newElement)

// const unlikedIceCream = newUL.childNodes[3]
// if (unlikedIceCream.innerText === "chocolate") {
//     newUL.removeChild(unlikedIceCream)
// }

// console.log(unlikedIceCream)

// creationDiv.removeChild(newElement)
// console.log(newElement)

// for(const prop of newUL.childNodes) {
//     if(prop.innerText === "chocolate") {
//         newUL.removeChild(prop)
//     }
// }

function removeIceCream(t) {
    for(const prop of newUL.childNodes) {
        if(prop.innerText === t) {
            newUL.removeChild(prop)
        }
    }
}

removeIceCream("vanilla")
removeIceCream("rocky road")