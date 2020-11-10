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

book.call(eurowings, 23, 'Andres Mcllister');
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

bookEW(23, 'Steven Williams');
// console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Santiago');
bookEW23('Hector Monsalve');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//in addEventListeners the keyword is pointing to the document
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//returning a new specific functions with the addTax
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

//another waycl
const addingTAX = function (rate) {
  return function addingVAT(value) {
    return value + value * rate;
  };
};

const taxes = addingTAX(0.1);
console.log(taxes(200));
