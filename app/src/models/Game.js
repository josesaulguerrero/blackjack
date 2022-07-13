import { NumberUtils } from "../utils/NumberUtils.js";
import { instance as deck } from "./Deck.js";
import { Player } from "./Player.js";

class Game {
	#round;
	#deck;
	#player;
	#dealtCards;

	#initAttributes() {
		this.#deck = deck;
		this.#round = 0;
		this.#dealtCards = [];
	}

	#dealCard() {
		const randomCard = deck.pickRandomCard();
		this.#dealtCards.push(randomCard);
		this.#player.score = this.#sumDealtCards();
		return randomCard;
	}

	#dealInitialCards() {}

	#sumDealtCards() {
		return this.#dealtCards
			.sort((a, b) => a - b) // leave the aces for the end
			.reduce((acc, card) => {
				if (card.name === "Ace")
					return acc + 11 > 21 ? acc + 1 : acc + 11;
				return acc + parseInt(card.value);
			}, 0);
	}

	#isVictory() {}

	#isGameOver() {}

	#isStillPlaying() {}

	#resetAttributes() {}

	#handleNextRound() {}

	start() {}

	#stand() {}

	#hit() {}

	#getChoice() {}

	#gameplay() {}

	exit() {}
}

export const instance = Object.freeze(new Game());
