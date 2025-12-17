// ============================================
// MAP FUNCTION - LEVEL 1
// ============================================

/*
WHAT IS AN ARRAY?
================
An array is a special variable that can hold multiple values at once. 
Think of it like a list or a collection of items. Arrays are ordered, 
meaning each item has a position (called an index) starting from 0.
*/

/*
WHAT IS THE map() FUNCTION?
===========================
The map() function is used to TRANSFORM every element in an array and 
create a new array with the transformed values. It doesn't change the 
original array - it returns a brand new array.
*/

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
*/
const exercise1Array = [1, 2, 3, 4, 5];

const exercise1Result1 = exercise1Array.map(n => n * 3);

const exercise1Result2 = exercise1Array.map((n) => {
  return n * 3;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

/*
EXERCISE 2
*/
const exercise2Array = ["hello", "world", "javascript"];

const exercise2Result1 = exercise2Array.map(word => word + "!");

const exercise2Result2 = exercise2Array.map((word) => {
  return word + "!";
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

/*
EXERCISE 3
*/
const exercise3Array = [10, 20, 30, 40];

const exercise3Result1 = exercise3Array.map(n => n / 2);

const exercise3Result2 = exercise3Array.map((n) => {
  return n / 2;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

/*
EXERCISE 4
*/
const exercise4Array = ["cat", "dog", "bird"];

const exercise4Result1 = exercise4Array.map(animal => animal.toUpperCase() + "S");

const exercise4Result2 = exercise4Array.map((animal) => {
  return animal.toUpperCase() + "S";
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

/*
EXERCISE 5
*/
const exercise5Array = [2, 4, 6, 8];

const exercise5Result1 = exercise5Array.map(n => n * n);

const exercise5Result2 = exercise5Array.map((n) => {
  return n * n;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
