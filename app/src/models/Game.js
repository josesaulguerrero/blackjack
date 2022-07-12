import inquirer from "inquirer";
import { instance as deck } from "./Deck.js";

class Game {
	#round;
	#deck;

	start() {}

	#initAttributes() {
		this.#deck = deck;
		this.#round = 1;
	}

	exit() {
		console.log("Bye-bye~");
		return 0;
	}

	get round() {
		return this.#round;
	}

	get deck() {
		return this.#deck;
	}
}

export const instance = Object.freeze(new Game());
