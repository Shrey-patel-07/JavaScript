// ---------------------------------------Exercises: Level 1--------------------------------------------

/*
1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo
*/
const dog = {};
console.log(dog);

dog.name = "Fido";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function () {
  return "Woof woof";
};
console.log(dog);

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "german shephard";
dog.getDogInfo = function () {
  let name = this.name;
  let legs = this.legs;
  let color = this.color;
  let age = this.age;
  let bark = this.bark();
  let breed = this.breed;
  return `My dog name is ${name}, he is ${color} colored ${breed}. This ${legs} legged animal is ${age} years old and he do ${bark} all the time.`;
};
console.log(dog.getDogInfo());

// ---------------------------------------Exercises: Level 2--------------------------------------------

/*

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

1. Find the person who has many skills in the users object.

2. Count logged in users, count users having greater than equal to 50 points from the following object.

3. Find people who are MERN stack developer from the users object

4. Set your name in the users object without modifying the original users object

5. Get all keys or properties of users object

6. Get all the values of users object

7. Use the countries object to print a country name, capital, populations and languages.  (No 'countries' object is available)
*/

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

for (const person of Object.keys(users)) {
  if (users[person].skills.length > 1) {
    console.log(person);
  }
}

let loggedinusers = 0,
  morethan50points = 0;

for (const person in users) {
  if (users[person].isLoggedIn) loggedinusers++;
  if (users[person].points >= 50) morethan50points++;
}

console.log(loggedinusers);
console.log(morethan50points);

for (const person in users) {
  if (users[person].skills.includes("MongoDB", "Express", "React", "Node")) {
    console.log(person);
  }
}

const myname = {
  email: "shrey07patel@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "Django", "Python", "C++"],
  age: 19,
  isLoggedIn: true,
  points: 50,
};
users["Shrey"] = myname;
console.log(users);

console.log(Object.keys(users));

console.log(Object.values(users));

// ---------------------------------------Exercises: Level 3--------------------------------------------

/*
1. Create an object literal called personAccount.
    It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
    Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

Imagine you are getting the above users collection from a MongoDB database.
  a. Create a function called signUp which allows user to add to the collection.
  If user exists, inform the user that he has already an account.
  b. Create a function called signIn which allows user to sign in to the application.

3. The products array has three elements and each of them has six properties.
   a. Create a function called rateProduct which rates the product 
   b. Create a function called averageRating which calculate the average rating of a product

4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

*/

const personAccount = {
  firstName: "Shrey",
  lastName: "Patel",
  incomes: [],
  expenses: [],

  get get_totalincome() {
    let totalincome = 0;
    for (let income of this.incomes) {
      totalincome += income.income;
    }
    return totalincome;
  },
  get get_totalexpense() {
    let totalexpense = 0;
    for (let expense of this.expenses) {
      totalexpense += expense.expense;
    }
    return totalexpense;
  },
  get_accountinfo: function () {
    return `Name: ${this.firstName} ${this.lastName}, Income: $${this.get_totalincome}, Expenses: $${this.get_totalexpense}`;
  },
  addIncome: function (description, income) {
    this.incomes.push({ description, income });
  },
  addExpense: function (description, expense) {
    this.expenses.push({ description, expense });
  },
  accountBalance: function () {
    let account_bal = this.get_totalincome - this.get_totalexpense;
    return `Account Balance: $${account_bal > 0 ? account_bal : 0}`;
  },
};

personAccount.addIncome("Savings", 10000);
personAccount.addIncome("Bank", 50000);
personAccount.addIncome("Rent", 20000);

personAccount.addExpense("Food", 2000);
personAccount.addExpense("Clothes", 5000);

console.log(personAccount.get_accountinfo());
console.log(personAccount.accountBalance());

const people = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function uuid() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function newUser(username, email, password) {
  const user = {
    _id: uuid(),
    username: username,
    email: email,
    password: password,
    isLoggedIn: true,
  };
  signUp(user);
}

function signUp(newUser) {
  const existingUser = people.find(
    (user) => user.email === newUser.email || user.username === newUser.username
  );
  if (existingUser) {
    console.log("User already exists with that email or username.");
  } else {
    newUser.createdAt = new Date();
    people.push(newUser);
    console.log("User has been added to the collection.");
  }
}

function signIn(username, password) {
  const user = people.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    user.isLoggedIn = true;
    console.log("User has been signed in.");
    return user;
  } else {
    console.log("Invalid username or password.");
    return null;
  }
}

function rateProduct(productId, userId, rating) {
  const product = products.find((product) => product._id === productId);
  if (!product) {
    console.log("Product not found.");
    return;
  }
  const existingRating = product.ratings.find((r) => r.userId === userId);
  if (existingRating) {
    existingRating.rate = rating;
    console.log("Rating has been updated.");
  } else {
    product.ratings.push({ userId, rate: rating });
    console.log("Rating has been added.");
  }
}

function averageRating(productId) {
  const product = products.find((product) => product._id === productId);
  if (!product) {
    console.log("Product not found.");
    return;
  }
  const totalRating = product.ratings.reduce((acc, r) => acc + r.rate, 0);
  const avgRating = totalRating / product.ratings.length;
  console.log(`Average rating for ${product.name}: ${avgRating}`);
  return avgRating;
}

function likeProduct(userId, productId) {
  const product = products.find((product) => product._id === productId);
  if (!product) {
    console.log("Product not found.");
    return;
  }
  const userIndex = product.likes.indexOf(userId);
  if (userIndex === -1) {
    product.likes.push(userId);
    console.log(`User ${userId} has liked ${product.name}.`);
  } else {
    product.likes.splice(userIndex, 1);
    console.log(`User ${userId} has unliked ${product.name}.`);
  }
}

newUser("johnsmith", "johnsmith@example.com", "password123");
signIn("johnsmith", "password123");
rateProduct("hedfcg", "fg12cy", 4);
likeProduct("fg12cy", "hedfcg");
likeProduct("fg12cy", "hedfcg");

averageRating("eedfcf");
