                            //**BubbleSort idea**//

// * Compare adjacent elements in the array and swap the positions if they are not in the intended
//   order
// * Repeat the instruction as you step through each element in the array
// *  Once you step through the whole array with no swaps, the array is sorted


function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}
let array = [-6, 20, 8, -2, 4];
console.log(bubbleSort(array));