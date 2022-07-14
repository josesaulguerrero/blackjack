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
			<img
				class="main-image"
				src="https://github.com/josesaulguerrero/blackjack/blob/c796e013f14288aeb0e19464610302e52d0246d7/app/public/assets/favicon.png?raw=true"
				width="250px"
				height="250px"
			/>
			<button class="startGame-button" id="startGame-button">Start new game!</button>
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
				<button class="hit-button" id="hit-button">Hit!</button>
				<button class="stand-button" id="stand-button">Stand...</button>
			</section>
			</section>
		`;
		this.#addEventListener("#hit-button", "click", onHit);
		this.#addEventListener("#stand-button", "click", onStand);
	}
}
