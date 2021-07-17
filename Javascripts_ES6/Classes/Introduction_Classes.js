/*  
    Object-oriented JavaScript Part2: Classes
    Classes in ES6 are just syntatical sugar over JavaScript's
    existing prototype-based inheritance
    Simple, clean syntax to create objects and take care of inheritance.
*/

// Pre-ES6 way:
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.greetings = function() {
//     console.log("Greetings :D")
// }

// function Employee(name, age, role) {
//     Person.call(this, name, age)
//     this.role = role
// }

// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee

// const bill = new Employee("Bill", 41, "janitor")
// console.log(Person.prototype)
// bill.greetings()


// Classes are not hoisted
// Classes - a sort of special function
// Class method:

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const bob = new Person("Bob", 30)
// console.log(bob)
// console.log(Person.prototype)


// const Person = class {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const bill = new Person("Bill", 30)
// console.log(bill)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greetings() {
        console.log("Classes R kewl")
    }
}

const janeDoe = new Person("Jane Doe", 45)
janeDoe.greetings()

Person.prototype.greetings = function() {
    console.log("Now I say something else :D")
}
janeDoe.greetings()