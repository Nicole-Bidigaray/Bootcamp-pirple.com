const bankAccountBalance = 100
const costOfItem = 123
const hasCreditCard = true
const hasReachedCreditLimit = false

if (bankAccountBalance >= costOfItem) {
    console.log("Congrats! You can pay for this with cash!")
} else if (hasCreditCard && !hasReachedCreditLimit) {
    console.log("You can pay for this with credit")
} else {
    console.log("Sorry, you cannot purchase this item! :(")
}
