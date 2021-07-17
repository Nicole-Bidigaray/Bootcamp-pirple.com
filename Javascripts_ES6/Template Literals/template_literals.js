// Template Literals
/* 
    - String literals allowing embedded expressions
    - Makes it easier to create multiline strings and
        allows string interpolation
    - Enclosed in back-ticks (`String goes here`) instead
        of single quotes('') or double quotes("")
    - Can contain placeholders   
*/

var myFirstName = "Chris"
var myLastName = "Jones"
var myAge = "30"

console.log("Hello," + " " + myFirstName + " " + myLastName + " " + ". I am" + " " + myAge + " " + "years old.")

var myNewList = 
    "<ul>\n" +
    "<li>I am item 1</li>\n" +
    "<li>I am item 2</li>\n" +
    "<li>I am item 3</li>\n" +
    "</ul>"

const myOtherNewList = 
   `<ul>
        <li>I am es6 number 1!</li>
        <li>I am item 2</li>
        <li>I am item 3</li>
        <li>I am #4</li>
    </ul>`

const myDiv = document.getElementById("myDiv")
myDiv.innerHTML = myOtherNewList

const first = "Sally"
const last = "Smith"
const age = 52

const fullNameAndAge = `${first} ${last}, age: ${age}`

console.log(`Hello ${first} ${last}. You are ${age} today`)

console.log(`Hello ${fullNameAndAge}`)
console.log(`My name is "Chris"`)

const isTrue = true
console.log(`Is true: ${!isTrue}?`)

const dateNow = new Date()
console.log(`Today is: ${dateNow.toLocaleString()}`)

const localeDate = dateNow.toLocaleString()
console.log("Today´s date is " + localeDate)

const myArray = [1, 2, 3, 4, 5]

const newArray = myArray.map((num) => num + 5)
console.log(newArray)

console.log(`${myArray.map((num) => `Your result is: ${num + 5}`)}`)

const pizzaToppings = ["cheese", "mushrooms", "sauce", "pepperoni", "pineapple"]

const myPizzaArticle = (
    `<article>
        <h1>Pizza Ingredients</h1>
        <ul>
            ${pizzaToppings.map((ingredient) => `<li>${ingredient}</li>`).join("\n            ")}
        </ul>
    </article>`
)

console.log(myPizzaArticle)

const pizzaDiv = document.getElementById("pizzaDiv")
pizzaDiv.innerHTML = myPizzaArticle

function templateParser(arrayOfStrings, expression1, expression2) {
    console.log(`"${arrayOfStrings}", "${expression1}", "${expression2}"`)
}

const person = "Chris"
const personAge = 50

const myTemplateLiteral = templateParser `I am ${person}, aged: ${personAge}`