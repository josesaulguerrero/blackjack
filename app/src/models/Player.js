export class Player {
	#score;

	constructor() {}

	get score() {
		return this.#score;
	}

	set score(value) {
		if (Number.isNaN(value)) {
			throw new Error("The value isn't a number.");
		}
		this.#score = value;
	}
}
