// @ts-check

import { Dealer } from "./Dealer.js";
import { Deck } from "./Deck.js";
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
		this.#deck = new Deck();
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
				return this.#ui.renderInitialView(() => {
					this.gameState = "PLAYING";
					this.#gameplay();
				});
			case "PLAYING":
				return this.#ui.renderGameView(
					() => {},
					() => {}
				);
			case "FINISHED":
				return this.#ui.renderFinalView(() => {
					this.gameState = "NOT_STARTED";
				});
		}
	}

	/**
	 * @description Starts a new game.
	 * @return {void}
	 */
	start() {
		this.#setUpInitialAttributes();
		this.#ui.renderGetAceValueModal(console.log);
	}

	/**
	 * @return {void}
	 */
	#gameplay() {
		this.#ui.renderCards(
			"player",
			this.#deck.dealCard(),
			this.#deck.dealCard()
		);
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
