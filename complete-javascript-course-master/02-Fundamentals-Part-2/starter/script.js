// 'use strict';

// let hasDriversLicense = false;
// const passTess = true;

// if (passTess) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

function logger() {
  console.log('My name is Santi');
}

//calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//if I want to capture the value that return the function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

//I can  call the value just setting the same function without getting apart the value
console.log(fruitProcessor(5, 0))

const appleOrangeJucie = fruitProcessor(2, 4)
console.log(appleOrangeJucie)