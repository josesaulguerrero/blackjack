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
	async hit() {
		this.#isPlaying = true;
		this.ui.renderPlayerDealtCards("dealer", this);
		while (this.score < 21) {
			await this.deck.dealCard(this);
		}
		//this.stand();
	}

	/**
	 * @inheritdoc Player#stand
	 */
	stand() {
		this.hasStood = true;
		this.#isPlaying = false;
	}

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

	resetAttributes() {
		super.resetAttributes();
		this.isPlaying = false;
	}
}
