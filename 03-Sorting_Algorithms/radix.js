function getDigit(num, digit) {
    return Math.floor((num / Math.pow(10, digit)) % 10);
}

function digitCount(num) {
    let i = 0;

    while (num > 0) {
        i++;
        num = ((num - (num % 10)) / 10);
    }
    return i;
}

function mostDigits(arr) {
    let i = 0;

    for (a of arr)
        i = Math.max(i, digitCount(a));
    return i;
}

function radixSort(arr) {
    for (let i = 0; i < mostDigits(arr); i++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);

            buckets[digit].push(arr[j]);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };