class Card {
	#suit;
	#name;
	#value;

	constructor(suit, name, value) {
		this.#suit = suit;
		this.#name = name;
		this.#value = value;
	}

	get suit() {
		return this.#suit;
	}

	get name() {
		return this.#name;
	}

	get value() {
		return this.#value;
	}
}

module.exports = { Card };
