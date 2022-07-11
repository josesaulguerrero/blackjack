export class Game {
	#round;
	#isInitialized = false;

	constructor() {
		if (this.#isInitialized) {
			throw new Error(
				"This is a singleton method, use #getInstance instead."
			);
		}
	}

	static getInstance() {
		const instance = new Game();
		this.#isInitialized = true;
		return instance;
	}

	get round() {
		return this.round;
	}
}
