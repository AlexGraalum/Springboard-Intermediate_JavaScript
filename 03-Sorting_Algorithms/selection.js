function selectionSort(arr) {
    let size = arr.length;
    for (let i = 0; i < size - 1; i++) {
        let min = i;

        for (let j = i + 1; j < size; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

module.exports = selectionSort;