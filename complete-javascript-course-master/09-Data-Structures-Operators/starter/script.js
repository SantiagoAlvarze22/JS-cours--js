'use strict';
const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sund'];

const openingHours1 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours1,

  //new method to write a function
  order(starterIndex, mainIndex) {
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

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//with optional chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sund'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'close';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Method that it doesnt exist
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//arrays
const users = [
  {
    name: 'Jonas',
    email: 'hehehe@fd.co',
  },
];

console.log(users[0]?.name ?? 'User array empty');

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
// console.log(guests2);

//Nullish: null and undefined(NOT 0 or '')
const guestsCorrect = restaurant.numGuess ?? 10;
// console.log(guestsCorrect);

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

//for of loop

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu1) console.log(item);
// for (const [i, el] of menu1.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu1.entries()]);
/*Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [gk1, ...fieldPlayers1] = game.players[0];
const [gk2, ...fieldPlayers2] = game.players[1];

// const { players1, players2 } = game.players;

const players1 = [gk1, ...fieldPlayers1];
const players1Final = [...players1, 'Thiago', 'Cautinho', 'Perisio'];
// console.log(players1Final);

const players2 = [gk2, ...fieldPlayers2];

// console.log(...players1, ...players2);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const team1 = game.odds['team1'];
// const draw = game.odds['x'];
// const team2 = game.odds['team2'];

const {
  odds: { team1, x: draw, team2 },
} = game;

//team most likely to win
// console.log(team1, team2);
// team1 < team2 && console.log('The team 1 is most likely to win');
// team1 > team2 && console.log('The team2 is most likely to win');

// console.log(team1, draw, team2);

const printGoals = (...nameOfPlayers) => {
  console.log(`${nameOfPlayers.length} goals were score`);
  let sum = 0;
  for (let i = 0; i < nameOfPlayers.length; i++) {
    if (
      nameOfPlayers[i] === 'Lewandowski' ||
      nameOfPlayers[i] === 'Gnarby' ||
      nameOfPlayers[i] === 'Lewandowski' ||
      nameOfPlayers[i] === 'Hummels'
    ) {
      console.log(`${nameOfPlayers[i]}: 1`);
      sum += 1;
    } else {
      console.log(`${nameOfPlayers[i]}: 0`);
    }
  }
  console.log(
    `according to the score array, and comparing with the name of the players this is the real amount of goals ${sum}`
  );
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
