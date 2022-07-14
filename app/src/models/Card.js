// @ts-check

import { Suite } from "./Suite.js";

export class Card {
	/**
	 * @type {Suite}
	 */
	#suite;

	/**
	 * @type {string}
	 */
	#name;

	/**
	 * @type {number}
	 */
	#value;

	/**
	 * @type {boolean}
	 */
	#isDrawn;

	/**
	 * @param {Suite} suite
	 * @param {string} name
	 * @param {number} value
	 * @param {boolean} isDrawn
	 */
	constructor(suite, name, value, isDrawn) {
		this.#suite = suite;
		this.#name = name;
		this.#value = value;
		this.#isDrawn = isDrawn;
	}

	/**
	 * @description Tells whether this card is an Ace.
	 * @returns {boolean}
	 */
	isAce() {
		return this.#name === "Ace";
	}

	toString() {
		return `${this.#name} ${this.#suite.name}`;
	}

	/**
	 * @description Returns the Suite of this card.
	 * @returns {Suite}
	 */
	get suite() {
		return this.#suite;
	}

	/**
	 * @description Returns the name of this card.
	 * @returns {string}
	 */
	get name() {
		return this.#name;
	}

	/**
	 * @description Returns the value of this card.
	 * @return {number}
	 */
	get value() {
		return this.#value;
	}

	/**
	 * @description Returns whether this card has been drawn yet.
	 * @return {boolean}
	 */
	get isDrawn() {
		return this.#isDrawn;
	}
}
