
function sayHi(firstName, lastName) {
    console.log("Hi" + " " + firstName + " " + lastName)
}
sayHi("Billy", "Jones")
sayHi("Chris", "Smith")
sayHi("Sally", "Jane")

function sayHi1(firstName, age) {
    console.log("Hi" + " " + firstName + " " + "you are" + " " + age)
}

const billy = "Billy"
const chris = "Chris"
const sally = "Sally"

sayHi1(billy, 20)
sayHi1(chris, 50)
sayHi1(sally, 31)

function numberDoubler(num) {
    console.log(num * 2)
}

numberDoubler(10)

function numberDoubler1(num) {
    return num * 2
}

console.log(numberDoubler1(10))

function numberDoubler2(num) {
    const doubledValue = num * 2
    return doubledValue
}

const numTwoDoubled = numberDoubler2(2)
const numFiveDoubled = numberDoubler2(5)
console.log(numTwoDoubled)
console.log(numFiveDoubled)
console.log(numTwoDoubled + numFiveDoubled)

function numberAdder(num1, num2) {
    return num1 + num2
}

console.log(numberAdder(numTwoDoubled, numFiveDoubled))

const myName = "Chris"

function sayHi2() {
    if (!myName) {
        var myName = "Bob"
    }
    console.log("Hi" + " " + myName)
}

sayHi2()

function sayHi3(myName) {
    if (!myName) {
        var myName = "Bob"
    }
    console.log("Hi" + " " + myName)
}
sayHi3("Chris")

var sayHi4 = function(myName) {
    if (!myName) {
        var myName = "Bob"
    }
    console.log("Hi" + " " + myName)
}

sayHi4("Chris")

const squaredNumber = function(num) {
    return num * num
}

const numberAdder1 = function(num1, num2) {
    return num1 + num2
}

console.log(numberAdder1(squaredNumber(4), 10))

const squaredNumber1 = function(num) {
    return num * num
}

const numberAdder2 = function(squarer, num2) {
    const squared = squarer(4)
    return squared + num2
}
console.log(numberAdder2(squaredNumber1, 10))
console.log(squaredNumber(10))

let myNumber = 100

function addTwenty(num) {
    return num + 20
}

console.log(addTwenty(myNumber))
console.log(myNumber)

let myString = "I´m a string"

function addHello(string) {
    return "Hello" + " " + string
}

console.log(addHello(myString))
console.log(myString)

const myInfo = { name: "Chris", age: 30 }

function changeAgeTo100(myObj) {
    myObj.age = 100
}

console.log(myInfo)

const myNumbers = [1, 2, 3 ,4 ,5]

function addToArray(myArr) {
    myArr.push(6)
}

console.log(myNumbers)
addToArray(myNumbers)
console.log(myNumbers)