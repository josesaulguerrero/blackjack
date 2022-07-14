export class Suite {
	#name;

	/**
	 * @param {"Spades ♠️" | "Clubs ♣️" | "Hearts ♥️" | "Diamonds ♦️"} name The name of the suite
	 * @return {Suite} The instance that was just created
	 */
	constructor(name) {
		this.#name = name;
	}

	/**
	 * @return {String} The name of the suite assigned to this instance
	 */
	get name() {
		return this.#name;
	}
}
