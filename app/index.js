//import { instance as game } from "./src/models/Game.js";
import { ConsoleUtils } from "./src/utils/ConsoleUtils.js";

const handleInitialInput = (option) => {
	console.log(option, "1");
};

ConsoleUtils.readAndVerify(
	"Are you ready to play 🃏__Blackjack__🃏?! (Y/n)",
	handleInitialInput,
	(value) => /(y(es)?|n(o)?)/.test(value.toLowerCase())
);
