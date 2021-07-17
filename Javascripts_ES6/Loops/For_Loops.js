// For loops
// Repeat until a specified conditions evaluates to false
/*
for(initial expression ; condition ; increment expression) {
    statement
}
*/

var index = 0
for(index ; index < 10 ; index += 1) {
    console.log(index)
}

const iceCreams = ["vanilla", "chocolate", "rocky road", "strawberry"]
console.log(iceCreams[0])
console.log(iceCreams[1])

for(var i = 0 ; i < 10 ; i += 1) {
    console.log(i)
}

const iceCreams = ["vanilla", "chocolate", "rocky road", "strawberry"]

for(var i = 0 ; i < iceCreams.length ; i += 1) {
    console.log(iceCreams[i])
}

const iceCreams = ["vanilla", "chocolate", "rocky road", "strawberry"]

function iceCreamLooper(arr) {
    for(var i = 0 ; i < arr.length ; i += 1) {
        console.log(arr[i])
    }
}

iceCreamLooper(iceCreams)

const iceCreams = ["vanilla", "chocolate", "rocky road", "strawberry"]

function iceCreamLooper(arr, type) {
    for(var i = 0 ; i < arr.length ; i += 1) {
        if (arr[i] === type) {
            console.log(arr[i] + " " + "is at position: " + i)
        }
    }
}

iceCreamLooper(iceCreams, "rocky road")

for(let i = 1 ; i <= 100 ; i += 1) {
    if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

for(let i = 1 ; i <= 100 ; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

for(let i = 1 ; i <= 100 ; i += 1) {
    if (i % 15 === 0) {
        console.log("Fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

for(let i = 1 ; i <= 100 ; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        continue
    }
    else if (i % 3 === 0) {
        continue
    }
    else if (i % 5 === 0) {
        continue
    }
    else {
        console.log(i)
    }
}

let x = 0
while (x < 10) {
    x += 1
    if (x === 5) {
        console.log("I am beeing skipped")
        continue
    }
    console.log(x + " I'm not being skipped")
}

console.log("Starting loop!")
outerLoop:
for(let i = 0 ; i < 10 ; i += 1) {
    console.log("Loop #" + i);
    innerLoop:
    for (let a = 0 ; a < 10 ; a += 1) {
        console.log("Inner loop #" + a);
        if (a === 3) {
            break innerLoop;
        }
        if (i === 5) {
            break outerLoop;
        }
    }
}
console.log("Finished loop")

for(var i = 0 ; i < 10 ; i += 1) {
    setTimeout(function(){
        console.log(i)
    }, 1000)
}

function looper(value) {
    setTimeout(function(){
        console.log(value)
    }, value * 1000)
}

for(var i = 0 ; i < 10 ; i += 1) {
    looper(i)
}

for(let i = 0 ; i < 10 ; i += 1) {
    setTimeout(() => {
        console.log(i)
    }, i * 500)
}

// For...in loop
/* 
    Loop through an object's properties in arbitrary order
    Used for looping over object properties
*/

const users = { 1: "Sally", 2: "Billy", 3: "Ashley", 4: "Timmy" }

for(let prop in users) {
    console.log(users[prop])
}

const users = { 1: "Sally", 2: "Billy", 3: "Ashley", 4: "Timmy" }

for(let prop in users) {
    let newUser = users[prop]
    newUser = "Redacted"
    console.log(newUser)
}

const users = { 1: "Sally", 2: "Billy", 3: "Ashley", 4: "Timmy" }

for(let prop in users) {
    if (users[prop] === "Sally") {
        users[prop] = "Unknown"
    }
    console.log(users[prop])
}

const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"]
for(let d in drinks) {
    console.log(drinks [d])
}

const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"]
drinks.forEach(function(d) {
    console.log(d)
})

const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"]
drinks.forEach((d) => {
    console.log(d)
})

// For...of loop
/* 
    New loop in ES6 used to loop over iterable objects(arrays, strings, maps, sets, etc)
    For looping for data - like values in an array
*/

const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"]

for(let d in drinks) {
    if (drinks[d] === "coke") {
        continue
    }
    console.log(drinks[d])
}

const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"]
for(const d of drinks) {
    if (d === "tea") {
        continue
    }
    console.log(d)
}

const myString = "Hello!"
for(const character of myString) {
    console.log(character)
}

const originalArray = [10, 15, 20, 25, 30]
for(let num of originalArray){
    num += 10
    console.log(num)
}

const originalArray = [10, 15, 20, 25, 30]

function numIncreaser(arr, numToIncBy) {
    for(let num of arr){
        num += numToIncBy
        console.log(num)
    }
}

numIncreaser(originalArray, 30)

const originalArray = ["Chris", "Chris", "Jane", "Sally", "Billy", "Billy", "Bob"]
const uniqueNameSet = new Set(originalArray)

for(const n of uniqueNameSet) {
    console.log(n)
}





