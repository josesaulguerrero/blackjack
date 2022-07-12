import readline from "readline";

export class ConsoleUtils {
	static #readlineInstance;

	static #setUpReadline() {
		ConsoleUtils.#readlineInstance = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}

	static read(question, reader) {
		ConsoleUtils.#setUpReadline();
		ConsoleUtils.#readlineInstance.question(question, (value) => {
			reader(value);
			ConsoleUtils.#readlineInstance.close();
		});
	}

	static readAndVerify(question, reader, verifier) {
		ConsoleUtils.#setUpReadline();
		ConsoleUtils.#readlineInstance.question(question, (value) => {
			if (!!verifier(value)) {
				reader(value);
				return ConsoleUtils.#readlineInstance.close();
			}
			ConsoleUtils.#readlineInstance.close();
			return ConsoleUtils.readAndVerify(question, reader, verifier);
		});
	}
}
