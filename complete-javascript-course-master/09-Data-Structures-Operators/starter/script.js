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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...othersIngredients) {
    console.log(mainIngridient);
    console.log(othersIngredients);
  },
};

//USE ANY DATA Type, return any data type, short-circuiting
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(true && 0);

restaurant.numGuess = 20;
// const guests1 = restaurant.numGuess ? restaurant.numGuess : 10;
// console.log(guests1);
// console.log(restaurant);

restaurant.numGuess = 10;
const guests2 = restaurant.numGuess || 10;
console.log(guests2);

//Nullish: null and undefined(NOT 0 or '')
const guestsCorrect = restaurant.numGuess ?? 10;
console.log(guestsCorrect);

// console.log(0 && 'jonas'); //when the first value is falsy will be returning that value inmmediately (it doesn't matter if it is not the first one value, it must be the first value in de line)

// console.log('Hello' && 23 && null && 'jonas'); //would be null is the first falsy value

//practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
// console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'gNOCCI'];
// console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menuarr = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menuarr);

//iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = 'Jonas';
const letters = [...str, '', 'S.'];
// console.log(letters);

//real world example
// const ingredients = [
//   prompt("let's make pasta Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

//objects

const newRestaurant = { founderIn: 1988, ...restaurant, founder: 'guiseepe' };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristourante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//rest operator
const arr2 = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, rissotto, otherFood);

//object, the remaining object would be store in an object
const { sat, ...weeksdays } = restaurant.openingHours;
// console.log(sat, weeksdays);

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// add(2, 3);
// add(5, 3, 7, 3);
// add(1, 24, 5, 67, 423, 24, 7, 8, 8);

const y = [1, 23, 5, 6];
// add(...y);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   // time: '22:30',
//   address: 'Via del sole, 21',
//   // mainIndex: 2,
//   // starterIndex: 2,
// });

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
// let a = 111;
// let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//if I set a curly braces at the beginning of a line, JS would be expecting a block of code however if I am destructuring an object I just have to sorund them with parenthesis
// ({ a, b } = obj);
// console.log(a, b);

//nested objects
const {
  sat: { open: o, close: c },
} = openingHours;
// console.log(o, c);

//destructuring arrays
const arr1 = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
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
