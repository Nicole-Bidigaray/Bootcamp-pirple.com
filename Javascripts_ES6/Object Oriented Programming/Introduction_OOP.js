// Object-oriented JavaScript
/*
    - OOP: basic idea is that you use objects to represent real world things.
      Objects, can contain data and other code to represent info about what
      you´re trying to model
    - Data / methods inside the object is encapsulated
    - In classic OOP, class is defined, then, when an instance of that class
      is created, all the properties and methods are copied(!!!) over to the
      instance.
    - JavaScript is dynamic and does not provide a traditional class implementations per se.
    - JavaScript inheritance is prototype based
    - Each object has a private property called the prototype
    - The prototype can have a protype of its own
    - Nearly all objects in JavaScript are instances of Object
      which sits on top of the prototype chain.
    - The prototype property´s value is an object
    - Think of it as a bucket to store properties and methods
    - Prototype as a template and can have prototype properties of its own
    - "The prototype property is where inherited members are defined"
*/

function Ship() {
    this.floats = true
    this.material = "steel"
    this.whatAmI = function() {
        console.log("I am made of: " + this.material)
    }
}

const myShip = new Ship()
console.log(myShip.material)
myShip.whatAmI()

const myObj = {
    a: 1,
    b: 2,
    valueOf: function() {
        console.log("Got me!")
    }
}

console.log(myObj.a)
console.log(myObj.valueOf())

const myString = "hello"
console.log(myString.charAt(0))
console.log(myString.valueOf())
console.log(myObj.valueOf())
myObj.valueOf()
console.log(myObj.hasOwnProperty("a"))

const myArray = ["a", "b", "c"]
myArray.push("d")
console.log(myArray)

const name1 = {
    name: "Billy",
    age: 16,
    sayName: function() {
        console.log(`My name is ${this.name}`)
    }
}

name1.sayName()

const name2 = Object.create(name1);
name2.name = "Jane Doe";
name2.age = 51;
name2.sayName()

const name3 = Object.create(name2)
console.log(name2.hasOwnProperty("age"))