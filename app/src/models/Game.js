import inquirer from "inquirer";
import { NumberUtils } from "../utils/NumberUtils.js";
import { instance as deck } from "./Deck.js";
import { Player } from "./Player.js";
import { Suites } from "./Suites.js";
import { Card } from "./Card.js";

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
		const randomCard = new Card(Suites.CLUBS, "Jack", [1, 11], false);
		this.#dealtCards.push(randomCard);
		return randomCard;
	}

	#dealInitialCards() {
		const initialCards = [this.#dealCard(), this.#dealCard()];
		// this.#dealtCards.concat(initialCards);
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

	async start() {
		this.#initAttributes();
		this.#dealInitialCards();
		if (this.#dealtCards.some((card) => card.isJack())) {
			this.#dealtCards = await this.#dealtCards.map(async (card) => {
				if (card.isJack()) {
					return await Card.setJackValue();
				}
				return card;
			});
		}
		this.#player.score = this.#sumDealtCards();
		this.#player.printScore();
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
