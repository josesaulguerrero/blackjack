// @ts-check

import { Player } from "./Player.js";

/**
 * @classdesc A class representing the User that plays against the Dealer.
 * @class User
 * @extends {Player}
 */
export class User extends Player {
	constructor() {
		super();
	}

	/**
	 * @inheritdoc Player#hit
	 */
	async hit() {
		await this.deck.dealCard(this);
	}

	/**
	 * @inheritdoc Player#stand
	 */
	stand() {
		this.hasStood = true;
	}

	/**
	 * @inheritdoc Player#calculateAceValue
	 */
	async calculateAceValue() {
		if (!this.hasBeenDealtAnAce && this.score + 11 <= 21) {
			return await this.ui.renderGetAceValueModal();
		}
		return 1;
	}
}
