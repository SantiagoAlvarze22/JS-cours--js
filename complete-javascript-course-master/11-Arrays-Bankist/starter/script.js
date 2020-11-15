'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //para limpiar lo que tiene el elemento inicialmente

  //creating a copy of movements bc sort mutate the original array
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type} 
     </div>
      <div class="movements__value">${movement} €</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, movement) => accumulator + movement,
    0
  );

  labelBalance.textContent = `${acc.balance} EUR`;
};

// calcPrintBalance(account1.movements);

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accumulator, mov) => accumulator + mov, 0);

  labelSumIn.textContent = `${incomes} €`;

  const outcoumes = acc.movements
    .filter(mov => mov < 0)
    .reduce((accumulator, mov) => accumulator + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcoumes)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((accumulator, int) => accumulator + int, 0);

  labelSumInterest.textContent = `${interest} €`;
};

// calcDisplaySummary(account1.movements);

const createUsernames = accounts => {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (account) {
  //Display movements
  displayMovements(account.movements);

  //display balance
  calcPrintBalance(account);

  //display summary
  calcDisplaySummary(account);
  // console.log('LOGIN');
};

//Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form for submmitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome mssage
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //once I transfer, delente the inputs
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false; //to create an state of the variable and the sort

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted; //allows to work and when we click sort or just come back to the same value
});

// console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// //slice Elimina los elementos y crea un nuevo array con ellos, don't mutate the array
// // console.log(arr.slice(1, 2));
// arr.slice(2);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));

// console.log(arr.slice(1, -2)); //extract from the first element until de last two elements

// console.log(arr.slice());

// console.log([...arr]);

// //splice mutate the original array, elimina los elementos seleccionados y deja los elementos sobrantes en el array
// // console.log(arr.splice(0, 3));
// arr.splice(-1); //it takes the las element and delete it
// arr.splice(1, 2);
// console.log(arr);

// //Reverse mutate

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

// //join
// console.log(letter.join('-'));
// console.log(movements);

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} :You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOREACH----');
// movements.forEach((movement, i, arr) => {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// //set {doesn't have keys and indexes}
// const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _, set) => {
//   console.log(`${value}:${value}`);
// });

// function take(name) {
//   const nameWell = name.split(' ');
//   const nombres = [];
//   for (const namewell1 of nameWell) {
//     nombres.push(namewell1[0].toUpperCase());
//     // console.log(nombres);
//   }
//   console.log(nombres.join(''));
// }

// take('santiago alvarez');

/**Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far � */

//1,

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   // console.log(dogsJulia);
//   // [dogsJulia[0], ...dogsJulia.slice(-2)];
//   const [...shallowCopyJulia] = dogsJulia;
//   const another = shallowCopyJulia.slice(1, -2);
//   console.log(another);

//   const correctDogsAgeArray = [...another, ...dogsKate];
//   // console.log(correctDogsAgeArray);

//   correctDogsAgeArray.forEach((correctDogAge, i) => {
//     if (correctDogAge > 5) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${correctDogAge} years old `
//       );
//     } else {
//       console.log(
//         `Dog number ${
//           i + 1
//         } is still a puppy and its age is ${correctDogAge} years old`
//       );
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
  .toFixed(2);

// console.log(totalDepositInUSD);

const movementsUSD = movements.map(movement => movement * eurToUsd);
// console.log(movementsUSD);
// console.log(movements);

const movementsUsd = [];
for (const move of movements) {
  movementsUsd.push(move * eurToUsd);
}

// console.log(movementsUSD);

const movementsDescriptions = movements.map((movement, i, arr) => {
  return `Movement ${i + 1}: You ${
    movement > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(movement)}`;
});

// console.log(movementsDescriptions);
const deposits = movements.filter((mov, i, arr) => {
  return mov > 0;
});

// console.log(deposits);

//would be the same like this
const newArr = [];
for (const el of movements) {
  if (el > 0) {
    newArr.push(el);
  }
}

// console.log(newArr);

//withdrawls

const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

//accumulator is like snowball
const balance = movements.reduce((acc, cur, i, arr) => {
  // console.log(`Iteration ${i}: ${acc} addional value ${cur}`);
  return acc + cur;
}, 0);
// console.log(balance);

//reduce way

const balance1 = movements.reduce((acc, cu) => acc + cu, 0);
// console.log(balance1);

//MAXIMUN VALUE OF THE MOVEMENTS ARRAY
const max = movements.reduce((acc, mov) => (mov > acc ? mov : acc));
// console.log(max);

/*Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
 */
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = dogAges => {
//   let humanAge;
//   const humanAgeArray = dogAges.map(dogAge => {
//     if (dogAge <= 2) {
//       return (humanAge = 2 * dogAge);
//     } else if (dogAge > 2) {
//       return (humanAge = 16 + dogAge * 4);
//     }
//   });
//   console.log(humanAgeArray);
//   const dogsAtLeast18Years = humanAgeArray.filter(ages => ages >= 18);
//   console.log(dogsAtLeast18Years);
//   const dogLength = dogsAtLeast18Years.length;
//   // console.log(dogLength);
//   const average = dogsAtLeast18Years.reduce(
//     (acc, ages) => acc + ages / dogLength,
//     0
//   );

//   console.log(`The average of dogs older than 18 is ${average}`);
// };

// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

/*Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

// calcAverageHumanAge(data1);

const calcAverageHumanAge = dogAges => {
  let humanAge;
  const humanAgeArray = dogAges
    .map(dogAge => {
      if (dogAge <= 2) {
        return (humanAge = 2 * dogAge);
      } else if (dogAge > 2) {
        return (humanAge = 16 + dogAge * 4);
      }
    })
    .filter(ages => ages >= 18)
    .reduce((acc, ages, i, arr) => acc + ages / arr.length, 0);
  console.log(humanAgeArray);
};

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//find method
const fristWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(fristWithdrawal);

// console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

for (const account of accounts) {
  account.owner === 'Jessica Davis';
}
// console.log(account);

console.log(movements);

//includes check for equality
console.log(movements.includes(-130));

//some checks for conditions
const anyDeposits = movements.some(mov => mov > 0);

console.log(anyDeposits);

//every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce(
  (accumulator, everyMovement) => accumulator + everyMovement,
  0
);
console.log(overallBalance);

const overallBalanceOtherWay = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((accumulator, everyMovement) => accumulator + everyMovement, 0);

console.log(overallBalanceOtherWay);

//flat map

const overallBalanceOtherWay2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accumulator, everyMovement) => accumulator + everyMovement, 0);

console.log(overallBalanceOtherWay2);

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Numbers
//return < 0, a,b b(keep order)
//return >0, b,a, a (switch order)
console.log(movements);
// movements.sort((a, b) => (a > b ? 1 : -1));
//de menor a mayor
movements.sort((a, b) => a - b);
console.log(movements);

//de mayor a menor
movements.sort((a, b) => b - a);

console.log(movements);

//how to fill arrays

//create a new array with 7 empty places
//I cannot apply the map method, just create a new array with empty values
const x = new Array(7);
console.log(x);

//fill method, fill an empty array

x.fill(1, 3);
console.log(x);
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.fill(23, 2, 6);
console.log(arr1);

//array.rom, array constructor

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

const w = Array.from({ length: 100 }, (cur, i) =>
  Math.round(Math.random(i + 1) * 100)
);
console.log(w);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
