/*
Practice
*/
try {
  let x = y + 1;
} catch (error) {
  console.log("An error type: " + error.name);
  console.log("An error msg: " + error.message);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero error!");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}
