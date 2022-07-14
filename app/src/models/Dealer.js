//  @ts-check

import { Player } from "./Player.js";

/**
 * @classdesc A class representing the Dealer mechanism that plays against the User.
 * @class Dealer
 * @extends {Player}
 */
export class Dealer extends Player {
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
