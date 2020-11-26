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

console.log(jonas instanceof Person);

// 1. New {} is created
// 2. functions is called, this = {}
// 3. {} linked to prototype
// 4. function automaticalle return {}
