const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allowedProducts = {
  lisbon: 5,
  others: 7,
};

const checkCorrectAllowedProducts = function (cart, numAllowed, city) {
  if (!cart.length) return [];

  // const allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;
  //if city doesn't exist it would return undefine, and if it returns undefined would be returning the allowedProducts.others
  const allowed = numAllowed?.[city] ?? allowedProducts.others;

  const newCart = cart.map(item => {
    const { product, quantity } = item;
    // console.log(product, quantity, allowed);
    return {
      product,
      quantity: quantity > allowed ? allowed : quantity,
    };
  });

  return newCart;
};
const allowedShoppingCart = checkCorrectAllowedProducts(
  shoppingCart,
  allowedProducts,
  'lisbon'
);
console.log(allowedShoppingCart);

const createOrderDescription = function (cart) {
  const { product: p, quantity: q } = cart[0];

  return `Order with ${q} ${p} ${cart.length > 1 ? 'etc...' : '.'}`;

  // if (cart.length > 1) {
  //   return `Order with  q  p  etc...`;
  // } else {
  //   return 'Order with ' + q + ' ' + p + '.';
  // }
};

const orderDescription = createOrderDescription(allowedShoppingCart);

console.log(orderDescription);
