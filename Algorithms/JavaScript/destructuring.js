// Example array
const numbers = [1, 2, 3, 4, 5];

// Destructuring
const [first, second, third, fourth,] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
console.log(third); // Output:3

// Example object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
};

// Destructuring
const { firstName, lastName, age } = person

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);        // Output: 30
