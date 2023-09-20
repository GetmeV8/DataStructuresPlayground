function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const john = new Person('John Doe', 30);
john.greet(); // Output: "Hello, my name is John Doe and I am 30 years old."
