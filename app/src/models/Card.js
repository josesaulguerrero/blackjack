import inquirer from "inquirer";
import { ConsoleUtils } from "../utils/ConsoleUtils.js";

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

	static setJackValue(card) {
		return new Promise((resolve) => {
			ConsoleUtils.readAndVerify(
				"You've got a Jack! Do you want it to sum 1 or 11 points?",
				(value) =>
					resolve(
						new Card(
							card.suite,
							card.name,
							parseInt(value.trim()),
							true
						)
					),
				(text) => /^(1|11)$/i.test(text.trim)
			);
		});
		// return inquirer.prompt(
		// 	Array.from({ length: cards.length }).map(() => ({
		// 		message:
		// 			"You've got a Jack! Do you want it to sum 1 or 11 points?",
		// 		name: "jackValue",
		// 		type: "list",
		// 		choices: ["1", "11"],
		// 		default: "1",
		// 	}))
		// );
	}

	toString() {
		return `${this.#name} of ${this.#suite.description}`;
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
