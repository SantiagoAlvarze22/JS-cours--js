'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `hey! ${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //creating New vairable with same name as outer scopes variable
      const firstName = 'Santi';

      //reassigning outer socpes vairbale
      output = 'new ouput!! reassigning';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
    // console.log(add(2 + 3)); //is not defined bc is in an inner scope, however if were without strict mode would be called and executed
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
