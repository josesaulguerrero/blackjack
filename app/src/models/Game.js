import inquirer from "inquirer";
import { NumberUtils } from "../utils/NumberUtils.js";
import { instance as deck } from "./Deck.js";
import { Player } from "./Player.js";

class Game {
	#round;
	#deck;
	#player;
	#dealtCards;

	#initAttributes() {
		this.#deck = deck;
		this.#round = 1;
		this.#player = new Player();
		this.#dealtCards = [];
	}

	#dealCard() {
		const randomCard = this.#deck.pickRandomCard();
		this.#dealtCards.push(randomCard);
		return randomCard;
	}

	#dealInitialCards() {
		const initialCards = [this.#dealCard(), this.#dealCard()];
		this.#dealtCards.concat(initialCards);
		console.log(
			"Your initial cards are:",
			initialCards.map((card) => card.toString())
		);
	}

	#sumDealtCards() {
		return this.#dealtCards.reduce((acc, card) => acc + card.value, 0);
	}

	#checkVictory() {
		return NumberUtils.isBetweenRange(this.#player.score, 18, 21);
	}

	start() {
		this.#initAttributes();
		this.#dealInitialCards();
		this.#player.score = this.#sumDealtCards();
		this.#player.printScore();
		// validate jack [1, 11]
		if (this.#checkVictory()) {
			console.log("Flawless victory!");
		}
		// stand or draw a card (loop)
		// NumberUtils.betweenRange(18, 21, player.score) ? win() : checkIfGreaterThan21;
		// won && playNextRound?
		// round ++
		// round === 3 && finishGame()
	}

	exit() {
		console.log("Bye-bye~");
		return 0;
	}
}

export const instance = Object.freeze(new Game());
