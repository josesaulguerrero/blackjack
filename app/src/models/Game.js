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
		this.#player.score = this.#sumDealtCards();
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

	async start() {
		this.#initAttributes();
		this.#dealInitialCards();
		this.#player.score = this.#sumDealtCards();
		this.#player.printScore();
		if (this.#checkVictory()) {
			console.log("Flawless victory! Blackjack!");
			return this.exit();
		}
		this.#gameplay();
	}

	#stand() {
		console.log("finishing game...");
		this.#player.printScore();
		if (this.#checkVictory()) {
			console.log(`Your score is ${this.#player.score}, Blackjack!`);
		}
		console.log("Your score didn't reach the limit... You lost!");
	}

	#hit() {
		const card = this.#dealCard();
		console.log(`Your dealt card is: ${card.toString()}`);
		this.#player.printScore();
	}

	async #gameplay() {
		const { choice } = await inquirer.prompt([
			{
				message: "Do you want to stand or hit?",
				type: "list",
				choices: ["Stand", "Hit"],
				name: "choice",
			},
		]);
		const stood = choice.toLowerCase() === "stand";
		stood ? this.#stand() : this.#hit();
		if (!this.#checkVictory()) {
			return stood && this.exit();
			await this.#gameplay();
		}
		console.log("Blackjack!");
		this.#player.printScore();
		return this.exit();
		// ConsoleUtils.readAndVerify(
		// 	"Do you want to stand or hit? (STAND/HIT)",
		// 	(option) => {
		// 		option.toLowerCase() === "stand" ? this.#stand() : this.#hit();
		// 		return this.#gameplay();
		// 	},
		// 	(text) => /^(stand|hit)$/i.test(text.trim())
		// );
		// stand or draw a card (loop)
		// NumberUtils.betweenRange(18, 21, player.score) ? win|() : checkIfGreaterThan21;
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
