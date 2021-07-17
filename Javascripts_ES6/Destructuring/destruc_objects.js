// Object destructuring
const myObj = {firstName: "Chris", lastName: "Jones", age: 16, height: "6ft"}
const {lastName, height, firstName} = myObj
console.log(lastName, height, firstName)

let myVar1, myVar2
const myObj2 = {myVar1: "a", myVar2: "b"}
({myVar1, myVar2} = myObj2)

// Assigning new variables names
const myObj3 = {q:"cool!", w:"oh yeah!", e:"nice :D", r:"awesome!"}
const {q: cool, w, e: nice, r} = myObj3
console.log(cool, w, nice, r)

const myObj4 = {uuid: 134314309, userName: "es6rulez", loggedIn: new Date()}
const {uuid: userID, userName: name, loggedIn: lastLoginDate} = myObj4
console.log(lastLoginDate.toLocaleString())

function stateUser(obj) {
    const {user = null, memberType} = obj
    if (!user) {
        console.log("Error! No user name entered >:(")
        return
    } else {
        console.log(`Username: ${user}, membership type: ${memberType}`)
    }
}

const member1 = {user: "Steve", memberType: "premium"}
const member2 = {memberType: "free"}

stateUser(member1)

function sayIfValid({prop, a111}) {
    const internalObj = {
        prop,
        a111,
        constructed: true
    }
    return internalObj
}

const myObj6 = {
    prop: "I am valid",
    proop: "I am not valid",
    a111: "I am also not valid"
}

const myConstructedObj = sayIfValid(myObj6)
const {constructed} = myConstructedObj

console.log(sayIfValid(myObj6))

const myObj7 = {
    title: "My address book",
    entries: [
        {
            name: "Bob",
            number: "555-5555",
            address: "123 Fake St"
        },
        {
            name: "Jill",
            number: "555-1234",
            address: "155 Fake St"
        },
        {
            name: "Billy",
            number: "555-8888",
            address: "555 Fake St"
        }
    ],
    myPhone: "555-1111",
}
const {title, entries} = myObj7
for (const {name, address} of entries) {
    console.log(`Name: ${name}, address: ${address}`)
}

const myObj8 = {
    myProp1: "Ahhh!",
    myProp2: [20, 50]
}

const {myProp1, myProp2: [ ,  yy]} = myObj8
console.log(yy)

