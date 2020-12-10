import cloneDeep from 'lodash';
//importing value
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('breads', tq);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing module');

// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.tq);

// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';

// add('pizza', 3);
// add('apples', 20);
// add('oranges', 13);
// console.log(cart);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (prod, quantity) {
//     cart.push({ prod, quantity });
//     console.log(`${quantity} ${prod} added to the shopping cart`);
//   };

//   const orderStock = function (prod, quantity) {
//     cart.push({ prod, quantity });
//     console.log(`${quantity} ${prod} added to the shopping supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 2);
// console.log(ShoppingCart2);

//commonJS moduless

// export.addTocart = function (prod, quantity) {
//       cart.push({ prod, quantity });
//       console.log(`${quantity} ${prod} added to the shopping cart`);
//     };

//     //import
//     const {addTocart} = require('./shoppingCart.js')

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 50 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

//creating a deep clone through lodash
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('jonas');

console.log('Jonas' ?? null);

console.log(state.cart.find(el => el.quantity >= 2));

import 'core-js/stable';

//polyfillung async functions
import 'regenerator-runtime/runtime';
