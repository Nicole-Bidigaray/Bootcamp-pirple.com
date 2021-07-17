function sayHi() {
    let shouldSayHI = false
    let myName

    if (shouldSayHI === true) {
        myName = "Chris"
        console.log("Hi" + " " + myName)
    }
    else {
        myName = "Bob"
        console.log("Hi" + " " + myName)
    }
}

sayHi()

const myArray = [1, 2, 3]
console.log(myArray)
myArray.push(4)
console.log(myArray)

const myObject = { name: "Chris" }
console.log(myObject)
myObject.name = "Bob"
console.log(myObject)

function sayHi () {
    const myName = "Jane"

    if (true) {
        const myName = "Jim"
        console.log(myName)
    }
    console.log(myName)
}

sayHi()