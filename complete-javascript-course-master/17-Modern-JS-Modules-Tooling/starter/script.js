//importing value
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('breads', tq);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

add('pizza', 3);
add('apples', 20);
add('oranges', 13);
console.log(cart);
