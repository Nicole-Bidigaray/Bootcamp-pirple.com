// Destructuring
/*
    - "The destructuring assigment syntax is a JavaScript expression 
       that makes it possible to extract data from arrays or objects
       into distinct variables"
    - Destructuring syntax can be used on left-hand side of assigments
*/

// Array destructuring
const myArray = [1, 2, 3, 4, 5]
const [x, y, z, a, b] = myArray

const mySecondArray = ["Jane Doe","John Doe", "Billy Bob"]
let name1, name2, name3, name4
[name1, name2, name3, name4="I´m a default :D"] = mySecondArray

// Swap two variables
let aa = 100
let bb = 250
let cc = 500
// console.log(aa, bb, cc)
[bb, cc] = [cc, bb]

// Use with functions
// function returnArray() {
//     return ["donuts", "chocolate", "candy", "gummy bears"]
// }

// console.log(returnArray())

// const [donuts, chocolate, candy, gummybears] = returnArray
// console.log(candy)

function foodFilter(arr, term) {
    return arr.filter((t) => t === term)
}

const [result] = foodFilter(["chicken", "fish", "tofu"], "chicken")
const [result2] = foodFilter(["pizza", "donut", "ice cream"], "pizza")
console.log(result)
console.log(result2)

// Can ignore some values
/* const anotherArr = [10, 20, 50, 100, 1000, 30]
const [numA, numB, , numC, , numD] = anotherArr
console.log(`First: ${numA}, second: ${numB}, third: ${numC}, fourth: ${numD}`) */

const anotherArr = [10, 20, 50, 100, 1000, 30]
const [numA, , , , , numD] = anotherArr
console.log(`First: ${numA}, second: ${numD}`)

// Can use rest pattern
function sayHi(firstArg, ...restOfArgs) {
    console.log(`Hi, ${firstArg}`)
    console.log(restOfArgs)
}

sayHi("Chris", 30, "123 Fake St")

const yetAnother = ["dogs", "cats", "birds", "snakes", "hedgehogs"]
const [dogString, catString, ...otherAnimals] = yetAnother
console.log(dogString)
console.log(catString)
console.log(otherAnimals)

console.log(otherAnimals.filter((t) => {
    return t === "snakes"
}))