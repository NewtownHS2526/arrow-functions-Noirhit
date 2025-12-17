// ============================================
// MAP FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
*/
const exercise1Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const exercise1Result1 = exercise1Array.map(person => person.name);

const exercise1Result2 = exercise1Array.map((person) => {
  return person.name;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

/*
EXERCISE 2
*/
const exercise2Array = [5, 10, 15, 20];

const exercise2Result1 = exercise2Array.map(n => n + " dollars");

const exercise2Result2 = exercise2Array.map((n) => {
  return n + " dollars";
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

/*
EXERCISE 3
*/
const exercise3Array = ["red", "green", "blue"];

const exercise3Result1 = exercise3Array.map(color => `<div>${color}</div>`);

const exercise3Result2 = exercise3Array.map((color) => {
  return `<div>${color}</div>`;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

/*
EXERCISE 4
*/
const exercise4Array = [1, 2, 3, 4, 5];

const exercise4Result1 = exercise4Array.map(n => n * n + 10);

const exercise4Result2 = exercise4Array.map((n) => {
  return n * n + 10;
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

/*
EXERCISE 5
*/
const exercise5Array = ["apple", "banana", "cherry"];

const exercise5Result1 = exercise5Array.map(fruit => fruit.split("").reverse().join(""));

const exercise5Result2 = exercise5Array.map((fruit) => {
  return fruit.split("").reverse().join("");
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
