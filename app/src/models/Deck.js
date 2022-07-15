// @ts-check

import { NumberUtils } from "../utils/NumberUtils.js";
import { Card } from "./Card.js";
import { Player } from "./Player.js";
import { Suite } from "./Suite.js";
export class Deck {
	static SUIT_LENGTH = 13;
	static DECK_LENGTH = Deck.SUIT_LENGTH * 4;
	// ---------
	/**
	 * @type {Card[]} The fifty-two-card deck of cards that is being used.
	 */
	#cards;

	constructor() {
		this.#cards = this.#initializeCards();
	}

	/**
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
				cardName.toLowerCase() === "ace" ? 11 : 10, // set up default values
				false
			);
		});
	}

	/**
	 * @param {Suite} suite The suite you want to set up.
	 * @returns {Card[]} An array of **nine** positions with the special cards for the given Suite.
	 */
	#setUpNormalCards(suite) {
		return Array.from(
			{ length: 9 },
			(_, i) => new Card(suite, String(i + 1), i + 1, false) // i starts at zero
		);
	}

	/**
	 * @description Creates a set of cards for the given Suite.
	 * @param {Suite} suite The suite you want to set up.
	 * @returns {Card[]} An array of **thirteen** positions containing all the cards for the given Suite.
	 */
	#setUpSuite(suite) {
		return this.#setUpNormalCards(suite).concat(
			this.#setUpSpecialCards(suite)
		);
	}

	/**
	 * @description Creates the fifty-two-card deck that is used to play.
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
	 * @description Picks a random card that hasn't been drawn yet.
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
	 * @description Deals one available card to the given player.
	 * @param {Player} player The player you want to deal the card to.
	 * @return {Promise<void>}
	 */
	async dealCard(player) {
		const card = this.#pickRandomCard();
		if (card.isAce()) {
			card.value = await player.calculateAceValue();
			player.hasBeenDealtAnAce = true;
		}
		player.pushDealtCard(card);
	}

	/**
	 * @description Deals **two** available cards to the given player.
	 * @param {Player} player The player you want to deal the card to.
	 */
	async dealInitialCards(player) {
		await this.dealCard(player);
		await this.dealCard(player);
	}

	/**
	 * @description Resets the attributes of the class when needed.
	 * @return {void}
	 */
	resetDeck() {
		this.#cards = this.#initializeCards();
	}

	/**
	 * @description A getter that returns the cards from the deck.
	 * @return {Card[]} All the cards from the deck.
	 */
	get cards() {
		return this.#cards;
	}
}

export const deck = Object.freeze(new Deck());
