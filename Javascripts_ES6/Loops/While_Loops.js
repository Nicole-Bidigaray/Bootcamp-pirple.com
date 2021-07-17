// Loops
// Quick and easy way to do something repeatedly
/*
Many types of loops but all do basically the same thing:
repeat something (i.e. an action) a set number of times (could even be 0).
*/

// While loop
/*
while(condition) {
    statement
}
*/

// let numberOfLoops = 0
// while(numberOfLoops < 10) {
//     console.log("I am looping!")
//     numberOfLoops += 1
// }

let num1 = 0
let num2 = 0
while (num1 < 8) {
    num1 += 1
    console.log(num1)
    num2 += num1
}
console.log(num2)

let num1 = 0
let num2 = 0
while (num1 < 100) {
    num1 += 5
    console.log(num1)
    num2 += num1
}
console.log(num2)

let num1 = 0
let num2 = 0
while (num1 < 100) {
    num1 += 1
    num2 += num1
    loopDeLoop()
}

function loopDeLoop() {
    console.log("I'm looping!!!")
}

let num1 = 0
let num2 = 0
while (num1 < 100) {
    num1 += 1
    num2 += num1
    // if (num1 === 50) {
    //     break
    // }
}
console.log(num2)

const names = ["Chris", "Bob", "Joe", "Jane", "Amy", "Ashley", "Billy"]

function nameLooper(arr, userName) {
    let index = 0
    while(index < arr.length){
        if (arr[index] === userName) {
            console.log(arr[index])
            break
        }
        index += 1
    }
}
nameLooper(names, "Chris")

// let index = 0
// // console.log(names.length)

// while(index < names.length){
//     if (names[index] === "Ashley") {
//         console.log(names[index])
//         break
//     }
//     index += 1
// }

// console.log(index)

// do...while statement
/*
    do {
        statement
    } while(condition)
*/

let shouldRunOnlyOnce = true
let index = 0
do {
    console.log("Looping!")
    index += 1
    if (index === 10) {
        shouldRunOnlyOnce = false
    }
} while(shouldRunOnlyOnce)

// Código abaixo só funcionou no site para teste https://jsbin.com/

// let condition
// do {
//     const userInput = prompt("Enter q to exit")
//     if (userInput === 'q') {
//         condition = false
//     } else {
//         condition = true
//     }
// } while(condition)

let totalMoney = 100

do {
    checkIfCanPurchase()
} while(totalMoney > 500)

function checkIfCanPurchase() {
    if (totalMoney > 500) {
        console.log("Can purchase: ")
    } else {
        console.log("Cannot purchase: ")
    }
}

