//  -------------------------------------Excercise: Level 1----------------------------------------

/*
--------------------TASK-------------------
1. Declare a function fullName and it print out your full name.
2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function addNumbers and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
     BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
*/

const myname = () => {
  console.log("Patel Shrey");
};
myname();

const fullName = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};
fullName("Patel", "Shrey");

const addNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log("Sum:", addNumbers(2, 3));

const areaOfRectangle = (length, width) => {
  return length * width;
};
console.log("Area of Rectangle: " + areaOfRectangle(5, 5));

const perimeterOfRectangle = (length, width) => {
  return 2 * (length + width);
};
console.log("Perimeter of Rectangle: " + perimeterOfRectangle(5, 5));

const volumeOfRectPrism = (length, width, height) => {
  return length * width * height;
};
console.log("Volume of RectPrism: " + volumeOfRectPrism(5, 5, 5));

const areaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};
console.log("Area of Circle: " + areaOfCircle(5));

const circumferenceOfCircle = (radius) => {
  return 2 * Math.PI * radius;
};
console.log("Circumference of Circle: " + circumferenceOfCircle(5));

const density = (mass, volume) => {
  return mass / volume;
};
console.log("Density: " + density(200, 100));

const speed = (distance, time) => {
  return distance / time;
};
console.log("Speed: " + speed(100, 10));

const weight = (mass, gravity) => {
  return mass * gravity;
};
console.log("Weight: " + weight(6, 9.8));

const oF = (oC) => {
  return (oC * 9) / 5 + 32;
};
console.log("F: " + oF(100));

const bmi = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi < 18.5) return `underweight: BMI is less than 18.5`;
  else if (bmi < 24.9) return `Normal weight: BMI is 18.5 to 24.9`;
  else if (bmi < 29.9) return `Overweight: BMI is 25 to 29.9`;
  else return `Obese: BMI is 30 or more`;
};
console.log("BMI: " + bmi(60, 1.8));

const checkSeason = (month) => {
  if (month >= 1 && month <= 4) return "Autumn";
  else if (month >= 5 && month <= 7) return "Winter";
  else if (month >= 8 && month <= 10) return "Spring";
  else if (month >= 11 && month <= 13) return "Summer";
};

const findMax = (num1, num2, num3) => {
  if (num1 >= num2) {
    if (num1 >= num3) return num1;
    else return num3;
  } else if (num2 >= num3) return num2;
  else return num3;
};

console.log(findMax(0, 10, 5));

/*
1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}

3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
    showDateTime()
    08/01/2020 04:08

5. Declare a function name swapValues. This function swaps value of x to y.
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4

6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']

7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.

14. Write a function which takes any number of arguments and return the sum of the arguments
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10

15. Writ a function which generates a randomUserIp.

16. Write a function which generates a randomMacAddress

17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
    console.log(randomHexaNumberGenerator());
    '#ee33df'

18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
    console.log(userIdGenerator());
    41XTDbE
*/
function solveLinEquation(a, b, c) {
  if (a == 0 && b == 0) {
    return "The equation is degenerate.";
  } else if (a == 0) {
    return -c / b;
  } else if (b == 0) {
    return -c / a;
  } else {
    return [1, -a / b - c / b];
  }
}
console.log(solveLinEquation(2, 3, 4));

function solveQuadratic(a, b, c) {
  if (a == null && b == null && c == null) return 0;
  let D = b ** 2 - 4 * a * c;
  return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
}
console.log(solveQuadratic());
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printArray([1, 2, 3, 4, 5]);

function showDateTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let time = `${day}/${month}/${year} ${hour}:${min}:${sec}`;
  console.log(time);
}
showDateTime();

function swapValues(x, y) {
  console.log(`Before - x: ${x}, y: ${y}`);
  let temp = x;
  x = y;
  y = temp;
  return `After  - x: ${x}, y: ${y}`;
}
console.log(swapValues(1, 2));

function reverseArray(array) {
  for (let i = 0; i <= array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array;
}
console.log(reverseArray(Array(1, 2, 3, 4, 5)));

function capitalizeArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
}
console.log(capitalizeArray(["apple", "banana", "carrot"]));

function addItem(array, item) {
  array.push(item);
  return array;
}
console.log(addItem([1, 2, 3], 4));

function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}
console.log(removeItem([1, 2, 3], 1));

function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(10));

function sumOfOdds(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(10));

function sumOfEven(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(10));

function evensAndOdds(number) {
  let evens = 0;
  let odds = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  return [evens, odds];
}
console.log(evensAndOdds(100));

function useofargs(...args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}
console.log(useofargs(1, 2, 3, 4, 5));

function randomUserIp() {
  return (
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255)
  );
}
console.log(randomUserIp());

function randomMacAddress() {
  let macAddress = "";
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      macAddress += hexDigits.charAt(
        Math.floor(Math.random() * hexDigits.length)
      );
    }
    if (i < 5) {
      macAddress += ":";
    }
  }
  return macAddress;
}

console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  let result = "#";
  const hexChars = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
  }
  return result;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  let result = "";
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVW";
  for (let i = 0; i < 7; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
console.log(userIdGenerator());

// ----------------------------------Exercises: Level 3--------------------------------------------

/*
1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
    One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '

2. Write a function name rgbColorGenerator and it generates rgb colors.

    rgbColorGenerator()
    rgb(125,244,255)

3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

7. Write a function generateColors which can generate any number of hexa or rgb colors.

    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

11. Call your function sum, it takes any number of arguments and it returns the sum.

12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
     Check if all the array items are number types. If not give return reasonable feedback.

13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. 
    If not give return reasonable feedback.

14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
    If the array length is less than five it return 'item not found'.

    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    'Not Found'

15. Write a function called isPrime, which checks if a number is prime number.

16. Write a functions which checks if all items are unique in the array.

17. Write a function isunique which checks if all the items of the array are the same data type.

18.JavaScript variable name does not support special characters or symbols except $ or _. 
    Write a function isValidVariable which check if a variable is valid or invalid variable.

19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]

20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
*/

function userIdGeneratedByUser() {
  const numChars = parseInt(
    prompt("Enter the number of characters for each user ID:")
  );
  const numIds = parseInt(prompt("Enter the number of user IDs to generate:"));

  let result = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < numIds; i++) {
    for (let j = 0; j < numChars; j++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += "\n";
  }

  return result;
}

console.log(userIdGeneratedByUser());

function rgbColorGenerator() {
  let result = "rgb(";
  for (let i = 0; i < 3; i++) {
    result += `${Math.floor(Math.random() * 255)}`;
    if (i != 2) result += ",";
  }
  result += ")";
  return result;
}

console.log(rgbColorGenerator());

// Que 3 and 4 done above

function convertHexaToRgb(string) {
  string = string.slice(1);
  let red = parseInt(string.substr(0, 2), 16);
  let green = parseInt(string.substr(2, 2), 16);
  let blue = parseInt(string.substr(4, 2), 16);
  return `rgb(${red},${green},${blue})`;
}

console.log(convertHexaToRgb("#a3e12f"));

function convertRgbToHexa(r, g, b) {
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

console.log(convertRgbToHexa(125, 244, 255));

function generateColors(string, size) {
  let result = new Array();
  if (string == "hexa") {
    for (let i = 0; i < size; i++) {
      result.push(randomHexaNumberGenerator());
    }
  } else {
    for (let i = 0; i < size; i++) {
      result.push(rgbColorGenerator());
    }
  }
  return result;
}

console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 3));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(
  shuffleArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

function isEmpty(array) {
  return array.length == 0;
}

console.log(isEmpty([]));

// que 11 done above

function sumOfArrayItems(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      result += array[i];
    } else {
      return "item in array is not number";
    }
  }
  return result;
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
console.log(sumOfArrayItems(["A", 2, 3, 4, "E"]));

function average(array) {
  return sumOfArrayItems(array) / array.length;
}

console.log(average([1, 2, 3, 4, 5]));

function modifyArray(array) {
  if (array.length < 5) {
    return "item not found";
  }
  array[4] = array[4].toUpperCase();
  return array;
}

console.log(
  modifyArray(
    ["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"],
    "Carrot",
    "Apple"
  )
);

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(13));

function isunique(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isunique([1, 2, 3, 4, 5]));

function isValidVariable(variable) {
  if (!/^[a-zA-Z0-9$_]*$/.test(variable)) {
    return false;
  }
  return true;
}

console.log(isValidVariable("$Google$"));
console.log(isValidVariable("Google@gmail.com"));

function sevenRandomNumbers() {
  let result = new Array();
  for (let i = 0; i < 7; i++) {
    result.push(Math.floor(Math.random() * 10));
  }
  return result;
}

console.log(sevenRandomNumbers());

function reverseCountries(countries) {
  return countries.slice().reverse();
}

console.log(reverseCountries(["India", "Japan", "South Korea", "Switzerland"]));
