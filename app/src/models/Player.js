export class Player {
	#score;
	#dealtCards;

	constructor() {
		this.#dealtCards = [];
	}

	/**
	 * @return {boolean} A boolean indicating whether the player score is over 21.
	 */
	hasBusted() {
		return this.#score > 21;
	}

	stand() {}

	hit() {}

	updateScore() {
		this.#score = this.#sumDealtCards();
	}

	/**
	 * @returns {number} The total from summing up the cards dealt to the player.
	 */
	#sumDealtCards() {
		return this.#dealtCards.reduce((acc, card) => card.value + acc, 0);
	}

	/**
	 * @return {number} The current score of this player.
	 */
	get score() {
		return this.#score;
	}

	/**
	 * @return {Card[]} The cards that have been dealt to this player.
	 */
	get dealtCards() {
		return this.#dealtCards;
	}

	/**
	 * @param {number} newValue The value you want to assign to the player score.
	 */
	set score(value) {
		if (Number.isNaN(value)) {
			throw new Error("The value isn't a number.");
		}
		this.#score = value;
	}
}
