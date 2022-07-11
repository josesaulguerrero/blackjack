class Game {
	#round;

	get round() {
		return this.round;
	}
}

export const instance = Object.freeze(new Game());
