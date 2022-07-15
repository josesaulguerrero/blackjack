// @ts-check

import { Dealer } from "./Dealer.js";
import { deck, Deck } from "./Deck.js";
import { UI } from "./UI.js";
import { User } from "./User.js";

export class Game {
	/**
	 *@type {Deck}
	 */
	#deck;

	/**
	 * @type {User}
	 */
	#user;

	/**
	 * @type {Dealer}
	 */
	#dealer;

	/**
	 * @type {UI}
	 */
	#ui;

	/**
	 * @type {"NOT_STARTED" | "PLAYING" | "FINISHED"}
	 */
	#gameState;

	#setUpInitialAttributes() {
		this.#deck = deck;
		this.#user = new User();
		this.#dealer = new Dealer();
		this.#ui = new UI();
		this.gameState = "NOT_STARTED";
	}

	#getVictoryMessage() {
		let message =
			this.#user.score > this.#dealer.score && !this.#user.hasBusted()
				? "You've won the dealer!"
				: "The dealer has won the match...";
		if (this.#user.isBlackJack() || this.#dealer.isBlackJack()) {
			const isUserBlackJack = this.#user.isBlackJack();
			message = `It's a BLACKJACK! ${
				isUserBlackJack
					? "You've won the dealer!"
					: "The dealer has won!"
			}`;
		}
		if (this.#user.hasBusted() || this.#dealer.hasBusted()) {
			const userBusted = this.#user.hasBusted();
			message = userBusted
				? "You've gone over 21 and the dealer wins... Better luck next time!"
				: "The dealer has gone over 21, you win!!!";
		}
		return message;
	}

	/**
	 * @description Handles the different game states.
	 */
	#handleGameState() {
		switch (this.#gameState) {
			case "NOT_STARTED":
				return this.#ui.renderInitialView(async () => {
					this.gameState = "PLAYING";
					await this.#gameplay();
				});
			case "PLAYING":
				return this.#ui.renderGameView(
					() => {
						this.#user.hit();
						if (this.#user.hasBusted()) {
							this.gameState = "FINISHED";
						}
					},
					() => {
						this.#user.stand();
						this.#dealer.hit();
						this.gameState = "FINISHED";
					}
				);
			case "FINISHED":
				const message = this.#getVictoryMessage();
				return this.#ui.renderFinalView(() => {
					this.gameState = "NOT_STARTED";
					this.#user.resetAttributes();
					this.#dealer.resetAttributes();
				}, message);
		}
	}

	/**
	 * @description Starts a new game.
	 * @return {Promise<void>}
	 */
	async start() {
		this.#setUpInitialAttributes();
	}

	/**
	 * @return {Promise<void>}
	 */
	async #gameplay() {
		await this.#deck.dealInitialCards(this.#user);
		await this.#deck.dealInitialCards(this.#dealer);
	}

	/**
	 * @return {void}
	 */
	#end() {
		this.#deck.resetDeck();
		this.#user.resetAttributes();
		this.#dealer.resetAttributes();
		this.gameState = "FINISHED";
	}

	/**
	 * @param {"NOT_STARTED" | "PLAYING" | "FINISHED" } value The new value to assigN.
	 */
	set gameState(value) {
		this.#gameState = value;
		this.#handleGameState();
	}
}
