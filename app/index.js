import inquirer from "inquirer";
import { instance as game } from "./src/models/Game.js";

inquirer
	.prompt([
		{
			name: "startGame",
			message: "Are you ready to play 🃏__Blackjack__🃏?!",
			type: "confirm",
			default: false,
		},
	])
	.then(({ startGame }) => {
		if (!startGame) {
			game.exit();
		}
		game.start();
	});
