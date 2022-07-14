// @ts-check

import { NumberUtils } from "../utils/NumberUtils.js";
import { Dealer } from "./Dealer.js";
import { Deck } from "./Deck.js";
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
	 * @return {void}
	 */
	#initAttributes() {
		this.#deck = new Deck();
		this.#user = new User();
		this.#dealer = new Dealer();
		this.#dealer.hit();
	}

	// #isVictory() {}

	// #isGameOver() {}

	// #isStillPlaying() {}

	/**
	 * @return {void}
	 */
	#resetAttributes() {}

	/**
	 * @description Starts a new game.
	 * @return {void}
	 */
	start() {
		this.#initAttributes();
	}

	/**
	 * @return {void}
	 */
	#gameplay() {}

	// exit() {}
}
