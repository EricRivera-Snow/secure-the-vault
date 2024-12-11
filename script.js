/*1. create a message for the user
2. create three variables, with each one containing an equation that results in one of three options (10, -40, -39). all should use unique operators
3. add comments related to each line and the arithmatic operators utilized
*/

// Assign message for website viewer
let message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
// create alert popup to display viewer message
alert(message);
// created variable equations
const var1 = 5 + 5;
const var2 = 200 / 5;
const var3 = 13 * 3;
// concatenated variables and a new message
let result = `The code is: ${var1} - ${var2} - ${var3}. Good luck on your mission!`;
// display a new message
alert(result);
