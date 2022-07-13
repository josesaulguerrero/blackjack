export class Player {
	#reward;
	#score;

	constructor(initialReward) {
		this.#reward = initialReward;
	}

	printScore() {
		console.log(`Your score is: ${this.#score}`);
	}

	printReward() {
		console.log(`Your reward is: ${this.#reward}`);
	}

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
		this.#score = value;
	}
}
