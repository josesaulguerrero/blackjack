import { instance as deck } from "./Deck.js";

class Game {
	#round;

	start() {
		console.log(deck.cards);
	}

	get round() {
		return this.round;
	}
}

export const instance = Object.freeze(new Game());
