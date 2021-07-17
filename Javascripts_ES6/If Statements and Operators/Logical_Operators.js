const bankAccountBalance = 1
const costOfItem = 123
const canSpendMoney = true
const hasCreditCard = true
const hasReachedCreditLimit = false
const creditLimit = 200

if (bankAccountBalance >= costOfItem && canSpendMoney === true && costOfItem < 150)
    {
        console.log("You can purchase item!")
    }

if (bankAccountBalance >= costOfItem || hasCreditCard === true) {
    console.log("You can purchase the item!")
}

if ((bankAccountBalance >= costOfItem) || (hasCreditCard === true && creditLimit >= costOfItem)) {
    console.log("You can purchase this item!")
}

if ((bankAccountBalance >= costOfItem) || (hasCreditCard && !hasReachedCreditLimit)) {
    console.log("Congrats! You can make this purchase :)")
}