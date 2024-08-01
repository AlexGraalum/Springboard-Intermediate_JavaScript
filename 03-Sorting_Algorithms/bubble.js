function bubbleSort(arr) {
    let done = true;
    let size = arr.length;

    do {
        done = true;
        for (let i = 0; i < size - 1; i++) {
            for (let j = i + 1; j < size; j++) {
                if (arr[i] > arr[j]) {
                    done = false;
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    } while (done == false);
    return arr;
}

module.exports = bubbleSort;