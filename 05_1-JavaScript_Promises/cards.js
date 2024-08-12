let deckID = null;

document.addEventListener("DOMContentLoaded", async function () {
    const dealButton = document.getElementById("deal-button");

    await getDeckID();

    dealButton.addEventListener("click", async function () {
        drawCard();
    });
});

async function getDeckID() {
    await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
        method: 'GET'
    }).then(async function (response) {
        let json = await response.json();
        console.log(json);
        deckID = json.deck_id;
    }).catch(function (error) {
        console.log(error);
    });
}

async function drawCard() {
    let url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
    await fetch(url, {
        method: 'GET'
    }).then(async function (response) {
        let json = await response.json();
        appendCard(json.cards[0]);
    }).catch(function (error) {
        console.log(error);
    });
}

function appendCard(card) {
    const cardArea = document.getElementById("card-area");

    let image = document.createElement("img");
    image.setAttribute("card-data", card.code);
    image.src = card.image;
    cardArea.appendChild(image);
}