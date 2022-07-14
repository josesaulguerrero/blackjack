import { NumberUtils } from "../utils/NumberUtils.js";
import { Card } from "./Card.js";
import { Suites } from "./Suites.js";

class Deck {
	static SUIT_LENGTH = 13;
	static DECK_LENGTH = Deck.SUIT_LENGTH * 4;
	// ---------
	#cards;
	#dealtCards;

	constructor() {
		this.#cards = this.#initializeCards();
		this.#dealtCards = [];
	}

	#getAceValue() {
		// get value
	}

	#setUpSpecialCards(suite) {
		const SPECIAL_CARDS = ["Ace", "King", "Queen", "Jack"];
		return Array.from({ length: 4 }, (_, i) => {
			const cardName = SPECIAL_CARDS[i];
			return new Card(
				suite,
				cardName,
				cardName.toLowerCase() === "ace" ? this.#getAceValue() : 10,
				false
			);
		});
	}

	#setUpNormalCards(suite) {
		return Array.from(
			{ length: 9 },
			(_, i) => new Card(suite, String(i), i, false)
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

	#pickRandomCard() {
		const activeCards = this.#cards.filter((card) => !card.isDrawn);
		const randomIndex = NumberUtils.randomBetweenInclusiveRange(
			0,
			activeCards.length - 1
		);
		return activeCards[randomIndex];
	}

	dealCard() {}

	resetDeck() {
		this.cards = this.#initializeCards();
	}

	get cards() {
		return this.#cards;
	}

	get dealtCards() {
		return this.#dealtCards;
	}
}

export const instance = Object.freeze(new Deck());
