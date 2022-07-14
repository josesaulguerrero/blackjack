// @ts-check

/**
 * @classdesc A class that contains some abstraction to interact with the DOM.
 * @class
 */
export class UI {
	/**
	 * @type {HTMLElement}
	 */
	#rootElement;

	constructor() {
		this.#rootElement = document.querySelector("#root");
	}

	#getTitleHTML() {
		return `<h1 class="title">🃏Sofkian Blackjack🃏</h1>`;
	}

	renderInitialView() {
		this.#rootElement.innerHTML = `
			${this.#getTitleHTML()}
			<img
				class="main-image"
				src="https://github.com/josesaulguerrero/blackjack/blob/c796e013f14288aeb0e19464610302e52d0246d7/app/public/assets/favicon.png?raw=true"
				width="250px"
				height="250px"
			/>
			<button class="startGame-button">Start new game!</button>
		`;
	}

	renderGameView() {
		this.#rootElement.innerHTML = `
			${this.#getTitleHTML()}
			<section class="gameView">
				<section class="stats">
				<section class="player">
					<h3 class="player-title">Player</h3>
					<article class="dealtCards">
						<span class="card">3 of Clubs</span>
						<span class="card">5 of Clubs</span>
						<span class="card">10 of Clubs</span>
					</article>
					<span class="score">18</span>
				</section>
				<section class="dealer">
					<h3 class="player-title">Dealer</h3>
					<article class="dealtCards">
						<span class="card">Ace of Clubs</span>
						<span class="card">K of Clubs</span>
					</article>
					<span class="score">21</span>
				</section>
			</section>
			<section class="buttons">
				<button class="hit-button">Hit!</button>
				<button class="stand-button">Stand...</button>
			</section>
			</section>
		`;
	}
}
