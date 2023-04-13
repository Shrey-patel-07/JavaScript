// -------------------------------Exercises: Level 1---------------------------------

/*
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
*/

let firstname = "Shrey";
let lastname = "Patel";
let country = "India";
let city = "Ahmedabad";
let age = 19;
let isMarried = false;
let year = 2023;

console.log(typeof firstname);
console.log(typeof lastname);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/*
2. Check if type of '10' is equal to 10
*/

console.log(10 === 10);

/*
3. Check if parseInt('9.8') is equal to 10
*/

console.log(parseInt("9.8") == 10);

/*
4. Boolean value is either true or false.
    i. Write three JavaScript statement which provide truthy value.
    ii. Write three JavaScript statement which provide falsy value.
*/

console.log(true);
console.log(1 == "1");
console.log(3 > 2);

console.log(false);
console.log(1 === "1");
console.log(3 < 2);

/*
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    1. 4 > 3
    2. 4 >= 3
    3. 4 < 3
    4. 4 <= 3
    5. 4 == 4
    6. 4 === 4
    7. 4 != 4
    8. 4 !== 4
    9. 4 != '4'
    10. 4 == '4'
    11. 4 === '4'
    12. Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 > 3 == true);
console.log(4 >= 3 == true);
console.log(4 < 3 == false);
console.log(4 <= 3 == false);
console.log((4 == 4) == true);
console.log((4 === 4) == true);
console.log((4 != 4) == false);
console.log((4 !== 4) == false);
console.log((4 != "4") == false);
console.log((4 == "4") == true);
console.log((4 === "4") == false);
console.log("python".length != "jargon".length);

/*
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    1. 4 > 3 && 10 < 12
    2. 4 > 3 && 10 > 12
    3. 4 > 3 || 10 < 12
    4. 4 > 3 || 10 > 12
    5. !(4 > 3)
    6. !(4 < 3)
    7. !(false)
    8. !(4 > 3 && 10 < 12)
    9. !(4 > 3 && 10 > 12)
    10. !(4 === '4')
    11. There is no 'on' in both dragon and python
*/

console.log((4 > 3 && 10 < 12) == true);
console.log((4 > 3 && 10 > 12) == false);
console.log((4 > 3 || 10 < 12) == true);
console.log((4 > 3 || 10 > 12) == false);
console.log(!(4 > 3) == false);
console.log(!(4 < 3) == true);
console.log(!false == true);
console.log(!(4 > 3 && 10 < 12) == false);
console.log(!(4 > 3 && 10 > 12) == true);
console.log(!(4 === "4") == true);
console.log(!"python".includes("on") && !"dragon".includes("on") == false);
/*
7. Use the Date object to do the following activities
    1. What is the year today?
    2. What is the month today as a number?
    3. What is the date today?
    4. What is the day today as a number?
    5. What is the hours now?
    6. What is the minutes now?
    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(Math.floor(today.getTime() / 1000));

// -------------------------------Exercises: Level 2---------------------------------

/*
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
   
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
*/

let base = parseInt(prompt("Enter base: "));
let height = parseInt(prompt("Enter height: "));

let area = (base * height) / 2;

console.log(area);

/*
   2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
   
   
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   
*/

let sideA = parseInt(prompt("Enter side a: "));
let sideB = parseInt(prompt("Enter side b: "));
let sideC = parseInt(prompt("Enter side c: "));

let perimeter = sideA + sideB + sideC;

console.log(perimeter);

/*
   
   3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/

let length = parseInt(prompt("Enter length: "));
let width = parseInt(prompt("Enter width: "));

let rect_area = length * width;
let rect_perimeter = 2 * (length + width);

console.log(rect_area);
console.log(rect_perimeter);

/*
   4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/
let radius = parseInt(prompt("Enter radius: "));

let circle_area = Math.PI * radius * radius;
let circle_circumference = 2 * Math.PI * radius;

console.log(circle_area);
console.log(circle_circumference);

/*
   5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/
let slope = 2;
let x_intercept = 1;
let y_intercept = -2;

console.log(slope);
console.log(x_intercept);
console.log(y_intercept);

/*
   6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
*/

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let m = (y2 - y1) / (x2 - x1);

console.log(m);
/*
   7. Compare the slope of above two questions.
*/
console.log(m == slope);
/*
   8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
*/

let x = -3;
let y_value = Math.pow(x, 2) + 6 * x + 9;
console.log(y_value);

let y = 9;
let x_value = 0;
console.log(Math.pow(x_value, 2) + 6 * x_value + 9 == y ? x_value : null);
/*
   9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
   
   
   Enter hours: 40
   Enter rate per hour: 28
   Your weekly earning is 1120
*/

let hours = parseInt(prompt("Enter hours: "));
let rate_per_hour = parseInt(prompt("Enter rate per hour: "));

let weekly_earning = hours * rate_per_hour;

console.log(weekly_earning);

/*   
   10. If the length of your name is greater than 7 say, your name is long else say your name is short.
*/

let myname = prompt("Enter your name: ");

if (myname.length > 7) {
  console.log(myname + " is long");
} else {
  console.log(myname + " is short");
}

/*
   11. Compare your first name length and your family name length and you should get this output.
   
        let firstName = 'Asabeneh'
        let lastName = 'Yetayeh'
        Your first name, Asabeneh is longer than your family name, Yetayeh
*/

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your family name: ");

if (firstName.length > lastName.length) {
  console.log(firstName + " is longer than " + lastName);
} else {
  console.log(firstName + " is shorter than " + lastName);
}

/*
 
   12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
        let myAge = 250
        let yourAge = 25

        I am 225 years older than you.
*/

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you`);
/*
   
   13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
   
   
   
   Enter birth year: 1995
   You are 25. You are old enough to drive
   
   Enter birth year: 2005
   You are 15. You will be allowed to drive after 3 years.
   
*/

let birthYear = parseInt(prompt("Enter birth year: "));
let now = new Date();
let your_age = now.getFullYear() - birthYear;

if (your_age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You will be allowed to drive after ${18 - your_age} years`);
}
/*
   14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
   
   
   Enter number of years you live: 100
   You lived 3153600000 seconds.
*/

let years = parseInt(prompt("Enter number of years you live: "));
let endDate = new Date();
endDate.setFullYear(parseInt(today.getFullYear()) + years);
console.log(
  `You lived ${Math.floor(
    (endDate.getTime() - today.getTime()) / 1000
  )} seconds`
);

/*   
   15. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
*/
console.log(
  `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`
);
console.log(
  `${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
);
console.log(
  `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
);

//-----------------------------Exercises: Level 3-----------------------------------

/*
Create a human readable time format using the Date time object.
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
console.log(
  `${today.getFullYear()}-${today
    .getMonth()
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })}-${today
    .getDate()
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })} ${today
    .getHours()
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${today
    .getMinutes()
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })}`
);
