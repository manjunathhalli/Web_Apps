//BubbleSort algorithm
export const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        // Last i elements are already in place  
        for (let j = 0; j < array.length - 1 - i; j++) {
            // Checking if the item at present iteration is greater than the next iteration
            if (array[j] > array[j + 1]) {
                // If the condition is true then swap them
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

//SelectionSort algorithm
export const selectionSort = (array) => {
    //We only have to do n-1 swaps
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        //as first element is already locked
        for (let j = i + 1; j < array.length; j++) {
            //find min element index, to swap
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        //Swap
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}


//MergeSort algorithm
export const merge = (left, right) => {
    let result = [],
        leftLen = left.length,
        rightLen = right.length,
        l = 0,
        r = 0;
    while (l < leftLen && r < rightLen) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
};

export const mergeSort = (arr) => {
    let len = arr.length;
    //If less than 2, that means there’s only 1 element in the array and it’s trivially sorted.
    if (len < 2) {
        return arr;
    }
    //Calculate mid-point, divide array into 2 halves left and right and merge recursively.
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};


//BinarySearch algorithm
export const binarySearch = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;
}