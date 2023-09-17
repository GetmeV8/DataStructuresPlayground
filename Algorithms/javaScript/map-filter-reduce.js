const array = [5,1,3,2,6];

//Transformation logic//

//Double = [10,2,6,4,12]

//Triple = [15,3,9,6,18]

function double(x){
    return x * 2;
}

const output = array.map(double)
console.log(output)