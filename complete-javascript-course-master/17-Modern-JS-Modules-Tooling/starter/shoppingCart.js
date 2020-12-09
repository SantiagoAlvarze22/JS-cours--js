//exporting value
console.log('exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (prod, quantity) {
  cart.push({ prod, quantity });
  console.log(`${quantity} ${prod} added to the shopping cart`);
};

const totalPrice = 237;
const totalQuatity = 23;

export { totalPrice, totalQuatity as tq };

export default function (prod, quantity) {
  cart.push({ prod, quantity });
  console.log(`${quantity} ${prod} added to the shopping cart`);
}
