// -----------------------------------------Exercises: Level 1---------------------------------------------------

/*
1. Create a closure which has one inner function
*/
const multiples = () => {
  let number = 1;
  const multiple_of_two = () => {
    number *= 2;
    return number;
  };
  return multiple_of_two;
};

let innerfunc = multiples();

console.log(innerfunc());
console.log(innerfunc());
console.log(innerfunc());

// -----------------------------------------Exercises: Level 2---------------------------------------------------

/*
1. Create a closure which has three inner functions
*/

const outfunctions = () => {
  let msg = "Name: Patel Shrey";
  const no_change = () => {
    console.log(msg);
  };
  const uppercase = () => {
    console.log(msg.toUpperCase());
  };
  const lowercase = () => {
    console.log(msg.toLowerCase());
  };
  return {
    first: no_change,
    second: uppercase,
    third: lowercase,
  };
};

const statement = outfunctions();
statement.first();
statement.second();
statement.third();

// -----------------------------------------Exercises: Level 3---------------------------------------------------

/*
1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
   It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
   Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

const personAccount = (firstname, lastname) => {
  const incomes = [];
  const expenses = [];

  function totalIncome() {
    let total = incomes.reduce((acc, income) => acc + income.source, 0);
    return total;
  }
  function totalExpense() {
    let total = expenses.reduce((acc, expense) => acc + expense.source, 0);
    return total;
  }
  function addIncome(description, source) {
    incomes.push({ description, source });
  }
  function addExpense(description, source) {
    expenses.push({ description, source });
  }
  function accountBalance() {
    return totalIncome() - totalExpense();
  }
  function accountInfo() {
    return `Name: ${firstname} ${lastname}, Income: ${totalIncome()}, Expense: ${totalExpense()}, Balance: ${accountBalance()}`;
  }
  return {
    addIncome,
    addExpense,
    accountBalance,
    accountInfo,
    totalIncome,
    totalExpense,
  };
};

const personOne = personAccount("Shrey", "Patel");

personOne.addIncome("Salary", 50000);
personOne.addIncome("Bonus", 8000);
personOne.addExpense("Groceries", 2000);
personOne.addExpense("Rent", 15000);

console.log(personOne.accountInfo());
console.log(personOne.accountBalance());
