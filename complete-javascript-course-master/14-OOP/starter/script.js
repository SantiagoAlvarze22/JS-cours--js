'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //never create a method inside of a constructor functions is A BAD PRACTICE, BC IT WOULD BE CREATED AS  MANY INSTANCES I CREATED, FOR THIS PROTYPE INHERITANCE
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);

// const matilda = new Person('Matilda', 2017);
// console.log(jonas, matilda);

// // console.log(jonas instanceof Person);

// //prototypes

// console.log(Person.prototype);

// //settting new method in my Person constructor function, so every instance of that constructor function will inheritance the method
// Person.prototype.calAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // 1. New {} is created
// // 2. functions is called, this = {}
// // 3. {} linked to prototype
// // 4. function automaticalle return {}

// jonas.calAge();
// matilda.calAge();
// console.log(jonas.__proto__ === Person.prototype);

// //Person.prototype, is not de PERSON prototype, are all the objects that were created by the Person function

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo sapiens';
// console.log(jonas.species, matilda.speciesbg);

// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(Person.prototype);
// console.log(jonas.__proto__.__proto__);
// console.log(Object.prototype);

// console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [6, 7, 6, 9, 7, 8, 9]; // new Array === [] //
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// // Object Oriented Programming (OOP)
// // Coding Challenge #1
// // Your tasks:
// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// // 'speed' property. The 'speed' property is the current speed of the car in
// // km/h
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// // and log the new speed to the console
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// // the new speed to the console
// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// // 'brake' multiple times on each of them
// // Test data:
// // § Data car 1: 'BMW' going at 120 km/h
// // § Data car 2: 'Mercedes' going at 95 km/h
// // GOOD LUCK �

// const Car = function (speed, make) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const bmw = new Car(120, 'BMW');
// bmw.accelerate();
// bmw.brake();

// const mer = new Car(95, 'Mercedes');
// mer.accelerate();
// mer.brake();

///class Expressions
// const PersonCL = class {};

//class declarations
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey  ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that alreadt exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1995);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();
console.log(jessica.age);

//1. classes are NOT hoisted
// 2. classes are first-class citizen
//3. classes are executed in strict mode

const walter = new PersonCl('walter bried', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50; //set is just a property, an I invoke it as if I were setting a value
console.log(account.movements);
