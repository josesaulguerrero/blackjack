// @ts-check

import { NumberUtils } from "../utils/NumberUtils.js";
import { Dealer } from "./Dealer.js";
import { Deck } from "./Deck.js";
import { User } from "./User.js";

export class Game {
	/**
	 *@type {Deck} The current deck that is being dealt.
	 */
	#deck;

	/**
	 * @type {User} The user that is currently playing.
	 */
	#user;

	/**
	 * @type {Dealer} The internal mechanism instance that plays against the User.
	 */
	#dealer;

	#initAttributes() {
		this.#deck = new Deck();
		this.#user = new User();
		this.#dealer = new Dealer();
		this.#dealer.hit();
	}

	#isVictory() {}

	#isGameOver() {}

	#isStillPlaying() {}

	#resetAttributes() {}

	start() {
		this.#initAttributes();
	}

	#gameplay() {}

	exit() {}
}
