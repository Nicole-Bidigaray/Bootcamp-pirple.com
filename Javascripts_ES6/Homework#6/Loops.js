/*
* Homework Assignment #6: Loops
*
*/
// 1.Aim is write a programme that prints 1 to 100
// 2. But for multiples of 3 print "Fizz"
//    instead of the number and for the multiples of five print "Buzz".
// 3. for numbers multiples of both three and five print "FizzBuzz".

// create function
let lastNum = 101;
let main = function(num){
  if (typeof(num) !== "number"){
    console.log("invalid input other than number");
    return;
  }
  for (let i = 1 ; i < num ; i += 1) {
    let findPrime = isPrime(i);
    if(findPrime === true){
      console.log("Prime Number :" + i);
    }
    if (i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz");
      continue;
    }
    if (i % 3 == 0){
      console.log("Fizz");
      continue;
    }
    if(i % 5 == 0){
      console.log("Buzz");
      continue;
    }
    console.log(i);
  }
}

//check for prime number from 1 to 100
// below function returns true or false about prime numbers
function isPrime(value) {
    for(let j = 2 ; j < value ; j++) {
        if(value % j === 0) {
            return false;
        }
    }

    return value > 1;
}
//let vv = isPrime(10);
//console.log(vv);

// main function execute and check from 1 to 100
main(lastNum);