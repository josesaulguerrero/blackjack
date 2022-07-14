import { NumberUtils } from "../utils/NumberUtils.js";
import { instance as deck } from "./Deck.js";
import { Player } from "./Player.js";

class Game {
	#deck;
	#player;
	#dealer;

	#initAttributes() {
		this.#deck = deck;
		this.#player = new Player();
		this.#dealer = new Player();
	}

	#isVictory() {}

	#isGameOver() {}

	#isStillPlaying() {}

	#resetAttributes() {}

	start() {}

	#gameplay() {}

	exit() {}
}

export const instance = Object.freeze(new Game());
