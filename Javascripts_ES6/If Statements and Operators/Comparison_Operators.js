const numberFive = 5

const stringFive = "5"
const stringConversion = parseInt(stringFive)

console.log(numberFive + stringConversion)

if (numberFive == stringFive) {
    console.log("Hi")
}

const myObject = { name: "Chris" }
const myOtherObject = { name: "Bob" }

console.log(myObject == myOtherObject)

const bankAccountBalance = 200
const costOfItem = 120
const canSpendMoney = true
const tax = 0.5

if (bankAccountBalance >= costOfItem + tax) {
    console.log("You can purchase this item!")
}

if (bankAccountBalance !== costOfItem + tax) {
    console.log("I am running!")
}

if (bankAccountBalance >= costOfItem) {
    console.log("Balance ok! Checking tax")
    if (tax >= 0.5) {
        console.log("Tax amount too high")
        if (100 === 100) {
            const name = "Chris"
            console.log(name)
        }
    }
}