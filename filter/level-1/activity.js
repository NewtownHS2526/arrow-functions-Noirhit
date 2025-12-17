// ============================================
// FILTER FUNCTION - LEVEL 1
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
*/
const exercise1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const exercise1Result1 = exercise1Array.filter(n => n % 2 !== 0);

const exercise1Result2 = exercise1Array.filter((n) => {
  return n % 2 !== 0;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

/*
EXERCISE 2
*/
const exercise2Array = ["apple", "banana", "kiwi", "orange", "grape"];

const exercise2Result1 = exercise2Array.filter(fruit => fruit.length >= 5);

const exercise2Result2 = exercise2Array.filter((fruit) => {
  return fruit.length >= 5;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

/*
EXERCISE 3
*/
const exercise3Array = [15, 8, 22, 5, 30, 12, 18];

const exercise3Result1 = exercise3Array.filter(n => n > 10);

const exercise3Result2 = exercise3Array.filter((n) => {
  return n > 10;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

/*
EXERCISE 4
*/
const exercise4Array = ["red", "blue", "green", "yellow", "purple"];

const exercise4Result1 = exercise4Array.filter(color => color.startsWith("b"));

const exercise4Result2 = exercise4Array.filter((color) => {
  return color.startsWith("b");
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

/*
EXERCISE 5
*/
const exercise5Array = [2, 4, 6, 8, 10, 11, 12, 13, 14];

const exercise5Result1 = exercise5Array.filter(n => n % 4 === 0);

const exercise5Result2 = exercise5Array.filter((n) => {
  return n % 4 === 0;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
