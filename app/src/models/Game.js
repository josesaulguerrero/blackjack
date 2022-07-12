import { NumberUtils } from "../utils/NumberUtils.js";
import { instance as deck } from "./Deck.js";
import { Player } from "./Player.js";
import { Suites } from "./Suites.js";
import { Card } from "./Card.js";
import inquirer from "inquirer";
import { ConsoleUtils } from "../utils/ConsoleUtils.js";

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
		const randomCard = deck.pickRandomCard();
		this.#dealtCards.push(randomCard);
		return randomCard;
	}

	#dealInitialCards() {
		const initialCards = [this.#dealCard(), this.#dealCard()];
		console.log(
			"Your initial cards are:",
			initialCards.map((card) => card.toString())
		);
	}

	#sumDealtCards() {
		return this.#dealtCards
			.sort((a, b) => a - b)
			.reduce((acc, card) => {
				if (card.name === "Ace")
					return acc + 11 > 21 ? acc + 1 : acc + 11;
				return acc + card.value;
			}, 0);
	}

	#checkVictory() {
		return NumberUtils.isBetweenRange(this.#player.score, 18, 21);
	}

	start() {
		this.#initAttributes();
		this.#dealInitialCards();
		this.#player.score = this.#sumDealtCards();
		this.#player.printScore();
		if (this.#checkVictory()) {
			console.log("Flawless victory! Blackjack!");
		}
		this.#gameplay();
	}

	#stand() {
		console.log("standing");
	}

	#hit() {
		console.log("hitting");
	}

	#gameplay() {
		ConsoleUtils.readAndVerify(
			"Do you want to stand or hit? (STAND/HIT)",
			(option) => {
				option.toLowerCase() === "stand" ? this.#stand() : this.#hit();
			},
			(text) => /^(stand|hit)$/i.test(text.trim())
		);
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
