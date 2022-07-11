class Player {
	#reward;
	#score;

	constructor() {}

	get reward() {
		return this.#reward;
	}

	get score() {
		return this.#score;
	}

	set reward(value) {
		if (Number.isNaN(value)) {
			throw new Error("The value isn't a number.");
		}
		this.#reward = value;
	}

	set score(value) {
		if (Number.isNaN(value)) {
			throw new Error("The value isn't a number.");
		}
		this.#reward = value;
	}
}

module.exports = { Player };
