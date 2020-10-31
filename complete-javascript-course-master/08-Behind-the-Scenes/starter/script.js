'use strict';

function calcAge1(birthYear) {
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

// var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//functions

// console.log(addDecl(2, 5));
// console.log(addExpr(3, 5));
// console.log(addArrow(23, 8));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//example
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products deleted');
}

//Var creating new property in teh object model

var x = 1;

let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
// console.log(this);
// console.log('------con function expression-----');

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log('this ------' + this);
// };

// calcAge(23);

// console.log('----con array function-----');
// const calcAge2 = saludo => {
//   console.log(saludo);
//   console.log('this ------' + this);
//   console.log(this);
// };

// calcAge2('Hye');

// console.log('------con function declaration-----');
// function greet(saludo) {
//   console.log(saludo);
//   console.log('this ------' + this);
// }

// greet('hey soy saludo function declaration');

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

const matilda = {
  year: 2017,
};

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

//copia la funcion pero cuando realiza la consulta dentro de ella seria que hiciera la consulta al nuevo objeto, pero como no hay un nuevo objeto sino una nueva funcion entonces por eso hay error
// const f = jonas.calcAge;
// f();

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1;
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //solution2
    //porque arrow function toma el objeto del padre
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

// jonas.greet();
// jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
// addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// addArrow(2, 5, 6);

function addArrow1(a, b) {
  console.log(arguments);
  return a + b;
}

// addArrow1(2, 5, 6);

//Primitive vs objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend: ', friend);
console.log('Me', me);
