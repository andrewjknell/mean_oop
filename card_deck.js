class Card {
    constructor() {
        this.suit = ["Hearts", "Clubs", "Diamonds", "Spades"];
        this.strVal = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
        this.numVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
    show() {
        const pickSuit = Math.floor(Math.random() * 4);
        const pickNum = Math.floor(Math.random() * 13);
        console.log(`You chose suit: ${this.suit[pickSuit]}, card: ${this.strVal[pickNum]}, value: ${this.numVal[pickNum]}`);
    }
}
var card1 = new Card();
var card2 = new Card();
card1.show();
card2.show();

// class Deck {
//     constructor() {
//         this.deck = [];
//     }

//     this.deck.push(`${value} of ${suit}`);
// }
