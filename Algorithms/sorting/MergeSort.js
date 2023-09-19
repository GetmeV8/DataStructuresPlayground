// **Merge sort idea**//

// * Divide the array into sub arrays, each containing only one element (An array with one element is
//   considered sorted)
// * Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub
//   array remaining. That will be the sorted array.




function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array with 0 or 1 elements is already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example Usage:
const unsortedArray = [5, 3, 1, 8, 6, 2, 7, 4];
const sortedArray = mergeSort(unsortedArray);

console.log("Sorted Array:", sortedArray);
