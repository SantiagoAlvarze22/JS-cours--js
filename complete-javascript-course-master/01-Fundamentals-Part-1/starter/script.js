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

// if (bmiM1 > bmiJ1) {
//   console.log(`Mark's BMI ${bmiM1} is higher than jonh's BMI ${bmiJ1}`)
// } else {
//   console.log(`John's BMI ${bmiJ1} is higher than john's BM1 ${bmiJ1}`)
// }

// if (bmiM2 > bmiJ2) {
//   console.log(`Mark's BMI (${bmiM2}) is higher than jonh's BMI (${bmiJ2})`)
// } else {
//   console.log(`John's BMI (${bmiJ2}) is higher than john's BM1 (${bmiM2})`)
// }
// console.log(bmiM2, bmiJ2, markHigherBMI2)

//type converstion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(typeof (Number(inputYear) + 10)) //string //number

// console.log(String(23), 23)

// //type coercion

// console.log('hey' + 23 + 'hey')
// console.log('23' + '23')
// console.log('23' - '23' - 12)
// console.log('23' / '2')
// console.log('23' * '5')

// let n = '1' + 1; // '11'
// n = n - 1 // 10

// console.log(n)


//4 falsy value: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean('hey'));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job!! ');
// }

// let height = 0;
// if (height) {
//   console.log('Yas');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = 18;

// if (age === 18) console.log('You just became an adult ');

// if (age == 18) console.log('YOU JUST BECAME AN ADULT :) (LOOS E)');

// const favourite = Number(prompt("What's your favourite number"))

// console.log(favourite)

// if (favourite === 100) {
//   console.log('Hey you guess my favourite number')
// } else if (favourite === 7) {
//   console.log('is a cool number')
// } else {
//   console.log('Reload and try again')
// }

// if (favourite !== 23) {
//   console.log('why not 23')
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasGoodVision || hasDriversLicense);
// console.log(hasGoodVision || !hasDriversLicense);
// console.log(hasGoodVision && !hasDriversLicense);

// const isTired = false;

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// shouldDrive ? console.log('Sara is able to drive') : console.log('someone else should drive')

/*
  Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const DolphinsScore1 = 96;
// const DolphinsScore2 = 108;
// const DolphinsScore3 = 89;

// const averageDolphinsScore = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
// console.log(averageDolphinsScore)

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const averageKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(averageKoalasScore)

// const dolphinsWins = averageDolphinsScore > averageKoalasScore;

// //compare 
// if (dolphinsWins) {
//   console.log(`Dolphins team has won! with an average of ${Math.ceil(averageDolphinsScore)}`)
// } else {
//   console.log(`Koalas team has won! with an average of ${Math.ceil(averageKoalasScore)}`)
// }

// //Bonus 1

// const DolphinsScoreBonus1 = 97;
// const DolphinsScoreBonus2 = 112;
// const DolphinsScoreBonus3 = 101;

// const averageDolphinsBonusScore = (DolphinsScoreBonus1 + DolphinsScoreBonus2 + DolphinsScoreBonus3) / 3;
// console.log(averageDolphinsBonusScore)

// const koalasScoreBonus1 = 109;
// const koalasScoreBonus2 = 95;
// const koalasScoreBonus3 = 123;

// const averageKoalasBonusScore = (koalasScoreBonus1 + koalasScoreBonus2 + koalasScoreBonus3) / 3;
// console.log(averageKoalasBonusScore)

// if (averageDolphinsBonusScore > averageKoalasBonusScore && (DolphinsScoreBonus1 % 100 && DolphinsScoreBonus2 > 100 && DolphinsScoreBonus3 > 100)) {
//   console.log(`Dolphins won`)
// } else if (averageKoalasBonusScore > averageDolphinsBonusScore && (koalasScoreBonus1 > 100 && koalasScoreBonus2 > 100 && koalasScoreBonus3 > 100)) {
//   console.log(`Kolas won`)
// } else {
//   console.log(`No one won`)
// }

// const day = 'hey';

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     break;
//   case 'tuesday':
//     console.log('do another thing');
//     break;
//   case 'wednesday':
//     console.log('hey another');
//     break;
//   case 'thursday':
//     console.log('stop for a while');
//     break;
//   case 'friday':
//     console.log('finish');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Have fun in your weekend');
//     break;
//   default:
//     console.log('not a valid day');
// }

// //challange 
// if (day === 'monday') {
//   console.log('Plan course structure');
// } else if (day === 'tuesday') {
//   console.log('do another thing');
// } else if (day === 'wednesday') {
//   console.log('hey another');
// } else if (day === 'thursday') {
//   console.log('stop for a while');
// } else if (day === 'friday') {
//   console.log('finish');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Have fun in your weekend');
// } else { console.log('not a valid day'); }


//ternary operator 

// const age = 20;

// age >= 18 ? console.log('es mayor de edad') : console.log('no lo es');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink)

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water'
// }

// console.log(drink2)

//ternary operator is an expression because it returns a value
// console.log(`I want to drink ${age >= 18 ? 'wine' : 'water'}`)

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/
// let bills = 275;
// let value = bills >= 50 && bills <= 300;

// let tip = value ? bills * 0.15 : bills * 0.2;

// console.log(`The bill was $${bills}, the tip was $${tip} and the total value $${bills + tip}`)

// bills = 40;
// value = bills >= 50 && bills <= 300
// tip = value ? bills * 0.15 : bills * 0.2;

// console.log(`The bill was $${bills}, the tip was $${tip} and the total value $${bills + tip}`)

// bills = 430;
// value = bills >= 50 && bills <= 300
// tip = value ? bills * 0.15 : bills * 0.2;
// console.log(`The bill was $${bills}, the tip was $${tip} and the total value $${bills + tip}`)
