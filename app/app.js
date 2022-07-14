// @ts-check

import { Game } from "./src/models/Game.js";

const main = () => {
	// render initial view
	// start game
	const game = new Game();
	game.start();
};

main();
