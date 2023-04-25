// --------------------------------------Exercises Level 1----------------------------------------------

/*
1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
2. Create a Dog and Cat child class from the Animal Class.
*/

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  About() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Color: ${this.color}`);
    console.log(`Legs: ${this.legs}`);
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  All_about_dog() {
    console.log(`Breed: ${this.breed}`);
    console.log(`Voice: Barks(Woof Woof)`);
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }
  All_about_cat() {
    console.log(`Breed: ${this.breed}`);
    console.log(`Voice: Meow Meow`);
  }
}
const dog = new Dog("Wolfy", 4, "white", 4, "Husky");
dog.About();
dog.All_about_dog();

const cat = new Cat("Billy", 3, "yellow", 4, "British Shorthair");
cat.About();
cat.All_about_cat();

// --------------------------------------Exercises Level 2----------------------------------------------

/*
1. Override the method you create in Animal class
*/

class Herbivorous_dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }
  About() {
    super.About();
    console.log(`Breed: ${this.breed}`);
    console.log(`Voice: Bark(Woof Woof)`);
  }
}

const herb_dog = new Herbivorous_dog("Tommy", 5, "brown", 4, "German Shephard");
herb_dog.About();

// --------------------------------------Exercises Level 3----------------------------------------------
/*
1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
    In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
    You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

1. Create a class called PersonAccount.
    It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
    Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

*/
class statistics {
  constructor(array) {
    this.array = array;
  }
  count() {
    return this.array.length;
  }
  sum() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
    }
    return sum;
  }
  min() {
    return Math.min(...this.array);
  }
  max() {
    return Math.max(...this.array);
  }
  range() {
    return Math.abs(this.max() - this.min());
  }
  mean() {
    return this.sum() / this.count();
  }
  median() {
    const sortedArray = this.array.sort((a, b) => a - b);
    const middle = Math.floor(this.array.length / 2);
    if (this.array.length % 2 === 0) {
      return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
      return sortedArray[middle];
    }
  }
  mode() {
    let freq = {};
    let maxfreq = 0;
    let mode = null;
    for (let value of this.array) {
      freq[value] = freq[value] ? freq[value] + 1 : 1;
      if (freq[value] > maxfreq) {
        maxfreq = freq[value];
        mode = value;
      }
    }
    return mode;
  }
  variance() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += Math.pow(this.array[i] - this.mean(), 2);
    }
    return sum / this.array.length;
  }
  std() {
    return Math.sqrt(this.variance());
  }
  freqDist() {
    const freq = {};
    for (let i = 0; i < this.array.length; i++) {
      freq[this.array[i]] = freq[this.array[i]] ? freq[this.array[i]] + 1 : 1;
    }
    return Object.entries(freq);
  }

  describe() {
    console.log("Count:", this.count());
    console.log("Sum: ", this.sum());
    console.log("Min: ", this.min());
    console.log("Max: ", this.max());
    console.log("Range: ", this.range());
    console.log("Mean: ", this.mean());
    console.log("Median: ", this.median());
    console.log("Mode: ", this.mode());
    console.log("Variance: ", this.variance());
    console.log("Standard Deviation: ", this.std());
    console.log("Frequency Distribution: ", this.freqDist());
  }
}
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const stats = new statistics(ages);
stats.describe();

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = {};
    this.expenses = {};
  }

  addIncome(amount, description) {
    this.incomes[description] = amount;
  }

  addExpense(amount, description) {
    this.expenses[description] = amount;
  }

  totalIncome() {
    return Object.values(this.incomes).reduce((acc, cur) => acc + cur, 0);
  }

  totalExpense() {
    return Object.values(this.expenses).reduce((acc, cur) => acc + cur, 0);
  }

  accountInfo() {
    const income = this.totalIncome();
    const expense = this.totalExpense();
    const balance = income - expense;

    return `Name: ${this.firstname} ${this.lastname}\nIncome: ${income}\nExpense: ${expense}\nBalance: ${balance}`;
  }

  accountBalance() {
    const income = this.totalIncome();
    const expense = this.totalExpense();
    return income - expense;
  }
}
const person = new PersonAccount("Shrey", "Patel");
person.addIncome(500, "Salary");
person.addExpense(200, "Rent");
person.addExpense(50, "Groceries");
console.log(person.accountInfo());
console.log(person.accountBalance());
