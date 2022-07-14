// @ts-check

import { Game } from "./src/models/Game.js";
import { UI } from "./src/models/UI.js";

const main = () => {
	const game = new Game();
	game.start();
};

main();
