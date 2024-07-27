/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let p = arr[start];
    let index = start;

    for (let i = start + 1; i <= end; i++) {
        if (p > arr[i]) {
            index++;

            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[start];
    arr[start] = arr[index];
    arr[index] = temp;

    return index;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let p = pivot(arr, left, right);
        quickSort(arr, left, p - 1);
        quickSort(arr, p + 1, right);
    }

    return arr;
}

module.exports = { pivot, quickSort };