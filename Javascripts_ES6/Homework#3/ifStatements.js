/**
 * ES6 Homework assignment #3 - Statemnets and Operators.
 *
 * This assignment demonstrates using the if statement to derive
 * a logical outcome.
 *
 * Code example 1 is used to evaluate the following logic:
 *
 *    All men are mortal
 *    Socrates is a man.
 *    Therefore, Socrates is mortal.
 *
 * Code example 2 evaluates the following logic:
 *
 *    This cake is either vanilla or chocolate.
 *    This cake is not chocolate.
 *    Therefore, this cake is vanilla.
 *
 */


let isAman = true

// if Socrates is a man, then it is also mortal
if (isAman) {
    console.log("Socrates is mortal")
}
else {
    console.log("Socrates might be inmortal")
}

let isVanilla = false
let isChocolate = false

if (isVanilla && isChocolate) {
    console.log("This cake is either vanilla or chocolate, it can´t be both.")
}
else if (!(isVanilla || isChocolate)) {
    console.log("Your cake must contain vanilla or chocolate.")
}
else if (isVanilla) {
    console.log("is a vanilla cake")
}
else {
    console.log("is a chocolate cake")
}