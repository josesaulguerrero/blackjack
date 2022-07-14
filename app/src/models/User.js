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
	hit() {}

	/**
	 * @inheritdoc Player#stand
	 */
	stand() {}
}
