// -----------------------------Exercises: Level 1-----------------------------------

/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    Enter your age: 30
    You are old enough to drive.

    Enter your age:15
    You are left with 3 years to drive.
*/
age = prompt("Enter your age: ");
if (age >= 18) {
  alert("You are old enough to drive");
} else {
  alert("You are left with " + (18 - age) + " years to drive");
}

/*
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
   
    Enter your age: 30
    You are 5 years older than me.
*/
myage = 19;
yourage = prompt("Enter your age: ");
if (yourage > myage) {
  alert("You are " + (yourage - myage) + " years older than me");
} else if (yourage < myage) {
  alert("I am " + (myage - yourage) + " years older than you");
} else {
  alert("We are of same age ");
}

/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    using if else
    ternary operator.

    let a = 4
    let b = 3
    4 is greater than 3
*/
let a1 = prompt("Enter a:");
let b = prompt("Enter b:");
if (a1 > b) {
  alert(`${a1} is greater than ${b}`);
} else if (a1 < b) {
  alert(`${a1} is less than ${b}`);
} else {
  alert(`${a1} is equal to ${b}`);
}

/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
*/
let a2 = prompt("Enter a number:");
if (a2 % 2 == 0) {
  alert(`${a2} is an even number`);
} else {
  alert(`${a2} is an odd number`);
}

// -----------------------------Exercises: Level 2-----------------------------------

/*
1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

*/
let score = prompt("Enter the score: ");
if (score >= 80 && score <= 100) alert("A");
else if (score >= 70 && score <= 89) alert("B");
else if (score >= 60 && score <= 69) alert("C");
else if (score >= 50 && score <= 59) alert("D");
else if (score >= 0 && score <= 49) alert("F");
else alert("Please enter valid score");

/*
2.  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season = prompt("Enter the season: ");
if (season == "September" || season == "October" || season == "November") {
  alert("Autumn");
} else if (
  season == "December" ||
  season == "January" ||
  season == "February"
) {
  alert("Winter");
} else if (season == "March" || season == "April" || season == "May") {
  alert("Spring");
} else if (season == "June" || season == "July" || season == "August") {
  alert("Summer");
}

/*
3.  Check if a day is weekend day or a working day. Your script will take day as an input.
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.
*/
let day = prompt("Enter the day: ");
if (day.toLowerCase() == "saturday") {
  alert(`${day} is a weekend`);
} else {
  alert(`${day} is a working day`);
}
// -----------------------------Exercises: Level 3-----------------------------------

/*
1.Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.

*/
let month = prompt("Enter a month");
month = month.toLowerCase();
if (
  month == "january" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "decemeber"
) {
  alert(`${month} has 31 days`);
} else if (month == "february") alert("February has 28 days");
else {
  alert(`${month} has 30 days`);
}

/*
2. Write a program which tells the number of days in a month, now consider leap year.
*/

let Month = prompt("Enter a month");
let year = prompt("Enter year");
Month = month.toLowerCase();
if (
  Month == "january" ||
  Month == "march" ||
  Month == "may" ||
  Month == "july" ||
  Month == "august" ||
  Month == "october" ||
  Month == "decemeber"
) {
  alert(`${Month} has 31 days`);
} else if (month == "february") {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
    alert("February has 29 days");
  } else {
    alert("Februart has 28 days");
  }
} else {
  alert(`${month} has 30 days`);
}
