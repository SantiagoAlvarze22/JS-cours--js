'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  // time: '22:30',
  address: 'Via del sole, 21',
  // mainIndex: 2,
  // starterIndex: 2,
});

//destructuring objects

const { openingHours, name, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

//setting a default value
const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

//Mutatin variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//if I set a curly braces at the beginning of a line, JS would be expecting a block of code however if I am destructuring an object I just have to sorund them with parenthesis
({ a, b } = obj);
// console.log(a, b);

//nested objects
const {
  sat: { open: o, close: c },
} = openingHours;
// console.log(o, c);

//destructuring arrays
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);

let [main, second] = restaurant.categories;
// console.log(main, second);

//without destructuring
// const temp = main;
// main = second;
// second = temp;

// console.log(main, second);

[main, second] = [second, main];
// console.log(main, second);

//receive 2 retunr values from a function
const [starter, main1] = restaurant.order(2, 0);
// console.log(starter, main1);

//nested destruncting
const nested = [2, 4, [5, 6]];
// let [i, , j] = nested;
// const [t, s] = j;
// console.log(t, s);

const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
const [p, q, r] = [8, 9];
// console.log(p, q, r);
