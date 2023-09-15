function LinearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }
    return -1
}

let arr = [4, 8, 22, 2, 0, 9, -1];
console.log(LinearSearch(arr, 0));


