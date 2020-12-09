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

export.addTocart = function (prod, quantity) {
      cart.push({ prod, quantity });
      console.log(`${quantity} ${prod} added to the shopping cart`);
    };

    //import 
    const {addTocart} = require('./shoppingCart.js')