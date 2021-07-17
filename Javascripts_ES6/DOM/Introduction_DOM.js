// Document Object Model
/* 
    - Programmming interface for HTML & XML documents.
    - Provides a structured representations of the document
    - Defines methods to access the structure and manipulate it
    - Connect web pages to scripts or programming languages
    - DOM is not a programming language, it provides a model of a web page
    - "The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods."
*/

// function showAlert() {
//     window.alert("I'm alerting you to the fact that the body has been loaded")
// }

// document.body.innerText = "Something else"
// document.body.innerHTML = "<h1>I'm an h1 tag</h1>"

// const myTag = document.getElementsByTagName("P")

// console.log(myTag[2].innerHTML)

// myTag[2].innerHTML = "I loooove donuts :D"

// for(let i = 0 ; i < myTag.length ; i++) {
//     myTag[i].innerHTML = "Renamed!!!"
// }

// for(const p of myTag) {
//     p.innerHTML = "Renamed again :D!!!"
// }

// const allSpans = document.getElementsByTagName("span")

// for(const prop of allSpans) {
//     prop.innerHTML = "Somebody"
// }

// const ID = document.getElementById("identifier")

// // console.log(ID)

// ID.innerHTML = "<h1>We all</h1>"

// const myAppDiv = document.getElementById("app")
// // const specialWords = myAppDiv.getElementsByTagName("span")
// const specialWords = document.getElementsByTagName("span")

// const totalWordsChanged = document.getElementById("total")

// for(const prop of specialWords) {
//     prop.innerHTML = "TEST!!!!"
// }

// totalWordsChanged.innerHTML = specialWords.length

const membersUl = document.getElementById("members")
const allMemberNames = membersUl.getElementsByTagName("LI")

// allMemberNames[3].innerHTML = "Not Bob"

for(let prop of allMemberNames) {
    if (prop.innerText === "Bob") {
        prop.innerHTML = "<h1>Not Bob</h1>"
    }
}
