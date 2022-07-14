// @ts-check

import { Card } from "./Card.js";

/**
 * @classdesc Abstract class containing the common methods and attributes for both, the User and the Dealer.
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

	/**
	 * @type {boolean} A boolean indicating whether the value has decided to stand.
	 */
	#hasStood;

	constructor() {
		if (new.target === Player) {
			throw new Error("Abstract classes can't be instantiated.");
		}
		this.#score = 0;
		this.#dealtCards = [];
		this.#hasStood = false;
	}

	/**
	 * @param {Player} subclass
	 * @return {boolean}
	 */
	static #isDirectSubclass(subclass) {
		return subclass.constructor.prototype instanceof Player;
	}

	/**
	 * @description The method executed once the Player has decided to stand with their current deck.
	 * @abstract
	 * @return {void}
	 */
	stand() {
		throw new Error("Abstract method!");
	}

	/**
	 * @description The method executed once the Player has decided to draw one more card.
	 * @abstract
	 * @return {void}
	 */
	hit() {
		throw new Error("Abstract method!");
	}

	/**
	 * @description Tells whether the player has busted or not.
	 * @return {boolean} A boolean indicating whether the player score is over 21.
	 */
	hasBusted() {
		return this.#score > 21;
	}

	/**
	 * @description Sums the values of the cards dealt to this player (until now) and updates their score.
	 * @return {void}
	 */
	updateScore() {
		this.#score = this.#sumDealtCards();
	}

	/**
	 * Adds a new card to the dealtCards property.
	 * @param {Card} card The card you want to add.
	 */
	pushDealtCard(card) {
		this.#dealtCards.push(card);
	}

	/**
	 * @description Takes the different cards dealt to the player and sums their values up.
	 * @returns {number} The total from summing up the cards dealt to the player.
	 */
	#sumDealtCards() {
		return this.#dealtCards.reduce((acc, card) => card.value + acc, 0);
	}

	/**
	 * @description A getter that returns the current score for this player.
	 * @return {number} The current score of this player.
	 */
	get score() {
		return this.#score;
	}

	/**
	 * @description A getter that returns the cards that have been dealt to this player until now.
	 * @return {Card[]} The cards that have been dealt to this player.
	 */
	get dealtCards() {
		return this.#dealtCards;
	}

	/**
	 * @description A getter that returns the a boolean value indicating whether the player has decided to stand.
	 * @return {boolean}
	 */
	get hasStood() {
		return this.#hasStood;
	}

	/**
	 * @description Sets a new value to the property.
	 * @param {boolean} value The new value you want to assign.
	 */
	set hasStood(value) {
		if (Player.#isDirectSubclass(this)) {
			this.#hasStood = value;
		}
	}
}
