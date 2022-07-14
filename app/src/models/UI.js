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
		return `<h1 class="title">🃏 Sofkian Blackjack 🃏</h1>`;
	}

	renderInitialView() {
		this.#rootElement.innerHTML = `
			${this.#getTitleHTML()}
			<img
				class="main-image"
				src="https://github.com/josesaulguerrero/blackjack/blob/c796e013f14288aeb0e19464610302e52d0246d7/app/public/assets/favicon.png?raw=true"
				width="250px"
			/>
			<button class="startGame-button">Start new game!</button>
		`;
	}
}
