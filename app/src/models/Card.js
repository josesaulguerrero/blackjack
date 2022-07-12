import inquirer from "inquirer";

export class Card {
	#suite;
	#name;
	#value;
	#isDrawn;

	constructor(suit, name, value, isDrawn) {
		this.#suite = suit;
		this.#name = name;
		this.#value = value;
		this.#isDrawn = isDrawn;
	}

	static setJackValue(card) {
		inquirer
			.prompt([
				{
					name: "jackValue",
					choices: ["11", "1"],
					type: "checkbox",
					message:
						"You've got a Jack! Do you want it to sum 1 or 11 points?",
				},
			])
			.then(({ jackValue }) => {
				return new Card(card.suit, card.name, jackValue, true);
			});
	}

	toString() {
		return `${this.#name} of ${this.#suite.description}`;
	}

	isJack() {
		return this.#name === "Jack";
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
