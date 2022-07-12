import inquirer from "inquirer";

export class Console {
	static #readlineInstance;

	static #setUpReadline() {
		Console.#readlineInstance = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}

	static readLine(question, reader, verifier) {
		if (!!verifier) Console.#readAndVerify(question, reader, verifier);
		if (!verifier) Console.#read(question, reader);
	}

	static #read(question, reader) {
		inquirer.prompt(question).then(reader);
	}

	static #readAndVerify(question, reader, verifier) {
		Console.#read(question, (answer) => {
			if (verifier(answer)) {
				return reader(answer);
			}
			Console.#readAndVerify(question, reader, verifier);
		});
	}
}
