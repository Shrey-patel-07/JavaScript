// ---------------------------------------Exercises: Level 1--------------------------------------

/*
1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,
   0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12

  3. Write a pattern which identify if a string is a valid JavaScript variable

    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True

*/
const statement_1 =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let source_of_income = statement_1.match(/\d+/g);
let total = source_of_income.reduce(
  (total, number) => total + Number(number),
  0
);
console.log(total);

const statement_2 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,0 at origin, 4 and 8 in the positive direction.";

const points = statement_2.match(/\d+/g);

const sortedPoints = points.sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(distance);

const is_valid_variable = (variable) => {
  console.log(/^[$A-Z_][0-9A-Z_$]*$/i.test(variable));
};

is_valid_variable("first_name");
is_valid_variable("first-name");
is_valid_variable("1first_name");
is_valid_variable("firstname");

// ---------------------------------------Exercises: Level 2--------------------------------------

/*
1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))

     [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]

    console.log(tenMostFrequentWords(paragraph, 10))

    [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
    */

const tenMostFrequentWords = (paragraph, n) => {
  let words = paragraph.match(/\b\w+\b/g);
  let result = {};
  for (let word of words) {
    result[word] = result[word] ? result[word] + 1 : 1;
  }
  const sorted_result = Object.entries(result)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count);
  return sorted_result.slice(0, n);
};

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));

// ---------------------------------------Exercises: Level 3--------------------------------------

/*
1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
 ```
2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

  ```
 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
*/

const statement_3 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (text) => {
  return text.replace(/[^\w .?]/g, "");
};

console.log(cleanText(statement_3));

const mostFrequentWords = (text) => {
  let words = cleanText(text);
  let result = {};
  for (let word of words) {
    if (word != " ") result[word] = result[word] ? result[word] + 1 : 1;
  }
  const sorted_result = Object.entries(result)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count);
  return sorted_result.slice(0, 3);
};

console.log(mostFrequentWords(statement_3));
