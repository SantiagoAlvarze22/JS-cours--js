// let js = 'amazing';
// // if (js === 'amazing') alert('js is ');

// // console.log(7 + 77 + 10);

// // let firstName = 'Santi';
// // console.log(firstName);

// //LECTURE: Values and Variables

// /*. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console */

// let country = 'Colombia';
// let continent = 'America';
// let population = 58000000;

// // console.log(country,
// //   continent,
// //   population)

// let javascriptIsFun = true;
// // console.log(javascriptIsFun)

// // console.log(typeof javascriptIsFun) //boolean
// // console.log(typeof population)
// // console.log(typeof continent)

// // javascriptIsFun = 'JsIsFun';
// // console.log(typeof javascriptIsFun)

// //undefined

// let year;
// // console.log(typeof year)

// let date = 10;
// date = 20; //it can be reassign  

// //birthday
// //Math operators
// // const now = 2047;
// // const ageJonas = now - 1995;
// // const ageSarah = now - 2018;
// // // console.log('Jonas age:  ' + ageJonas, ', Sarah age: ' + ageSarah, 2 ** 8)

// // const firstName = 'Jonas';
// // const lastName = 'alvarez';
// // const space = ' ';
// // console.log(firstName + space + lastName);

// //assignment operators 
// // let x = 10 + 5; //15
// // x += 10; //x = x+10 
// // x *= 4;
// // x++; // x=x+1
// // x--; //x = x-1
// // x--;
// // console.log(x);

// //Comparison operator //booleans values

// // console.log(ageJonas > ageSarah) //true 
// // console.log(ageSarah >= 18)

// // const isFullAge = ageSarah >= 18;
// // let y, z;
// // y = z = 25 - 10 - 5;
// // console.log(y, z)


// /*
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �
// */

// //Data 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// //Data 2
// const markMass2 = 95;
// const markHeight2 = 1.88;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;


// //BMI1
// const bmiM1 = markMass / (markHeight ** 2);
// const bmiJ1 = johnMass / (johnHeight ** 2);

// //BMI2

// const bmiM2 = markMass2 / (markHeight2 ** 2);
// const bmiJ2 = johnMass2 / (johnHeight2 ** 2);

// const markHigherBMI = bmiM1 > bmiJ1
// const markHigherBMI2 = bmiM2 > bmiJ2

// // console.log(bmiM1, bmiJ1, markHigherBMI)
// // console.log(bmiM2, bmiJ2, markHigherBMI2)


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthdayYear = 1991;
// const year = 2037;

// // c 

// const jonas = `I'm ${firstName}, a ${year - birthdayYear} years old ${job}!`

// console.log(jonas)


// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Is Old')
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sara is too young, wait another ${yearsLeft} years`)
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century)

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

//Data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

//Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;


//BMI1
const bmiM1 = markMass / (markHeight ** 2);
const bmiJ1 = johnMass / (johnHeight ** 2);

//BMI2

const bmiM2 = markMass2 / (markHeight2 ** 2);
const bmiJ2 = johnMass2 / (johnHeight2 ** 2);

const markHigherBMI = bmiM1 > bmiJ1
const markHigherBMI2 = bmiM2 > bmiJ2

// console.log(bmiM1, bmiJ1, markHigherBMI)

if (bmiM1 > bmiJ1) {
  console.log(`Mark's BMI ${bmiM1} is higher than jonh's BMI ${bmiJ1}`)
} else {
  console.log(`John's BMI ${bmiJ1} is higher than john's BM1 ${bmiJ1}`)
}

if (bmiM2 > bmiJ2) {
  console.log(`Mark's BMI (${bmiM2}) is higher than jonh's BMI (${bmiJ2})`)
} else {
  console.log(`John's BMI (${bmiJ2}) is higher than john's BM1 (${bmiM2})`)
}
// console.log(bmiM2, bmiJ2, markHigherBMI2)
