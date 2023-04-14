// -----------------------------Exercises: Level 1-----------------------------------

/*
1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using sort() method
16. Reverse the array using reverse() method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies
*/

let arr = new Array(1, 2, 3, 4, 5);
console.log(arr.length);
console.log(arr[0], arr[2], arr[arr.length - 1]);
let mixedDataTypes = new Array(
  10,
  "10",
  { name: "Shrey" },
  [9, 8, 7],
  (4, 5, 6),
  3.14
);
console.log(mixedDataTypes);
let itCompanies = new Array(
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
);
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[3], itCompanies[4], itCompanies[6]);
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6]
);
itCompanies[0] = itCompanies[0].toUpperCase();
itCompanies[1] = itCompanies[1].toUpperCase();
itCompanies[2] = itCompanies[2].toUpperCase();
itCompanies[3] = itCompanies[3].toUpperCase();
itCompanies[4] = itCompanies[4].toUpperCase();
itCompanies[5] = itCompanies[5].toUpperCase();
itCompanies[6] = itCompanies[6].toUpperCase();
console.log(itCompanies);

console.log(itCompanies.toString() + " are big IT companies.");

if (itCompanies.includes("AMAZON")) {
  console.log("Amazon found");
} else {
  console.log("Amazon not found");
}

let Company_Array = new Array();
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let count = 0;

  for (let j = 0; j < company.length; j++) {
    if (company[j] == "O") {
      count++;
    }
  }
  if (count > 1) {
    Company_Array.push(company);
  }
}
console.log(Company_Array);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(2, -3));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(1, 2);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(0);
console.log(itCompanies);

// -----------------------------Exercises: Level 2-----------------------------------

/*
1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

2. First remove all the punctuations and change the string to array and count the number of words in the array

  let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  console.log(words)
  console.log(words.length)

  ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  13

3. In the following shopping cart add, remove, edit items

  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

  add 'Meat' in the beginning of your shopping cart if it has not been already added
  add Sugar at the end of you shopping cart if it has not been already added
  remove 'Honey' if you are allergic to honey
  modify Tea to 'Green Tea'

4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

  In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

  Concatenate the following two variables and store it in a fullStack variable.

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']

  console.log(fullStack)
  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.match(/\w+/gi);
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart[0] != "Meat") shoppingCart.unshift("Meat");
if (shoppingCart[shoppingCart.length - 1] != "Sugar")
  shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log(shoppingCart);

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// -----------------------------Exercises: Level 3-----------------------------------

/*
1. The following is an array of 10 students ages:

  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

  Sort the array and find the min and max age
  Find the median age(one middle item or two middle items divided by two)
  Find the average age(all items divided by number of items)
  Find the range of the ages(max minus min)
  Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

2. Find the middle country(ies) in the countries array

3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);

console.log(ages[0], ages[ages.length - 1]);
console.log(ages[ages.length / 2]);
console.log(ages[ages.length / 2] - ages[0]);

let sum = 0;
ages.map((x) => (sum += x));
let average = sum / ages.length;
console.log(average);

console.log(ages[ages.length - 1] - ages[0]);

console.log(Math.abs(ages[0] - average) == ages[ages.length - 1] - average);

console.log(countries.slice(0, 10));

console.log(countries[Math.floor(countries.length / 2)]);

if (countries.length % 2 == 0)
  console.log(
    countries.slice(0, countries.length / 2),
    "+",
    countries.slice(countries.length / 2)
  );
else
  console.log(
    countries.slice(0, countries.length / 2 + 1),
    "+",
    countries.slice(countries.length / 2 + 1)
  );
