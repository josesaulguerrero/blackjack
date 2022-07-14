// @ts-check

/**
 * @classdesc A class that represents the possible Suites in Poker deck.
 * @class
 */
export class Suite {
	#name;

	/**
	 * @description Constructs a new Suite from the possible options.
	 * @param {"Spades ♠️" | "Clubs ♣️" | "Hearts ♥️" | "Diamonds ♦️"} name The name of the suite
	 */
	constructor(name) {
		this.#name = name;
	}

	/**
	 * @description A getter that returns the name of the suite for this instance.
	 * @return {String} The name of the suite assigned to this instance
	 */
	get name() {
		return this.#name;
	}
}
