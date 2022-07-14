// @ts-check

import { Card } from "./Card.js";

/**
 * @classdesc A class that contains some abstraction to interact with the DOM.
 * @class
 */
export class UI {
	/**
	 * @type {HTMLElement}
	 */
	#rootElement;

	/**
	 * @type {HTMLElement}
	 */
	#modalElement;

	constructor() {
		this.#rootElement = document.querySelector("#root");
		this.#modalElement = document.querySelector("#modal");
	}

	#getTitleHTML() {
		return `<h1 class="title">🃏Sofkian Blackjack🃏</h1>`;
	}

	/**
	 * @param {string} selector
	 * @param {string} event
	 * @param {EventListenerOrEventListenerObject} callback
	 */
	#addEventListener(selector, event, callback) {
		this.#rootElement
			.querySelector(selector)
			?.addEventListener(event, callback);
	}

	/**
	 * @param {EventListenerOrEventListenerObject} onStart The function to execute once the start button is clicked.
	 */
	renderInitialView(onStart) {
		this.#rootElement.innerHTML = `
			${this.#getTitleHTML()}
			<section class="initial-view">
				<img
					class="main-image"
					src="https://github.com/josesaulguerrero/blackjack/blob/c796e013f14288aeb0e19464610302e52d0246d7/app/public/assets/favicon.png?raw=true"
					width="250px"
					height="250px"
				/>
				<button class="startGame-button" id="startGame-button">Start new game!</button>
			</section>
		`;
		this.#addEventListener("#startGame-button", "click", onStart);
	}

	/**
	 * @param {EventListenerOrEventListenerObject} onHit The function to execute once the player decides to hit.
	 * @param {EventListenerOrEventListenerObject} onStand The function to execute once the player decides to stand.
	 */
	renderGameView(onHit, onStand) {
		this.#rootElement.innerHTML = `
			${this.#getTitleHTML()}
			<section class="gameView">
				<section class="stats">
				<section class="player">
					<h3 class="player-title">Player</h3>
					<article class="player-table"></article>
					<span class="player-score">0</span>
				</section>
				<section class="dealer">
					<h3 class="player-title">Dealer</h3>
					<article class="dealer-table"></article>
					<span class="dealer-score">0</span>
				</section>
			</section>
			<section class="buttons" id="buttons" >
				<button class="hit-button" id="hit-button">Hit!</button>
				<button class="stand-button" id="stand-button">Stand...</button>
			</section>
			</section>
		`;
		this.#addEventListener("#hit-button", "click", onHit);
		this.#addEventListener("#stand-button", "click", onStand);
	}

	/**
	 * @param {string} content A stringified piece of HTML that will be rendered within the modal element;
	 */
	#renderModalContent(content) {
		this.#modalElement.innerHTML = content;
	}

	/**
	 * @param {"player" | "dealer"} table The table in which you want to render the cards.
	 * @param {Card[]} cards The cards necessary to calculate the score.
	 */
	#renderScore(table, ...cards) {
		const scoreNode = this.#rootElement.querySelector(
			`${table === "player" ? ".player" : ".dealer"}-score`
		);
		const score = cards.reduce((acc, card) => {
			const result = acc + card.value;
			console.log(card);
			console.log(result);
			return result;
		}, 0);
		scoreNode.innerHTML = String(score);
	}

	/**
	 * @param {"player" | "dealer"} table The table in which you want to render the cards.
	 * @param  {Card[]} cards Tne card(s) you want to render on the corresponding table.
	 */
	renderCards(table, ...cards) {
		console.log(cards);
		const tableNode = this.#rootElement.querySelector(
			table === "player" ? ".player-table" : ".dealer-table"
		);
		const stringifiedCards = cards
			.map((card) => `<span class="card">${card.toString()}</span>`)
			.join("\n");
		tableNode.innerHTML = stringifiedCards;
		this.#renderScore(table, ...cards);
	}

	/**
	 *
	 * @param {EventListenerOrEventListenerObject} onGoBackToStart The function to execute once the game is finished and the player wants to go back to the start.
	 */
	renderFinalView(onGoBackToStart) {
		this.#rootElement.querySelector("#buttons").innerHTML = `
			<button class="goBackToStart-button" id="goBackToStart">Go back to start</button>
		`;
		this.#addEventListener("#goBackToStart", "click", onGoBackToStart);
	}
}
