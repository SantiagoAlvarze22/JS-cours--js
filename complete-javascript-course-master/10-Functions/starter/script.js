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
