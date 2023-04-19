// ---------------------------------Excercise: Level 1---------------------------------------

/*
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


1. Explain the difference between forEach, map, filter, and reduce.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use forEach to console.log each country in the countries array.
4. Use forEach to console.log each name in the names array.
5. Use forEach to console.log each number in the numbers array.
6. Use map to create a new array by changing each country to uppercase in the countries array.
7. Use map to create an array of countries length from countries array.
8. Use map to create a new array by changing each number to square in the numbers array
9. Use map to change to each name to uppercase in the names array
10. Use map to map the products array to its corresponding prices.
11. Use filter to filter out countries containing land.
12. Use filter to filter out countries having six character.
13. Use filter to filter out countries containing six letters and more in the country array.
14. Use filter to filter out country start with 'E';
15. Use filter to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
17. Use reduce to sum all the numbers in the numbers array.
18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
19. Explain the difference between some and every
20. Use some to check if some names' length greater than seven in names array
21. Use every to check if all the countries contain the word land
22. Explain the difference between find and findIndex.
23. Use find to find the first country containing only six letters in the countries array
24. Use findIndex to find the position of the first country containing only six letters in the countries array
25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const sum = (n, m) => {
  return n + m;
};

const callback = (n) => {
  if (n <= 1) return n;
  return sum(callback(n - 1), callback(n - 2));
};
console.log(callback(5)); // fibonacci sequence 0,1,1,2,3,5...

countries.forEach((country) => console.log(country));

names.forEach((name) => console.log(name));

numbers.forEach((number) => console.log(number));

const countries_with_uppercase = countries.map((country) =>
  country.toUpperCase()
);
console.log(countries_with_uppercase);

const countries_length = countries.map((country) => country.length);
console.log(countries_length);

const square_numbers = numbers.map((number) => number ** 2);
console.log(square_numbers);

const names_with_uppercase = names.map((name) => name.toUpperCase());
console.log(names_with_uppercase);

const product_map_price = products.map((product) => product.price);
console.log(product_map_price);

const countries_with_land = countries.filter((country) =>
  country.includes("land")
);
console.log(countries);

const countries_with_six_letters = countries.filter(
  (country) => country.length == 6
);
console.log(countries_with_six_letters);

const countries_with_more_than_six_letters = countries.filter(
  (country) => country.length > 6
);
console.log(countries_with_more_than_six_letters);

const countries_starting_with_E = countries.filter((country) =>
  country.startsWith("E")
);
console.log(countries_starting_with_E);

const prices_with_values = products.filter(
  (product) => typeof product.price == "number"
);

console.log(prices_with_values);

const array = [10, "Ara Ara", 20, "Urusendayo", 30, "Bakayaro", 40];

const getStringLists = array.filter((element) => typeof element == "string");
console.log(getStringLists);

const numbers_sum = numbers.reduce((sum, element) => sum + element, 0);
console.log(numbers_sum);

const list_countries = countries.reduce((list, country, index) => {
  if (index == countries.length - 1)
    return `${list} and ${country} are north European countries.`;
  return `${list} ${country}, `;
}, "");
console.log(list_countries);

const name_greater_than_7 = names.some((name) => name.length > 7);
console.log(name_greater_than_7);

const countries_with_land_using_every = countries.every((country) =>
  country.includes("land")
);
console.log(countries_with_land_using_every);

// find: Return the first element which satisfies the condition
// findIndex: Return the position of the first element which satisfies the condition

const first_country_with_6_letter = countries.find(
  (country) => country.length == 6
);

console.log(first_country_with_6_letter);

const find_norway = countries.findIndex((country) => country == "Norway");
console.log(find_norway);

const find_russia = countries.findIndex((country) => country == "Russia");
console.log(find_russia);

// ---------------------------------Exercises: Level 2-----------------------------------

/*
1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
2. Find the sum of price of products using only reduce reduce(callback))
3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
4. Create a function starting_letters which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
*/

const totalPrice = products
  .filter((product) => product.price)
  .map((product) => product.price)
  .reduce((acc, price) => acc + price, 0);
console.log(totalPrice);

const sum_of_price = products.reduce((acc, price) => acc + price.price, 0);
console.log(sum_of_price);

const categorizeCountries = (countries, pattern) => {
  return countries.filter((country) => country.includes(pattern));
};

console.log(categorizeCountries(countries, "land"));

function starting_letters(countries) {
  const letterCount = {};
  for (const country of countries) {
    const firstLetter = country[0].toUpperCase();
    letterCount[firstLetter] = letterCount[firstLetter]
      ? letterCount[firstLetter] + 1
      : 1;
  }
  return Object.entries(letterCount).map(([letter, count]) => ({
    letter,
    count,
  }));
}

console.log(starting_letters(countries));

function getFirstTenCountries(countries) {
  return countries.slice(0, 10);
}

console.log(getFirstTenCountries(countries));

function getLastTenCountries(countries) {
  return countries.slice(-10);
}

console.log(getLastTenCountries(countries));

function most_common_starting_letter(countries) {
  const startingLetterCounts = starting_letters(countries);
  let mostCommonLetter = "";
  let highestCount = 0;
  for (const { letter, count } of startingLetterCounts) {
    if (count > highestCount) {
      mostCommonLetter = letter;
      highestCount = count;
    }
  }
  return mostCommonLetter;
}

const mostCommonStartingLetter = most_common_starting_letter(countries);
console.log(mostCommonStartingLetter);

// --------------------------------Excercise: Level 4---------------------------------------

// Questions are pretty similar to questions solved above. So, just leaving it there...
