//** currying **//
// Function currying is a technique in functional programming where a function with
// multiple arguments is transformed into a sequence of functions, each taking a single 
// argument.This allows for more flexible and reusable code.


let multipy = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplybytwo = multipy(2);
multiplybytwo(3);

let multiplybythree = multipy(3);
multiplybythree(10)
