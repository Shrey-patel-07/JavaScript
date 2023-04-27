// -------------------------------------------Exercises Level 1----------------------------------------------------

/*
   const countriesAPI = 'https://restcountries.com/v2/all'
   1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
   */

const countriesAPI = "https://restcountries.com/v2/all";
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let country of data) {
      console.log(
        country.name,
        country.capital,
        country.languages.map((language) => language.name),
        country.population,
        country.area
      );
    }
  })
  .catch((error) => console.error(error));

// -------------------------------------------Exercises Level 2----------------------------------------------------

/*
1. Print out all the cat names in to catNames variable.
*/

let catNames = [];
const catsAPI = "https://api.thecatapi.com/v1/breeds";
fetch(catsAPI)
  .then((response) => response.json())
  .then((responseData) => {
    catNames = responseData.map((catName) => catName.name);
    console.log(catNames);
  })
  .catch((error) => console.error(error));

// -------------------------------------------Exercises Level 3----------------------------------------------------

/*
1. Read the cats api and find the average weight of cat in metric unit.
2. Read the countries api and find out the 10 largest countries
3. Read the countries api and count total number of languages in the world used as officials.
*/

fetch(catsAPI)
  .then((response) => response.json())
  .then((responseData) => {
    let catWeight = responseData.map((Cat) => Cat.weight.metric.split(" - "));
    let avgWeight =
      catWeight.reduce(
        (acc, [low, high]) => acc + (parseInt(low) + parseInt(high)) / 2,
        0
      ) / catWeight.length;
    console.log("Average Weight of Cat in metrics - " + avgWeight);
  })
  .catch((error) => console.error(error));

fetch(countriesAPI)
  .then((response) => response.json())
  .then((responseData) => {
    const sortedcountry = responseData.sort((a, b) => b.area - a.area);
    let top10 = sortedcountry.slice(0, 10);
    top10.forEach((country) => {
      console.log(country.name, country.area);
    });
  })
  .catch((error) => console.error(error));

fetch(countriesAPI)
  .then((response) => response.json())
  .then((responseData) => {
    let total_languages = new Set();
    responseData.forEach((country) =>
      country.languages.forEach((language) =>
        total_languages.add(language.name)
      )
    );
    console.log(total_languages);
  })
  .catch((error) => console.error(error));
