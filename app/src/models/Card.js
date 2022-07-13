export class Card {
	#suite;
	#name;
	#value;
	#isDrawn;

	constructor(suite, name, value, isDrawn) {
		this.#suite = suite;
		this.#name = name;
		this.#value = value;
		this.#isDrawn = isDrawn;
	}

	isAce() {
		return this.#name === "Ace";
	}

	get suite() {
		return this.#suite;
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

	set value(value) {
		this.#value = value;
	}
}
