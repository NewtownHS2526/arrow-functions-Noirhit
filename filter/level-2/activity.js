// ============================================
// FILTER FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
*/
const exercise1Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 16 }
];

const exercise1Result1 = exercise1Array.filter(person => person.age >= 18);

const exercise1Result2 = exercise1Array.filter((person) => {
  return person.age >= 18;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

/*
EXERCISE 2
*/
const exercise2Array = [5, -3, 10, -8, 15, -1, 20];

const exercise2Result1 = exercise2Array.filter(n => n > 0);

const exercise2Result2 = exercise2Array.filter((n) => {
  return n > 0;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

/*
EXERCISE 3
*/
const exercise3Array = ["javascript", "python", "java", "c++", "html", "css"];

const exercise3Result1 = exercise3Array.filter(lang => lang.length > 4);

const exercise3Result2 = exercise3Array.filter((lang) => {
  return lang.length > 4;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

/*
EXERCISE 4
*/
const exercise4Array = [12, 45, 8, 23, 56, 9, 34, 67];

const exercise4Result1 = exercise4Array.filter(n => n >= 20 && n <= 50);

const exercise4Result2 = exercise4Array.filter((n) => {
  return n >= 20 && n <= 50;
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

/*
EXERCISE 5
*/
const exercise5Array = ["apple", "banana", "cherry", "date", "elderberry"];

const exercise5Result1 = exercise5Array.filter(fruit => fruit.includes("a"));

const exercise5Result2 = exercise5Array.filter((fruit) => {
  return fruit.includes("a");
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
