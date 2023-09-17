const array = [5, 1, 3, 2, 6];


//**Map**//
//Transformation logic//

//Double = [10,2,6,4,12]
//Triple = [15,3,9,6,18]

function double(x) {
    return x * 2;
}
const binaryOutput = array.map((x) => x.toString(2));
const output = array.map(double)
console.log(output)

//**Filter**//

// function isOdd(x) {
//     return x % 2;
//     //return x%2===0;
//     //return x>4;
// }
// const filterOutput= array.filter(isOdd);
const filterOutput = array.filter((x) => x > 4);
console.log(filterOutput);

