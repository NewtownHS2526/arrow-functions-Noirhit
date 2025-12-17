// ============================================
// MAP FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
*/
const exercise1Array = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" }
];

const exercise1Result1 = exercise1Array.map(person => person.firstName + " " + person.lastName);

const exercise1Result2 = exercise1Array.map((person) => {
  return person.firstName + " " + person.lastName;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

/*
EXERCISE 2
*/
const exercise2Array = [3, 7, 2, 9, 5];

const exercise2Result1 = exercise2Array.map(n => "Number: " + n);

const exercise2Result2 = exercise2Array.map((n) => {
  return "Number: " + n;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

/*
EXERCISE 3
*/
const exercise3Array = [10, 25, 30, 45];

const exercise3Result1 = exercise3Array.map(n => n + "%");

const exercise3Result2 = exercise3Array.map((n) => {
  return n + "%";
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

/*
EXERCISE 4
*/
const exercise4Array = ["hello world", "javascript is fun", "coding rocks"];

const exercise4Result1 = exercise4Array.map(
  text => text.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
);

const exercise4Result2 = exercise4Array.map((text) => {
  return text
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

/*
EXERCISE 5
*/
const exercise5Array = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 4 },
  { price: 8, quantity: 3 }
];

const exercise5Result1 = exercise5Array.map(item => item.price * item.quantity);

const exercise5Result2 = exercise5Array.map((item) => {
  return item.price * item.quantity;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
