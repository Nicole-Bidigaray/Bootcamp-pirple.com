function squareAndMultiply(num1, num2) {

    function squarer(x) {
        return x * x
    }

    return squarer(num1) * squarer(num2)
    
}
console.log(squareAndMultiply(10, 60))

function squareAndMultiply1(num1, num2) {

    let testLet = "I am a test"
    
    function squarer1(x) {
        console.log(testLet)
        return x * x
    }

    function multiplyBy10(y) {
        return y * 10
    }

    return squarer1(num1) * multiplyBy10(num2)
}

console.log(squareAndMultiply1(4, 4))

function squareAndMultiply2(num1, num2) {

    let testLet = "I am a test"

    function squarer2() {
        return num1 * num2
    }

    function multiplyBy101(y) {
        return y * 10
    }

    return squarer2() * multiplyBy101(num2)
}

const first = squareAndMultiply1(4, 4)
const second = squareAndMultiply1(10, 2)
const third = squareAndMultiply1(4, 200)

console.log(second)

function personFormatter(firstName, lastName, age) {
    function formatNames(arg1, arg2) {
        return arg1 + " " + arg2
    }
    const formattedName = formatNames(firstName, lastName)
    return formattedName
}
console.log(personFormatter("Chris", "Jones", 20))

function formatNames1(arg1, arg2) {
    return arg1 + " " + arg2
}

function personFormatter1(firstName, lastName, age) {
    function dataFormatter(fullName, num) {
        const formattedData = {
            name: fullName,
            age: num
        }
        return formattedData
    }
    const formattedName1 = formatNames1(firstName, lastName)
    return dataFormatter(formattedName1, age)
}

console.log(personFormatter1("Chris", "Jones", 20))

// Concatenates strings into one string
function formatNames2(arg1, arg2) {
    return arg1 + " " + arg2
}

// Formats data into an object, with an age value
function dataFormatter1(fullName, num) {
    const formattedData1 = {
        name: fullName,
        age: num
    }
    return formattedData1
}

// Formats data into object by invoking other functions
function personFormatter1(firstName, lastName, age) {
    const formattedName2 = formatNames2(firstName, lastName)
    const formattedData2 = dataFormatter1(formattedName2, age)
    return formattedData2
    // return dataFormatter1(formattedName2, age)
}

console.log(personFormatter1("Chris", "Jones", 20))