/**
 * 
 * 
 *  Diferences between var, let and const
 * 
 */


/**
 * VAR
 * The diference is about the scope, for example: var, the global scope. When use var the variable is acessible globaly
 */

var cars = 'Fiat';
function agencia() {
    cars = 'ford'
    return cars;
}

console.log(agencia());
console.log(cars);


/**
 * Let
 * 
 * The let is limit in the scope, 
 */

var cars2 = 'Fiat';
function agencia2() {
    let cars2 = 'chevrolet'
    return cars2;
}

console.log(agencia2());
console.log(cars2);


/**
* CONST    
* 
* The const is limit in the scope, and it not permit change the value of the variable, but permit change value of the object
*/

// const data = '2020';
// data = '2021';
// console.log(data); // TypeError: Assignment to constant variable.


// In object

const datas = { 'd1': '2020', 'd2': '2021' }

datas.d1 = '2020';

console.log(datas);