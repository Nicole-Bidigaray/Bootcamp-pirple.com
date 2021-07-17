// Throw your own exception
/* 
    - Use the throw statement to throw own exception
    - You specify the expression containing the value to be throw
      e.g.: throw expression
    - Can throw any expression
*/

/* function checkIfNum(n) {
    if(isNaN(n)) {
        throw "this is not a number error"
    } else {
        console.log(n)
    }
}

checkIfNum("hey")
checkIfNum(1) */

/* const myObjException = {
    toString: function() {
        return "I am an object exception"
    }
} */

/* function MyException(message) {
    this.message = message
    this.name = "My Exception"
}

const exception = new MyException("hi")
console.log(exception) */

function MyException(message) {
    this.message = message
    this.name = "My Exception"
    this.toString = function() {
        return this.name + ": " + this.message
    }
}

throw new MyException("Missing data")



