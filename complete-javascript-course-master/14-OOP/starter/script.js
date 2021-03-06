'use strict';

// const Person = function (firstName, birthYear) {
// this.firstName = firstName;
// this.birthYear = birthYear;

//never create a method inside of a constructor functions is A BAD PRACTICE, BC IT WOULD BE CREATED AS  MANY INSTANCES I CREATED, FOR THIS PROTYPE INHERITANCE
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// };

// const jonas = new Person('Jonas', 1991);

//static method
// Person.hey = function () {
//   console.log('Hey there :)');
//   console.log(this); //is person or it depends on the object that is called the function. It'll change
// };

//method set in the constructor and not in the constructor prototype property, for that is not being inherited
// Person.hey();

// jonas.hey(); //it can not be accessed bc is not in the prototype of the jonas object

// Person.prototype.greeting = function () {
//   console.log('Hey, I am not a static method');
// };

// Person.greeting(); //it doesn't exist

// jonas.greeting();

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
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //instance methods
//   //Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey  ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //set a property that alreadt exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //static methods
//   static hey() {
//     console.log('holi');
//   }
// }

// PersonCl.hey();
// const jessica = new PersonCl('Jessica Davis', 1995);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// jessica.greet();
// console.log(jessica.age);

// //1. classes are NOT hoisted
// // 2. classes are first-class citizen
// //3. classes are executed in strict mode

// const walter = new PersonCl('walter bried', 1965);

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50; //set is just a property, an I invoke it as if I were setting a value
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   //this is no a constructor function bc is not call by the new keyword
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven);

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();
// console.log(sarah);

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

// class CarCL {
//   constructor(speed, make) {
//     this.speed = speed;
//     this.make = make;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCL(120, 'Ford');

// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   //I use the method call bc is going to set the this keyword to the new object that I am creating with the student constructor function
//   Person.call(this, firstName, birthYear); //is not a regular function, bc it it were the this keyword would be set it to undefined
//   this.course = course;
// };

// //object create, creates a new prototype and it points out to the object prototype that it wants, allowing the protype chain
// Student.prototype = Object.create(Person.prototype);

// // Student.prototype = Person.prototype //it wouldn't be a really good choice because it means the prototype chain it won't be meet, and they would be the exact same object

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);

// mike.introduce();
// mike.calcAge();
// //Comprobando el prototype chain
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// // console.log(mike.__proto__.__proto__);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // console.log(tesla);

// //linked the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(90);

// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance methods
  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey  ${this.fullName}`);
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

  //static methods
  static hey() {
    console.log('holi');
  }
}

//If I dont have any new property, I don't need to write a consturctor or super, constructor class and super the parent class
// class StudentCl extends PersonCl {
//   // constructor(fullName, birthYear, course) {
//   //   //Always need to happen first
//   //   super(fullName, birthYear);
//   //   this.course = course;
//   // }
// }

// const martha = new StudentCl('Martha Jones', 2021, 'Computer Science');

//para que una clase herede de otra clase
//super, constructor function of the parent class, viariables set in the parent constructor

//prototype chain is automatically set for the extends keyword and I don't need to use the create object

//The calcAge method is overwrite because it appears first in the prototype chain
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, btu as a student I feel more like ${
        2037 - this.birthYear + 10
      } years old `
    );
  }
}

const martha = new StudentCl('Martha Jones', 2021, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.greet();

//inheritance between classes with object.create()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentsProto = Object.create(PersonProto);
StudentsProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentsProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentsProto);
jay.init('jay', 2010, 'computer');

jay.introduce();
jay.calcAge();

//public fields
//private fields
//public methods
//private methods
// there is also the static version

//field as a property that is going to be in all instances

//another example
class Account {
  //1. public fields, they're not going to be in the proptotype, they are going to be in the instances
  locale = navigator.language;

  //2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; //redifining the pin keyword
    // this._movements = []; //adding underscore toi make my variable private, is a convention, and to the encapsulation, it is not private is now  PROTECTED PROPERTY
    // this.locale = navigator.language;

    console.log(`Thans for opening an account, ${owner}`);
  }

  //public methdos
  //PUBLIC INTERFACE
  getMovements() {
    return this.#movements;
  }

  //public interface of our object
  deposit(val) {
    this.#movements.push(val);
    return this; //return this to making chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //is a method is going to be just internally to the bank, is a convention
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approve');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  //4. private methods
  // //is a method is going to be just internally to the bank, is a convention
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1.movements.push(-140);

// console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// console.log(acc1.#pin);

// console.log(acc1.#movements);

Account.helper();

//chaining metods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);

console.log(acc1.getMovements());

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
// GOOD LUCK �

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
}

class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);

    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla = new EVCL('Tesla', 120, 23);

// console.log(tesla.#charge);

tesla
  .accelerate()
  .chargeBattery(100)
  .accelerate()
  .brake()
  .brake()
  .accelerate()
  .chargeBattery(50);
