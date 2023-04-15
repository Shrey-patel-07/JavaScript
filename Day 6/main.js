// -----------------------------Exercises: Level 1-----------------------------------

/*
1. Iterate 0 to 10 using for loop, do the same using while and do while loop

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

3. Iterate 0 to n using for loop

4. Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

5. Use loop to print the following pattern:

    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100

6. Using loop print the following pattern

    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000

7. Use for loop to iterate from 0 to 100 and print only even numbers

8. Use for loop to iterate from 0 to 100 and print only odd numbers

9. Use for loop to iterate from 0 to 100 and print only prime numbers

10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
      The sum of all numbers from 0 to 100 is 5050.

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
      The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
      [2550, 2500]

13. Develop a small script which generate array of 5 random numbers

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

15. Develop a small script which generate a six characters random id:
      5j2khz
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let counter = 0;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
counter = 10;
while (counter >= 0) {
  console.log(counter);
  counter--;
}

let user_counter = prompt("Enter n: ");
for (let i = 0; i <= user_counter; i++) {
  console.log(i);
}

for (let j = 0; j < 7; j++) {
  console.log("#".repeat(j + 1));
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

console.log(`i    i^2    i^3`);
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
  if (!(i % 2)) console.log(i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2) console.log(i);
}

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

let Sum_array = new Array(0, 0);
for (let i = 0; i <= 100; i++) {
  Sum_array[i % 2] += i;
}
console.log(`odd sum: ` + Sum_array[1]);
console.log(`even sum: ` + Sum_array[0]);

console.log(Sum_array);

let random_number = new Array();
for (let i = 0; i < 5; i++) {
  random_number.push(Math.floor(Math.random() * 10));
}
console.log(random_number);
let unique_number = new Array();
while (unique_number.length != 5) {
  let temp = Math.floor(Math.random() * 10);
  if (!unique_number.includes(temp)) unique_number.push(temp);
}
console.log(unique_number);

function generateRandomChar() {
  let random_char = "";
  let temp = Math.floor(Math.random() * 3 + 1);
  if (temp == 1)
    random_char += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  else if (temp == 2)
    random_char += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  else random_char += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return random_char;
}

let random_char = String();
for (let i = 0; i < 6; i++) {
  random_char += generateRandomChar();
}

console.log(random_char);

// -----------------------------Exercises: Level 2-----------------------------------

/*

  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


1. Develop a small script which generate any number of characters random id:
      fe3jo1gl124g
      xkqci4utda1lmbelpkm03rba

2. Write a script which generates a random hexadecimal number.
      '#ee33df'

3. Write a script which generates a random rgb color number.
      rgb(240,180,80)

4. Using the above countries array, create the following new array.
      ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

5. Using the above countries array, create an array for countries length'.
      [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

6. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
  ]

7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
    ['Finland','Ireland', 'Iceland']

8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
    ['Albania', 'Bolivia','Ethiopia']

9. Using the above countries array, find the country containing the biggest number of characters.
    Ethiopia

10. Using the above countries array, find the country containing only 5 characters.
    ['Japan', 'Kenya']
   
11. Find the longest word in the webTechs array

12. Use the webTechs array to create the following array of arrays:
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

16. Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB   

  */

let rand = Math.random() * 30;
let random_string = String();
for (let i = 0; i < rand; i++) {
  random_string += generateRandomChar();
}
console.log(random_string);

let hexadecimal = String("#");
for (let i = 0; i < 6; i++) {
  hexadecimal += Math.floor(Math.random() * 16).toString(16);
}
console.log(hexadecimal);

let rgb = String(`rgb(`);
for (let i = 0; i < 3; i++) {
  rgb += Math.floor(Math.random() * 256);
  if (i != 2) rgb += ",";
}
rgb += ")";
console.log(rgb);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let newcountries = new Array();

for (let country of countries) {
  newcountries.push(country.toUpperCase());
}

console.log(newcountries);

let country_len = new Array();

for (let country of countries) {
  country_len.push(country.length);
}

console.log(country_len);

let country_list = new Array();
for (let i = 0; i < countries.length; i++) {
  country_list.push([
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    country_len[i],
  ]);
}

console.log(country_list);

let country_with_land = new Array();
for (let country of countries) {
  if (country.includes("land")) country_with_land.push(country);
}
if (!country_with_land.length)
  console.log("All these countries are without land");
else console.log(country_with_land);

let country_with_ia = new Array();
for (let country of countries) {
  if (country.endsWith("ia")) country_with_ia.push(country);
}
if (!country_with_ia.length) console.log("These are countries ends without ia");
else console.log(country_with_ia);

let max_country_len = Math.max(...country_len);
let country_with_max_len = new Array();
for (let country of country_list) {
  if (country[2] == max_country_len) country_with_max_len.push(country[0]);
}
console.log(country_with_max_len);

for (let country of countries) {
  if (country.length == 5) console.log(country);
}

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const longestWord = webTechs.reduce((a, b) => (a.length > b.length ? a : b));

console.log(`The longest word in the webTechs array is "${longestWord}".`);

let webTechs_list = new Array();
for (let i = 0; i < webTechs.length; i++) {
  webTechs_list.push([webTechs[i], webTechs[i].length]);
}
console.log(webTechs_list);

const mernStack = ["MongoDB", "Express", "React", "Node"];

let mernstack_acronym = String();
for (let i = 0; i < mernStack.length; i++) {
  mernstack_acronym += mernStack[i][0];
}
console.log(mernstack_acronym);

for (let webTech of webTechs) {
  console.log(webTech);
}

const fruits = ["banana", "orange", "mango", "lemon"];

const reversedFruits = Array();

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let element of fullStack) {
  for (let inner of element) {
    console.log(inner);
  }
}

// -----------------------------Exercises: Level 3-----------------------------------

/*
1. Copy countries array(Avoid mutation)
2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
3. Sort the webTechs array and mernStack array
4. Extract all the countries contain the word 'land' from the countries array and print it as array (already Done)
5. Find the country containing the hightest number of characters in the countries array (Done before)
6. Extract all the countries contain the word 'land' from the countries array and print it as array (already Done)
7. Extract all the countries containing only four characters from the countries array and print it as array (similar que solved above)
8. Extract all the countries containing two or more words from the countries array and print it as array (???)
9. Reverse the countries array and capitalize each country and stored it as an array (already capitalized)
*/

let countriesCopy = countries.slice();

console.log(countriesCopy);

let sortedCountries = countriesCopy.sort();

console.log(sortedCountries);

let sorted_webTechs = webTechs.sort();

console.log(sorted_webTechs);

let sorted_mernStack = mernStack.sort();

console.log(sorted_mernStack);
