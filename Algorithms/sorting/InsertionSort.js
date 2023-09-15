                    //**Insertion sort idea**//

// * Virtually split the array into a sorted and an unsorted part
// * Assume that the first element is already sorted and remaining elements
// * Select an unsorted element and compare with all elements in the sorted
// * If the elements in the sorted part is smaller than the selected element,
// * element in the unsorted part. Else, shift larger elements in the sorted part
// * Insert the selected element at the right index
// * Repeat till all the unsorted elements are placed in the right order


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;  
        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current; 
    }
    return arr;
}
let array = [-6, 20, 8, -2, 4];
console.log(insertionSort(array));
