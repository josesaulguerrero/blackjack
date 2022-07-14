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
	 * @type {"NOT_STARTED" | "PLAYING"}
	 */
	#gameState = "NOT_STARTED";

	/**
	 * @return {void}
	 */
	#initAttributes() {
		this.#deck = new Deck();
		this.#user = new User();
		this.#dealer = new Dealer();
		this.#ui = new UI();
		this.#gameState = "PLAYING";
	}

	/**
	 * @description Starts a new game.
	 * @return {void}
	 */
	start() {
		this.#initAttributes();
		this.#ui.renderInitialView(console.log);
	}

	/**
	 * @return {void}
	 */
	#gameplay() {}

	/**
	 * @return {void}
	 */
	#finish() {
		this.#deck.resetDeck();
		this.#user.resetAttributes();
		this.#dealer.resetAttributes();
		this.#gameState = "NOT_STARTED";
	}
}
