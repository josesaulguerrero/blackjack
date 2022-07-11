const { instance: deck } = require("./Deck.js");

class Game {
	#round;

	start() {
		console.log(deck.cards);
	}

	get round() {
		return this.round;
	}
}

module.exports = { instance: Object.freeze(new Game()) };
