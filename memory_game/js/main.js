let cardsInPlay = [];
let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]

let checkForMatch = function() {
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        }
        else {
            alert("Sorry, try again.");
        }
    }
}

let flipCard = function() {
    var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
}

let createBoard = function () {
    for(i = 0; i < cards.length; i++) {
        var imageElement = document.createElement('img');
        imageElement.setAttribute("src", "images/back.png");
        imageElement.setAttribute("data-id", i);
        imageElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(imageElement);
    }
}

createBoard();

