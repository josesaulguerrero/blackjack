import { NumberUtils } from "../utils/NumberUtils.js";
import { Card } from "./Card.js";
import { Suite } from "./Suites.js";

class Deck {
	static SUIT_LENGTH = 13;
	static DECK_LENGTH = Deck.SUIT_LENGTH * 4;
	// ---------
	#cards;

	/**
	 * @return {Deck} The just created deck.
	 */
	constructor() {
		this.#cards = this.#initializeCards();
	}

	/**
	 * @return {number} The value chosen by the player for the Ace.
	 */
	#getAceValue() {
		// get value
	}

	/**
	 *
	 * @param {Suite} suite The suite you want to set up.
	 * @returns {Card[]} An array of **four** positions with the special cards for the given Suite.
	 */
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

	/**
	 *
	 * @param {Suite} suite The suite you want to set up.
	 * @returns {Card[]} An array of **nine** positions with the special cards for the given Suite.
	 */
	#setUpNormalCards(suite) {
		return Array.from(
			{ length: 9 },
			(_, i) => new Card(suite, String(i), i, false)
		);
	}

	/**
	 *
	 * @param {Suite} suite The suite you want to set up.
	 * @returns {Card[]} An array of **thirteen** positions containing all the cards for the given Suite.
	 */
	#setUpSuite(suite) {
		return this.#setUpNormalCards(suite).concat(
			this.#setUpSpecialCards(suite)
		);
	}

	/**
	 * @returns {Card[]} An array containing the **fifty two** cards in an English Deck.
	 */
	#initializeCards = () => {
		const spadesSuite = this.#setUpSuite(new Suite("Spades ♠️"));
		const clubsSuite = this.#setUpSuite(new Suite("Clubs ♣️"));
		const diamondsSuite = this.#setUpSuite(new Suite("Diamonds ♦️"));
		const heartsSuite = this.#setUpSuite(new Suite("Hearts ♥️"));
		return spadesSuite
			.concat(clubsSuite)
			.concat(diamondsSuite)
			.concat(heartsSuite);
	};

	/**
	 * @returns {Card} A random card from the deck (one that hasn't been drawn yet).
	 */
	#pickRandomCard() {
		const activeCards = this.#cards.filter((card) => !card.isDrawn);
		const randomIndex = NumberUtils.randomBetweenInclusiveRange(
			0,
			activeCards.length - 1
		);
		return activeCards[randomIndex];
	}

	/**
	 * @return {Card} A non-drawn card from the deck.
	 */
	dealCard() {}

	resetDeck() {
		this.cards = this.#initializeCards();
	}

	/**
	 * @return {Card[]} All the cards from the deck.
	 */
	get cards() {
		return this.#cards;
	}
}

export const instance = Object.freeze(new Deck());
