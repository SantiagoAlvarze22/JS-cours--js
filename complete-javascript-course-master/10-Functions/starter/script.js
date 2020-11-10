'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(bookings);
  bookings.push(booking);
};

// createBooking(1292);
// createBooking(122, undefined, 12300);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23425435232345,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 23425435232345) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//is the same as doing
const flightNum = flight;
const passenger = jonas;

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`The Original string ${str}`);
  console.log(`Transformed String: ${fn(str)} `);
  console.log(`Transformed by: ${fn.name}`);
  console.log('---------------------------');
};

// transformer('JavaScript is the best', upperFirstWord);

// transformer('JavaScript is the best', oneWord);

const high5 = function () {
  // console.log('hi');
};

// document.body.addEventListener('click', high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//using arrow functions
// const greet1 = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet1 = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// // greeterHey('Santiago');

// const greetsanti = greet1('Hola');
// // greetsanti('Santi');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Santiago Alvarez');

// lufthansa.book(635, 'Andres Berrio');

// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book.call(eurowings, 23, 'Andres Mcllister');
// book.call(lufthansa, 12, 'Andrea Boccelli');

// console.log(lufthansa.bookings);

const swiis = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

// book.call(swiis, 23, 'Andres Mcllister');
// console.log(swiis.bookings);

//apply method
const flightData = [583, 'George Cooper'];
// book.apply(swiis, flightData);
// console.log(swiis);

// book.call(swiis, ...flightData);
// console.log(swiis);

//bind
// book.call(swiis, ...flightData);
//is going to set a new function where the eurowings is going to be always the this keyword (the object)
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiis);

// bookEW(23, 'Steven Williams');
// console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Santiago');
// bookEW23('Hector Monsalve');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);
  this.planes++;
  // console.log(this.planes);
};

//in addEventListeners the keyword is pointing to the document
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

//returning a new specific functions with the addTax
const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

//another waycl
const addingTAX = function (rate) {
  return function addingVAT(value) {
    return value + value * rate;
  };
};

const taxes = addingTAX(0.1);
// console.log(taxes(200));

/*Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section  */

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const questionPrompt = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (
      questionPrompt === 0 ||
      questionPrompt === 1 ||
      questionPrompt === 2 ||
      questionPrompt === 3
    ) {
      // typeof questionPrompt === 'number' &&
      //   questionPrompt < this.answers.length &&
      //   this.answers[questionPrompt]++;
      this.answers[questionPrompt]++;
      // console.log(this.answers);
    } else {
      alert('Wrong choice do it again!');
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      // console.log(this.answers);
    } else if (type === 'string') {
      // console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// console.log(poll.answers);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//IIFE

const runOnce = function () {
  console.log('This will never run again');
};

(function () {
  // console.log('This will never run again function expression');
})();

// (() => console.log('This will never run again arrow function'))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We r now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each wi th ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);

/* Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
 ;*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
