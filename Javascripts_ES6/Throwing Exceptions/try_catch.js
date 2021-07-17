/* try {
    throw "Exception!"
}
catch(e) {
    console.log(e)
}

console.log("I want to run!") */

/* let myNum = 20

function checkIfNum(num) {
    if (isNaN(num)) {
        throw "not a number!"
    } else {
        console.log("Yes, this is a number")
    }
} */

/* try {
    checkIfNum(myNum)
}
catch(catchID) {
    console.log("Caught an error: " + catchID)
}
console.log("I want to live") */

f/* unction errorHandler(e) {
    myErrorLog.push(e)
}

try {
    checkIfNum(myNum)
}
catch(catchID) {
    errorHandler(catchID)
}
console.log(myErrorLog.length) */

function MyString(string) {
    if (typeof string === "string") {
        this.value = string
        this.getValue = function() {
            console.log ("Your string: " + this.value + ".")
        }
    } else if (typeof string === "boolean") {
        throw "Error!"
    }
    else {
        throw new StringExceptionError(string)
    }
}

function StringExceptionError(value) {
    this.value = value
    this.message = "must be a string"
    this.ToString = function() {
        return this.value + ": " + this.message
    }
}

function verifyString(s) {
    let str
    try {
        str = new MyString(s)
    } catch(e) {
        if (e instanceof StringExceptionError) {
            console.log("String exception" + e)
        } else {
            // console.log("Other exception")
            throw "Unknown error"
        }
    } finally {
        console.log("Always runs")
    }
    return str
}

function always() {
    console.log("I always run :D")
}

// const bool = verifyString(true)
// const a = verifyString("I am a string")
// const b = verifyString(true)
// const c = verifyString(3123123)
const d = verifyString("234342331")
// a.getValue()

function finallyExample() {
    try {
        console.log("Hi")
        throw 'test'
    }
    catch(e) {
        console.log(e)
        throw "Boo!"
        // return true
    }
    finally {
        console.log("Can I run?")
        return false
    }
    // console.log("I can´t run :(")
}

// finallyExample()
console.log(finallyExample())