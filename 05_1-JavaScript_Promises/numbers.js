document.addEventListener("DOMContentLoaded", function () {
    getFavoriteNumberTrivia();
    getMultipleNumbers();
    getMultipleFacts();
});


async function getFavoriteNumberTrivia() {
    let trivia = document.getElementById("favorite-trivia");

    let response = await fetch('http://numbersapi.com/25?json');
    let respJson = await response.json();

    trivia.innerText = respJson.text;
}

async function getMultipleNumbers() {
    let arr = [10, 36, 99];
    let multi = document.getElementById("multiple-trivia");

    let url = 'http://numbersapi.com/';
    for (let i = 0; i < arr.length; i++) {
        url += arr[i];
        if (i + 1 < arr.length)
            url += ',';
    }

    let response = await fetch(url);
    let respJson = await response.json();

    for (num of arr) {
        let item = document.createElement("li");
        item.textContent = respJson[num];
        multi.appendChild(item);
    }
}

async function getMultipleFacts() {
    let multi = document.getElementById("multiple-facts");
    let arr = [];

    for (let i = 0; i < 4; i++) {
        let response = await fetch('http://numbersapi.com/25?json');
        let respJson = await response.json();
        arr.push(respJson.text);
    }

    for (num of arr) {
        let item = document.createElement("li");
        item.textContent = num;
        multi.appendChild(item);
    }
}