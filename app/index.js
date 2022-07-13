import inquirer from "inquirer";
import { instance as game } from "./src/models/Game.js";

const handleInitialInput = (option) => {
	option ? game.start() : game.exit();
};

(async () => {
	const option = await inquirer
		.prompt([
			{
				message: "Are you ready to play 🃏Blackjack🃏?!",
				name: "startGame",
				type: "confirm",
				validate: (value) => /^(y(es)?|n(o)?)$/i.test(value.trim()),
			},
		])
		.then(({ startGame }) => startGame);
	handleInitialInput(option);
})();
