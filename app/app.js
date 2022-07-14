// @ts-check

import { Game } from "./src/models/Game.js";
import { UI } from "./src/models/UI.js";

const main = () => {
	const game = new Game();
	const ui = new UI();
	// render initial view
	ui.renderInitialView();
	// start game
	game.start();
};

main();
