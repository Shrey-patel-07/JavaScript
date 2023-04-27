// -------------------------------------------Exercises Level 1----------------------------------------------------

/*
1. Store you first name, last name, age, country, city in your browser localStorage.
*/
localStorage.setItem("firstName", "Shrey");
localStorage.setItem("lastName", "Patel");
localStorage.setItem("age", "19");
localStorage.setItem("country", "India");
localStorage.setItem("city", "Ahmedabad");
console.log(localStorage);

// -------------------------------------------Exercises Level 2----------------------------------------------------

/*
1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.
    Store the student object in your browser localStorage.
*/

const student = {
  firstname: "Shrey",
  lastname: "Patel",
  age: "19",
  skills: ["HTML", "CSS", "JavaScript"],
  country: "India",
};

localStorage.setItem("student", JSON.stringify(student));
console.log(localStorage);

// -------------------------------------------Exercises Level 3----------------------------------------------------

/*
1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
    Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

const personAccount = {
  firstname: "Shrey",
  lastname: "Patel",
  incomes: {},
  expenses: {},

  totalIncome() {
    return this.incomes.reduce((acc, val) => acc + val, 0);
  },
  totalExpense() {
    return this.expenses.reduce((acc, val) => acc + val, 0);
  },
  accountInfo() {
    const income = this.totalIncome();
    const expense = this.totalExpense();
    const balance = income - expense;

    return `Name: ${this.firstname} ${this.lastname}\nIncome: ${income}\nExpense: ${expense}\nBalance: ${balance}`;
  },
  addIncome(amount, description) {
    this.incomes[description] = amount;
  },

  addExpense(amount, description) {
    this.expenses[description] = amount;
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

personAccount.addIncome(500, "Salary");
personAccount.addExpense(200, "Rent");
personAccount.addExpense(50, "Groceries");
const person_json = JSON.stringify(personAccount, undefined, 4);
localStorage.setItem("person_json", person_json);
