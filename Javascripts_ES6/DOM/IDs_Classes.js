const dummyDiv = document.querySelector(".dummy span")
const testDiv = document.getElementById("test")

// const element = document.getElementById("footer")
// const elID = element.id
// console.log(elID)
// const replacementID = "bottom"
// element.id = replacementID
// console.log(element)

const el = document.getElementsByTagName("div")
const footerDiv = el[el.length - 1]
footerDiv.id = "footer"

// console.log(dummyDiv.className)

const purpleDivs = 
// document.querySelector(".purple")
// purpleDiv.style.backgroundColor = "purple"
// purpleDiv.style.height = "100px"
// purpleDiv.style.width = "100px"
document.querySelectorAll(".purple")
for(const prop of purpleDivs) {
    // console.log(prop.className)
    // prop.className += " foo"
    // console.log(prop.classList)
    prop.classList.add("foo")
}

// setTimeout(() => {
//     for(const prop of purpleDivs) {
//         prop.classList.remove("foo")
//     }
// }, 5000)

// setInterval(() => {
//     for(const prop of purpleDivs) {
//         prop.classList.toggle("foo")
//     }
// }, 3000)

const foot = document.getElementById("footer")
console.log(foot.classList)
