import { instance as game } from "./src/models/Game.js";
import { Console } from "./src/utils/Console.js";

game.start();
Console.readLine("Enter a number: ", console.log);
