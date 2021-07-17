// Switch statement
/*
    switch(expression) {
        case value1:
            statement to be executed when result of expression
            matches value1
            break;
        case value2:
            ...
            break;
        case value3:
            ...
            break;
        default:
            break;
    }
*/

// const myFruit = "pear"

// if (myFruit === "apple") {
//     console.log("Awesomme! I love apples.")
// } else if (myFruit === "orange") {
//     console.log("Oranges are cool :D")
// } else if (myFruit === "pear") {
//     console.log("Pears are good too")
// } else {
//     console.log("That sounds pretty OK")
// }

// const myFruit1 = "apple"

// switch(myFruit1) {
//     case "apple":
//         console.log("Great! I love apples")
//         break
//     case "orange":
//         console.log("Good choice")
//         break
//     case "banana":
//         console.log("OK")
//         break
//     default:
//         console.log("I didn´t understand that but sure :D")
//         break
// }

function fruitLogger(fruit) {
    switch(fruit) {
        case "apple":
        console.log("Great! I love apples")
        return
    case "orange":
        console.log("Good choice")
        break
    case "banana":
        console.log("OK")
        break
    default:
        console.log("I didn´t understand that but sure :D")
        break
    }
    console.log("Broke out of switch statement")
}

fruitLogger("apple")

function fruitLogger(fruit) {
    switch(fruit) {
        case "apple":
        case "orange":
        case "banana":
        console.log("Great! I love fruit.")
        break
    default:
        console.log("I didn´t understand that but sure :D")
        break
    }
    console.log("Broke out of switch statement")
}

fruitLogger("orange")

function numChecker(num) {
    let value;
    switch(num) {
        case 0: case 1: case 2:
            value = "low range"
            break
        case 3: case 4: case 5:
            value = "mid range"
            break
        case 6: case 7: case 8:
            value = "high range"
            break
        default:
            value = "Input number between 0-8"
            console.log(value)
            return
    }
    // console.log("The value is " + value)
    setVolume(value)
}

function setVolume(n) {
    console.log("Volume set at " + n)
}

numChecker(5)

const donutPicker = (flav) => {
    switch(flav) {
        case "s":
            return "sprinkles"
        case "c":
            return "chocolate glazed"
        case "b":
            return "bear claw"
        default:
            return null
    }
}

const donuts = (selection) => {
    const selectedDonut = donutPicker(selection)
    if (!selectedDonut) {
        console.log("Incorrect selection")
    } else {
        console.log("You have selected " + selectedDonut)
    }
}
    

donuts("s")
donuts("c")
donuts("b")
donuts(121212)