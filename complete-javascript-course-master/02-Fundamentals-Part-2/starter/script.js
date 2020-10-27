// 'use strict';

// let hasDriversLicense = false;
// const passTess = true;

// if (passTess) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

// function logger() {
//   console.log('My name is Santi');
// }

//calling, running or invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

//if I want to capture the value that return the function
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

//I can  call the value just setting the same function without getting apart the value
// console.log(fruitProcessor(5, 0))

// const appleOrangeJucie = fruitProcessor(2, 4)
// console.log(appleOrangeJucie)

//function declaration || function statement

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
//   // const age = 2037 - birthYear;
//   // return age;
// }

// const age1 = calcAge1(1991);
// console.log(age1)

//Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }


// const age2 = calcAge2(1991)
// console.log(age1, age2)

// //arraw function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// // console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Santiago Alvarez'))

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   // return retirement;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`)
//     return -1;
//   }

// }

// yearsUntilRetirement(1991, 'Santi')

/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 */

// const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3

// const averageD1Dolphins = calcAverage(44, 23, 71);
// const averageD1Koalas = calcAverage(65, 54, 49);

// const averageD2Dolphins = calcAverage(85, 54, 41);
// const averageD2Koalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolhins, avgKoalas) {
//   console.log(avgDolhins, avgKoalas)
//   if (avgDolhins > (2 * avgKoalas)) {
//     console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`)
//   } else if (avgKoalas > (2 * avgDolhins)) {
//     console.log(`Kolas win (${avgKoalas} vs ${avgDolhins})`)
//   } else {
//     console.log('No one Win!!!')
//   }
// }

// checkWinner(averageD1Dolphins, averageD1Koalas)

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends)

// const years1 = new Array(1991, 1984, 2008, 2020);
// console.log(years1)

// //show the last element
// console.log(years1[years1.length - 1])

// //position
// console.log(friends[2])

// //change the value in a position
// friends[2] = 'Dave';
// console.log(friends)

// const firstName = 'Santi'
// const santi = [firstName, 'Alvarez', 2037 - 1991, 'teacher', friends];
// console.log(santi)
// console.log(santi.length)

// //exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[2])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [age1, age2, age3]
// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends)

// //Add element
// //push method 
// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// //unshift
// friends.unshift('John')
// console.log(friends)

// //Remove elements

// //pop

// const popped = friends.pop(); //return the remove value
// console.log(popped)
// console.log(friends)

// //shift
// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Steven')) //index which the element is located
// console.log(friends.indexOf('blue')) //-1 bc does not exist

// console.log(friends.includes('Steven')); //return a Boolean

// if (friends.includes('Steven')) {
//   console.log('call Steven')
// }

/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */


// const calcTip = function (billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.20;
//   }
// }

// const tip = calcTip(100);
// console.log(tip);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);



// console.log(jonas.age)
// console.log(jonas['job'])

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('what would you like to know??');
// // console.log(jonas[interestedIn])

// // if (jonas[interestedIn]) {
// //   console.log(jonas[interestedIn])
// // } else {
// //   console.log('Wrong Request')
// // }

// jonas.location = 'Portugal'
// jonas['twitter'] = '@saoalvarez'

// console.log(jonas)

// //challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)


// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

// calcAge: function (birthYear) {
//   return 2017 - birthYear;
// }

// calcAge: function () {
//   // console.log(this)
//   return 2037 - this.birthYear;
// }

//   calcAge: function () {
//     //creating a new property in the object
//     this.age = 2037 - this.birthYear;
//     return this.age
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he ${this.hasDriversLicense ? 'has' : 'does not have'} a driver's license`
//   }
// }


// console.log(jonas.age)

// console.log(jonas['calcAge']());
// console.log(jonas.getSummary())

/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2)
    return this.BMI
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2)
    return this.BMI
  }
}

//I need to explecitely call the method and the new variable will be add


john.calcBMI()
console.log(john)
mark.calcBMI()
console.log(mark)

if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName} BM (${mark.BMI}) is higher than ${john.fullName} (${john.BMI}) BMI`)
} else {
  console.log(`${john.fullName} BM (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI}) BMI`)
}