// --------------------------------------Exercises:Level 1-------------------------------------------

/*
1. Display the countries array as a table
2. Display the countries object as a table
3. Use console.group() to group logs
*/

import { countries } from "./countries_data.js";

// console.table(countries);

for (let country of countries) {
  // console.table(country);
}

console.group("Grp 1");
console.log("1");
console.log("2");
console.log("3");
console.groupEnd("Grp 1");
console.group("Grp 2");
console.log("A");
console.log("B");
console.log("C");
console.groupEnd("Grp 2");

// --------------------------------------Exercises:Level 2-------------------------------------------

/*
1. 10 > 2 * 10 use console.assert()
2. Write a warning message using console.warn()
3. Write an error message using console.error()
*/

console.assert(10 > 2 * 10, "10 is smaller than 2 * 10");

console.warn("Practice it or I will haunt you in your dreams");

console.error("Error: No Js coder found!");

// --------------------------------------Exercises:Level 3-------------------------------------------

/*
1. Check the speed difference among the following loops: while, for, for of, forEach
*/

const need_for_speed = new Array();

for (let i = 0; i < 100000; i++) {
  need_for_speed.push(i);
}

console.time("Time for while loop");
let j = 0;
while (j < need_for_speed.length) {
  j++;
}
console.timeEnd("Time for while loop");

console.time("Time for for loop");
for (let i = 0; i < need_for_speed.length; i++) {}
console.timeEnd("Time for for loop");

console.time("Time for for of Loop");
for (let i of need_for_speed) {
}
console.timeEnd("Time for for of Loop");

console.time("Time for forEach loop");
need_for_speed.forEach((item) => {});
console.timeEnd("Time for forEach loop");
