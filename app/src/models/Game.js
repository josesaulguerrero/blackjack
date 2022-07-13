import { NumberUtils } from "../utils/NumberUtils.js";
import { instance as deck } from "./Deck.js";
import { Player } from "./Player.js";
import inquirer from "inquirer";

class Game {
	static BASE_REWARD = 1000;
	#round;
	#deck;
	#player;
	#dealtCards;
	#gameState;

	#initAttributes() {
		this.#deck = deck;
		this.#round = 0;
		this.#player = new Player(Game.BASE_REWARD);
		this.#dealtCards = [];
		this.#gameState = "playing";
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
			.sort((a, b) => a - b) // leave the aces for the end
			.reduce((acc, card) => {
				if (card.name === "Ace")
					return acc + 11 > 21 ? acc + 1 : acc + 11;
				return acc + parseInt(card.value);
			}, 0);
	}

	#isVictory() {
		return NumberUtils.isBetweenRange(this.#player.score, 18, 21);
	}

	#isGameOver() {
		return this.#player.score > 21;
	}

	#isStillPlaying() {
		return !this.#isVictory() && !this.#isGameOver();
	}

	#resetAttributes() {
		this.#deck.resetDeck();
		this.#dealtCards = [];
		this.#gameState = "playing";
	}

	async #handleNextRound() {
		if (this.#round >= 3) {
			return this.exit();
		}
		this.#round += 1;
		console.log(`round: ${this.#round}`);
		// reset attributes if round > 1
		this.#round && this.#resetAttributes();
		this.#dealInitialCards();
		this.#player.score = this.#sumDealtCards();
		this.#player.printScore();
		if (this.#isVictory()) {
			console.log("Flawless victory! Blackjack!");
			return this.#handleNextRound();
		}
		await this.#gameplay();
	}

	async start() {
		this.#initAttributes();
		await this.#handleNextRound();
	}

	#stand() {
		console.log("finishing game...");
		this.#player.printScore();
	}

	#hit() {
		const card = this.#dealCard();
		console.log(`Your dealt card is: ${card.toString()}`);
		this.#player.printScore();
	}

	#getChoice() {
		return inquirer.prompt([
			{
				message: "Do you want to stand or hit?",
				type: "list",
				choices: ["Stand", "Hit"],
				name: "choice",
			},
		]);
	}

	async #gameplay() {
		const { choice } = await this.#getChoice();
		const stood = choice.toLowerCase() === "stand";
		stood ? this.#stand() : this.#hit();

		// stood or hit and lost - finish game
		if (stood || this.#isGameOver()) {
			this.#gameState = "finished";
			console.log(
				`Game over.... ${
					stood
						? "You didn't reach the minimum score..."
						: "Your score was over 21..."
				}`
			);
			return this.exit();
		}

		// hit and won - finish game
		if (!stood && this.#isVictory()) {
			this.#gameState = "finished";
			console.log("You won!!!");
			this.#player.printReward();
			return this.#handleNextRound();
		}

		// hit and is still playing - continue game
		if (!stood && this.#isStillPlaying()) {
			this.#gameplay();
		}
	}

	exit() {
		console.log("Bye-bye~");
		return 0;
	}
}

export const instance = Object.freeze(new Game());
