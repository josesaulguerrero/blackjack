//  @ts-check

import { Player } from "./Player.js";

/**
 * @classdesc A class representing the Dealer mechanism that plays against the User.
 * @class Dealer
 * @extends {Player}
 */
export class Dealer extends Player {
	/**
	 * @type {boolean}
	 */
	#isPlaying;

	constructor() {
		super();
		this.#isPlaying = false;
	}

	/**
	 * @inheritdoc Player#hit
	 */
	hit() {}

	/**
	 * @inheritdoc Player#stand
	 */
	stand() {}

	/**
	 * @inheritdoc Player#calculateAceValue
	 */
	calculateAceValue() {
		return new Promise((resolve) => {
			if (this.hasBeenDealtAnAce) {
				return resolve(1);
			}
			resolve(11);
		});
	}

	/**
	 * @return {boolean}
	 */
	get isPlaying() {
		return this.#isPlaying;
	}

	/**
	 * @param {boolean} value The new value to be set.
	 */
	set isPlaying(value) {
		this.#isPlaying = value;
	}
}
