function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.makeNoise = function() {
    console.log(`generic animal noise`);
}

function Dog(name, age, breed) {
    Animal.call(this, name, age);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeNoise = function() {
    console.log("bark bark, woof");
}

function Cat(name, age, coloration) {
    Animal.call(this, name, age);
    this.coloration = coloration;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scratchPost = function() {
    if (this instanceof kitten) {
        console.log("kitty scratched the post")
    } else {
        console.log("Cat scratched the post")
    }
}

function kitten(name, age, coloration, litter) {
    Cat.call(this, name, age, coloration);
    this.litter = litter;
}
kitten.prototype = Object.create(Cat.prototype);
kitten.prototype.constructor = kitten;

const barky = new Dog("Barky", 1, "Chihuahua");
const kitty = new Cat("Kitty", 3, "tabby");
const tinykitty = new kitten("Spot", 0.3, "orange", 1);
tinykitty.makeNoise();
tinykitty.scratchPost();
kitty.scratchPost();
kitty.makeNoise();
kitty.scratchPost();
console.log(barky.name);
barky.makeNoise();