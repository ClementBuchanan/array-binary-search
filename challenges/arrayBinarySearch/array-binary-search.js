'use strict';

// const mid = left + (right - left)/2
// const left = 0;
// const right = len(arr)-1;

// function binarySearch (arr, left, right, x) => {
//     if (left > right) {
//         return false;
//     }
//     if (array[mid] == x) {
//         return binarySearch(arr, x, left, mid-1);
//     } else {
//         return binarySearch(array, x, mid + 1, right);
//     }

// }

let arr = [2, 4, 5, 12, 13, 31, 32, 66];

function binarySearch (arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    
    while (low <= high) {
        let mid = low ((low + high) / 2);  // if middle == value we're done
        if(arr[mid] == value){
        //return value
        retrurn arr[mid];
        }else if (value > arr[mid]) {
        // move low up by 1
        low = mid + 1;
        }else {
        // move high down by 1
        high = mid - 1
        }
    }
    return -1;
}
let wasItFound = binarySearch(83)
console.log(binarySearch);