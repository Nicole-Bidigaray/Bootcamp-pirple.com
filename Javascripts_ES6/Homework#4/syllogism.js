/**
 * ES6 Homework assignment #4 - Functions.
 *
 * Let's go back to your syllogism (logical argument) examples from Homework #3. 
 * Now it's time to turn those loose bits of logic into functions. 
 * Rather than having procedure that demonstrates that Socrates is mortal, 
 * you should create a function that accepts a name and returns a boolean (True or False) 
 * representing whether that name identifies a man who is mortal or not. 
 * Your function to gracefully handle unexpected inputs 
 * (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.
 *
 */

function syllogism(name) {
    let listObject = {
        'pen': 'object',
        'house': 'object',
        'Socrates': 'man',
        'Dogs': 'animals',
        'trees': 'plants'
    }

    const typemortals = ['man', 'animal', 'plants'];

    if (typeof name != 'string') {
        return 'Error parameter, should be a string';
    }

    if (listObject.hasOwnProperty(name)) {
        if (typemortals.includes(listObject[name])) {
            return true;
        } else {
            return false
        }

    } else {
        return 'Name do not exist';
    }
}

console.log(syllogism('Dogsxpto')); // Name do not exist
console.log(syllogism(123)); // Error parameter, should be a string
console.log(syllogism('Dogs')); // False
console.log(syllogism('Socrates')); // True

/**
*
*
* If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:
* An array of all cake possibilities (vanilla or chocolate)
* A boolean representing whether or not the cake is chocolate.
* It should return a string indicating the actual flavor of the cake.
*
*/

function cakes(flavors, isChocolate) {

    if(!isChocolate) {
        console.log(`This cake is not ${flavors[1]}, therefore, this cake is ${flavors[0]}`)
    } else {
        console.log(`This cake is not ${flavors[0]}, therefore, this cake is ${flavors[1]}`)
 
    }

}

const fv = ['vanilla', 'chocolate'];
cakes(fv, true);