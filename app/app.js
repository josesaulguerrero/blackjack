// @ts-check

import { Game } from "./src/models/Game.js";

const handleStartGame = (option) => {
	//option ? game.start() : game.exit();
};

const main = () => {
	// render initial view
	// start game
	const game = new Game();
	game.start();
};

main();
