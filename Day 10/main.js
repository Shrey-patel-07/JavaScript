// ---------------------------------Excercise: Level 1---------------------------------------

/*
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

1. create an empty set
2. Create a set containing 0 to 10 using loop
3. Remove an element from a set
4. Clear a set
5. Create a set of 5 string elements from array
6. Create a map of countries and number of characters of a country
*/
const empty_set = new Set();

const integers = new Set();

for (let i = 0; i <= 10; i++) {
  integers.add(i);
}

console.log(integers);

integers.delete(3);
console.log(integers);

empty_set.clear();

const names = ["apple", "banana", "carrot", "DragonFruit", "eggplant"];

const vegetables = new Set();

for (let i = 0; i < names.length; i++) {
  vegetables.add(names[i]);
}
console.log(vegetables);

const countries_name = ["Finland", "Sweden", "Norway"];
const countries_map = new Set();

for (let country of countries_name) {
  countries_map.add({ country: country, length: countries_name.length });
}
console.log(countries_map);

// ---------------------------------Excercise: Level 2---------------------------------------
/*
1. Find a union b
2. Find a intersection b
3. Find a with b
*/

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];

const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

console.log(C);

const D = new Set(a.filter((num) => B.has(num)));
console.log(D);

// ---------------------------------Excercise: Level 3---------------------------------------

/*
1. How many languages are there in the countries object file.
2. Use the countries data to find the 10 most spoken languages:

  console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/

import { countries } from "./countries_data.js";

let languages = 0;
for (let country of countries) {
  languages += country.languages.length;
}

console.log(`Total Languages are ${languages}`);

function mostSpokenLanguages(countries, n) {
  const counts = {};
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      counts[language] = counts[language] ? counts[language] + 1 : 1;
    });
  });
  const entries = Object.entries(counts);
  entries.sort((a, b) => b[1] - a[1]);
  return entries
    .slice(0, n)
    .map(([language, count]) => ({ [language]: count }));
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
