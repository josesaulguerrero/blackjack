const { Card } = require("./Card.js");
const { Suites } = require("./Suites.js");

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
				cardName === "Jack" ? [1, 11] : 10
			);
		});
	}

	#setUpNormalCards(suite) {
		return Array.from(
			{ length: 9 },
			(_, index) => new Card(suite, String(index + 1), index + 1)
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

	get cards() {
		return this.#cards;
	}
}

module.exports = { instance: Object.freeze(new Deck()) };
