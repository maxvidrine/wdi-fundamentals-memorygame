let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        }
        else {
            alert("Sorry, try again.");
        }
    }
}

let flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);

