// -------------------------------------------Exercises Level 1----------------------------------------------------

/*
1. Change skills array to JSON using JSON.stringify()
2. Stringify the age variable
3. Stringify the isMarried variable
4. Stringify the student object
*/

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;

let skills_json = JSON.stringify(skills, undefined, 4);
let age_json = JSON.stringify(age);
let isMarried_json = JSON.stringify(isMarried);
console.log(skills_json);
console.log(age_json);
console.log(isMarried_json);

// -------------------------------------------Exercises Level 2----------------------------------------------------

/*
1. Stringify the student object with only firstName, lastName and skills properties
*/
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

let student_json = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  4
);
console.log(student_json);

// -------------------------------------------Exercises Level 3----------------------------------------------------

/*
1. Parse the txt JSON to object.
2. Find the user who has many skills from the variable stored in txt.
*/

const txt = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`;

let students_obj = JSON.parse(txt);

console.log(students_obj);

let most_skills = 0;
let most_skills_user;

for (let item in students_obj) {
  if (students_obj[item].skills.length > most_skills) {
    most_skills = students_obj[item].skills.length;
    most_skills_user = item;
  }
}

console.log(most_skills_user, most_skills);
