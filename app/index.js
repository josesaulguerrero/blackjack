import { instance as game } from "./src/models/Game.js";
import { ConsoleUtils } from "./src/utils/ConsoleUtils.js";

const handleInitialInput = (option) => {
	/y(es)?/i.test(option.trim()) ? game.start() : game.exit();
};

ConsoleUtils.readAndVerify(
	"Are you ready to play 🃏Blackjack🃏?! (Y/n)",
	handleInitialInput,
	(value) => /^(y(es)?|n(o)?)$/i.test(value.trim())
);
