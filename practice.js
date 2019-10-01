class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // prototype method
    showLocation() {
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
    // static method
    static getHelp() {
        console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
    }
} 
let dot3 = new Dot(4, 2);
// we can see showLocation from our instance...
dot3.showLocation();
// but we can't see getHelp
//console.log(dot3.getHelp);
// however we can call getHelp this way:
//Dot.getHelp();
show() {
    const pickSuit = Math.floor(Math.random()*4);
    const pickNum = Math.floor(Math.random()*13);
    //console.log(pickNum);
    console.log(`You chose this card! Suit: ${this.suit[pickSuit]}, Name: ${this.stringValue[pickNum]}, Numeric: ${this.numVal[pickNum]}`);
}
}    
var card1 = new Card();
var card2 = new Card();
card1.show();
card2.show();