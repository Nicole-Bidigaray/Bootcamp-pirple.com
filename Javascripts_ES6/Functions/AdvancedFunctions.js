var sayHi = function() {
    console.log('Hi')
}

sayHi()

var sayHi = () => {
    console.log("Hi, I´m using an arrow function")
}

sayHi()

const multiplier = (num1, num2) => {
    return num1 * num2
}

console.log(multiplier(5, 10))

const users = [
    {name: "Chris", age:60},
    {name: "Jane", age:30},
    {name: "Billy", age:45}
]

const userNameList = users.map(function(user) {
    return user.name
})

console.log(userNameList)

const users1 = [
    {name: "Chris", age:60},
    {name: "Jane", age:30},
    {name: "Billy", age:45}
]

function mapUserNames(myArr) {
    const userNameList1 = myArr.map((user) => {
        return user.name
    })
    return userNameList1
}

console.log(mapUserNames(users1))

const users2 = [
    {name: "Chris", age:60},
    {name: "Jane", age:30},
    {name: "Billy", age:45}
]

const mapUserNames1 = (myArr) => {
    const userNameList2 = myArr.map((user) => {
        return user.name
    })
    return userNameList2
}

console.log(mapUserNames1(users2))

const users3 = [
    {name: "Chris", age:60},
    {name: "Jane", age:30},
    {name: "Billy", age:45}
]

const mapUserNames2 = (myArr) => myArr.map((user) => {
        return user.name
    })

console.log(mapUserNames2(users3))

const users4 = [
    {name: "Chris", age:60},
    {name: "Jane", age:30},
    {name: "Billy", age:45}
]

const mapUserNames3 = (myArr) => 
    myArr.map((user) => user.age)

console.log(mapUserNames3(users4))

const multiplier1 = (x, y) => x * y

console.log(multiplier1(2, 3))

const multiplier2 = (x, y) => { return x * y}  

console.log(multiplier2(2, 3))

const squarer = (num) => num * num

console.log(squarer(10))

const squarer1 = num => num * num

console.log(squarer1(8))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter(function(num) {
    // return num % 2 === 0
    return num % 2 !== 0
})

console.log(filteredNumbers)

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers1 = numbers1.filter((num) =>
    num % 2 == 1
)

console.log(filteredNumbers1)

const doubledNumbers = (num) => {
    const numberContainer = []
    num.forEach((n) => {
        const doubled = n * 2
        numberContainer.push(doubled)
    })
    return numberContainer
}

const moreNums = [5, 10, 15]

console.log(doubledNumbers(numbers1))

console.log(doubledNumbers(moreNums))

function numberMultiplier(x, y) {
    return x * y
}

console.log(numberMultiplier(5, 10))

function numberMultiplier1(x, y) {
    x = x || 5
    y = y || 10
    return x * y
}

console.log(numberMultiplier1(2, 3))

console.log(numberMultiplier1(2))

function numberMultiplier2(x=5, y=10) {
    return x * y
}

console.log(numberMultiplier2())

console.log(numberMultiplier2(3, 6))

function stringSplitter(str) {
    return str.split(" ")
}

console.log(stringSplitter("Hi there"))

function stringSplitter1(str="How are you?") {
    return str.split(" ")
}

console.log(stringSplitter1())

const initialString = "How are you?"

function stringSplitter2(str=initialString) {
    return str.split(" ")
}

console.log(stringSplitter2())

console.log(stringSplitter2("I am fine"))

const bankAccount = {
    canSpendMoney: true,
    balance: 100
}

function purchaseItem(price, acct=bankAccount) {
    if (acct.canSpendMoney) {
        acct.balance -= price
        if (acct.balance <= 0) {
            acct.canSpendMoney = false
        }
        return true
    } else {
        return false
    }
}

console.log(purchaseItem(99))
// console.log(bankAccount)
// console.log(purchaseItem(1))
// console.log(bankAccount)
console.log(purchaseItem(1, {canSpendMoney: true, balance:40}))
console.log(purchaseItem(40, {canSpendMoney: true, balance:40}))
console.log(purchaseItem(40, {canSpendMoney: false, balance:40}))

function logAllArguments(x, y) {
    console.log(arguments)
    console.log(arguments[1])
}

logAllArguments(1, 2, 3)
logAllArguments(4, 5, 6)

function logAllArguments1(x) {
    const args = Array.prototype.slice.call(arguments, logAllArguments1.length)
    console.log(args)
    console.log(args.sort())
}

logAllArguments1(6, 5, 2, 10, 6)
logAllArguments1("hi", "hello", "how are you")
logAllArguments1(true, 5, 1, 3, 6)
logAllArguments1(10, 5, 1, 3, 6)

function logAllArguments2(x, ...nums) {
    console.log(nums)
    console.log(nums.sort())
    console.log(nums.length)
}

logAllArguments2(10, 5, 1, 3, 6)

function multiply(multiplier3, ...nums) {
    return nums.map((n) => multiplier3 * n)
}

console.log(multiply(10, 5, 1, 3, 6, 10, 3, 5, 10, 30, 10, 3313))

function Dog(years, breed) {
    this.age = years
    this.type = breed
    console.log(this)
}

const spike = new Dog(3, "Golden Retriever")
const fido = new Dog(5, "Poodle")
// console.log(spike)
// console.log(fido)

// function Dog1(years, breed) {
//     const that = this
//     that.age = years
//     that.type = breed
//     setInterval(function() {
//         that.age += 1
//         console.log(that)
//     }, 1000)
// }

// const spike1 = new Dog1(3, "Golden Retriever")
// const fido1 = new Dog1(5, "Poodle")

function Dog2(years, breed) {
    this.age = years
    this.type = breed
    setInterval(() => {
        this.age += 1
        console.log(this)
    }, 5000)
}

const spike2 = new Dog2(3, "Golden Retriever")
const fido2 = new Dog2(5, "Poodle")
