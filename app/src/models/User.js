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
	async hit() {
		await this.deck.dealCard(this);
		this.#ui.renderPlayerDealtCards("player", this);
	}

	/**
	 * @inheritdoc Player#stand
	 */
	stand() {}

	/**
	 * @inheritdoc Player#calculateAceValue
	 */
	async calculateAceValue() {
		if (!this.hasBeenDealtAnAce && this.score + 11 <= 21) {
			return await this.#ui.renderGetAceValueModal();
		}
		return 1;
	}
}
