// @ts-check

import { Player } from "./Player.js";
import { UI } from "./UI.js";

/**
 * @classdesc A class representing the User that plays against the Dealer.
 * @class User
 * @extends {Player}
 */
export class User extends Player {
	/**
	 * @type {UI}
	 */
	#ui;

	constructor() {
		super();
		this.#ui = new UI();
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
	async calculateAceValue() {
		console.log(this.hasBeenDealtAnAce);
		if (!this.hasBeenDealtAnAce) {
			return await this.#ui.renderGetAceValueModal();
		}
		return 1;
	}
}
