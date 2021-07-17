function Animal(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}

Animal.prototype.sayBreed = function() {
    console.log(`I am a ${this.breed}`);
}

const dog1 = new Animal("Spike", 3, "Labrador");
dog1.sayBreed();

const dog2 = new Animal("Spot", 2, "Golden Retriever");
console.log(Animal.prototype.hasOwnProperty("sayBreed"));
dog2.sayBreed();

Array.prototype.sayHello = function() {
    console.log("Hello there!");
}

const myArrr = []
myArrr.sayHello();