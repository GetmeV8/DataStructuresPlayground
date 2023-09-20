// function mergeSort(array) {
//     if (array.length < 2) {
//         return array
//     }
//     const mid = Math.floor(array.length / 2);
//     leftArr = array.slice(0, mid);
//     rightArr = array.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }
// function merge(leftArr, rightArr) {
//     const sortedArray = [];
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArray.push(leftArr.shift())
//         } else {
//             sortedArray.push(rightArr.shift())
//         }
//     }
//     return [...sortedArray, ...leftArr, ...rightArr];
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergeSort(arr));



function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArray = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArray.push(leftArr.shift());
        } else {
            sortedArray.push(rightArr.shift());
        }
    }
    return [...sortedArray, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
