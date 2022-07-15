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
					() => this.#user.stand()
				);
			case "FINISHED":
				return this.#ui.renderFinalView(() => {
					this.gameState = "NOT_STARTED";
				});
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
		if (this.#user.hasStood) {
			this.#dealer.hit();
		}
	}

	#userHasLost() {
		return this.#user.hasBusted() || this.#user.score < this.#dealer.score;
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
