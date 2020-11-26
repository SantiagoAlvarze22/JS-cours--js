'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create a method inside of a constructor functions is A BAD PRACTICE, BC IT WOULD BE CREATED AS  MANY INSTANCES I CREATED, FOR THIS PROTYPE INHERITANCE
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);

const matilda = new Person('Matilda', 2017);
console.log(jonas, matilda);

// console.log(jonas instanceof Person);

//prototypes

console.log(Person.prototype);

//settting new method in my Person constructor function, so every instance of that constructor function will inheritance the method
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

// 1. New {} is created
// 2. functions is called, this = {}
// 3. {} linked to prototype
// 4. function automaticalle return {}

jonas.calAge();
matilda.calAge();
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species, matilda.speciesbg);

console.log(jonas.hasOwnProperty('species'));
