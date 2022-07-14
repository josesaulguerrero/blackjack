// @ts-check

import { Card } from "./Card.js";

/**
 * @class Player
 * @abstract
 */
export class Player {
	/**
	 * @type {number} The total from summing up all the cards dealt to the player.
	 */
	#score;

	/**
	 * @type {Card[]} The cards that have been dealt to the player.
	 */
	#dealtCards;

	constructor() {
		if (this.constructor == Player) {
			throw new Error("Abstract classes can't be instantiated.");
		}
	}

	/**
	 * @abstract
	 * @return {void}
	 */
	stand() {
		throw new Error("Abstract method!");
	}

	/**
	 * @abstract
	 * @return {void}
	 */
	hit() {
		throw new Error("Abstract method!");
	}

	/**
	 * @return {boolean} A boolean indicating whether the player score is over 21.
	 */
	hasBusted() {
		return this.#score > 21;
	}

	/**
	 * @return {void}
	 */
	updateScore() {
		this.#score = this.#sumDealtCards();
	}

	/**
	 * @returns {number} The total from summing up the cards dealt to the player.
	 */
	#sumDealtCards() {
		return this.#dealtCards.reduce((acc, card) => card.value + acc, 0);
	}

	/**
	 * @return {number} The current score of this player.
	 */
	get score() {
		return this.#score;
	}

	/**
	 * @return {Card[]} The cards that have been dealt to this player.
	 */
	get dealtCards() {
		return this.#dealtCards;
	}
}
