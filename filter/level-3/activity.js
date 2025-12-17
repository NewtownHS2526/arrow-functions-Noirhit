// ============================================
// FILTER FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
*/
const exercise1Array = [
  { product: "Laptop", price: 1000, inStock: true },
  { product: "Mouse", price: 25, inStock: false },
  { product: "Keyboard", price: 75, inStock: true },
  { product: "Monitor", price: 300, inStock: false }
];

const exercise1Result1 = exercise1Array.filter(item => item.inStock);

const exercise1Result2 = exercise1Array.filter((item) => {
  return item.inStock;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

/*
EXERCISE 2
*/
const exercise2Array = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "Diana", age: 28, city: "Paris" }
];

const exercise2Result1 = exercise2Array.filter(person => person.city === "New York");

const exercise2Result2 = exercise2Array.filter((person) => {
  return person.city === "New York";
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

/*
EXERCISE 3
*/
const exercise3Array = [100, 250, 75, 500, 120, 300, 80];

const exercise3Result1 = exercise3Array.filter(n => n % 25 === 0);

const exercise3Result2 = exercise3Array.filter((n) => {
  return n % 25 === 0;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

/*
EXERCISE 4
*/
const exercise4Array = [
  { title: "Book A", pages: 150 },
  { title: "Book B", pages: 300 },
  { title: "Book C", pages: 200 },
  { title: "Book D", pages: 450 }
];

const exercise4Result1 = exercise4Array.filter(book => book.pages > 200);

const exercise4Result2 = exercise4Array.filter((book) => {
  return book.pages > 200;
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

/*
EXERCISE 5
*/
const exercise5Array = ["hello", "world", "javascript", "coding", "fun"];

const exercise5Result1 = exercise5Array.filter(word => word.length % 2 !== 0);

const exercise5Result2 = exercise5Array.filter((word) => {
  return word.length % 2 !== 0;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
