'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `hey! ${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //creating New vairable with same name as outer scopes variable
      const firstName = 'Santi';

      //reassigning outer socpes vairbale
      output = 'new ouput!! reassigning';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
    // console.log(add(2 + 3)); //is not defined bc is in an inner scope, however if were without strict mode would be called and executed
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
// calcAge(1991);

//Hoisting
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//functions

// console.log(addDecl(2, 5));
// console.log(addExpr(3, 5));
// console.log(addArrow(23, 8));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//example
console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products deleted');
}

//Var creating new property in teh object model

var x = 1;

let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
