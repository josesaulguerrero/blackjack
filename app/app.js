import { instance as game } from "./src/models/Game.js";

const handleStartGame = (option) => {
	option ? game.start() : game.exit();
};

const main = () => {
	// render initial view
	// start game
};

main();
