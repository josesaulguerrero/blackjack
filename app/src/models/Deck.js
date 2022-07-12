import { NumberUtils } from "../utils/NumberUtils.js";
import { Card } from "./Card.js";
import { Suites } from "./Suites.js";

class Deck {
	static SUIT_LENGTH = 13;
	static DECK_LENGTH = Deck.SUIT_LENGTH * 4;
	#cards;

	constructor() {
		this.#cards = this.#initializeCards();
	}

	#setUpSpecialCards(suite) {
		const SPECIAL_CARDS = ["Ace", "King", "Queen", "Jack"];
		return Array.from({ length: 4 }, (_, index) => {
			const cardName = SPECIAL_CARDS[index];
			return new Card(
				suite,
				cardName,
				cardName === "Ace" ? 11 : 10,
				false
			);
		});
	}

	#setUpNormalCards(suite) {
		return Array.from(
			{ length: 9 },
			(_, index) => new Card(suite, String(index + 1), index + 1, false)
		);
	}

	#setUpSuite(suite) {
		return this.#setUpNormalCards(suite).concat(
			this.#setUpSpecialCards(suite)
		);
	}

	#initializeCards = () => {
		const spadesSuite = this.#setUpSuite(Suites.SPADES);
		const clubsSuite = this.#setUpSuite(Suites.CLUBS);
		const diamondsSuite = this.#setUpSuite(Suites.DIAMONDS);
		const heartsSuite = this.#setUpSuite(Suites.HEARTS);
		return spadesSuite
			.concat(clubsSuite)
			.concat(diamondsSuite)
			.concat(heartsSuite);
	};

	pickRandomCard() {
		const activeCards = this.#cards.filter((card) => !card.isDrawn);
		const randomIndex = NumberUtils.randomBetweenInclusiveRange(
			0,
			activeCards.length - 1
		);
		return activeCards[randomIndex];
	}

	get cards() {
		return this.#cards;
	}

	set cards(newCards) {
		this.#cards = newCards;
	}
}

export const instance = Object.freeze(new Deck());
