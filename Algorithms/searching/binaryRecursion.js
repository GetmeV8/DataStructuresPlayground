function RecursiveBinarySearch(array, target) {
    return Search(array, target, 0, array.length - 1);

}
function Search(array, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    let middleindex = Math.floor((leftIndex + rightIndex) / 2)
    if (array[middleindex] === target) {
        return middleindex
    }
    if (target < array[middleindex]) {
        return Search(array, target, leftIndex, middleindex - 1)
    } else {
        return Search(array, target, rightIndex, middleindex + 1)
    }
}


let aar = [-5, 2, 4, 6, 1];
console.log(RecursiveBinarySearch(aar, 2));