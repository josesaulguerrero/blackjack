export class Card {
	#suit;
	#name;
	#value;
	#isDrawn;

	constructor(suit, name, value, isDrawn) {
		this.#suit = suit;
		this.#name = name;
		this.#value = value;
		this.#isDrawn = isDrawn;
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
	k;

	get isDrawn() {
		return this.#isDrawn;
	}
}
