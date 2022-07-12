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

	toString() {
		return `${this.#name} of ${this.#suit.description}`;
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

	get isDrawn() {
		return this.#isDrawn;
	}
}
