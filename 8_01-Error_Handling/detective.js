function mysteryOperation() {
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5) {
		console.log("The operation is completed successfully!");
	}
	else {
		throw new Error("The operation is failed mysteriously!");
	}
}

const success = 13;
const failure = 1;
const attend = 3;

const mission_count = 20;

let vacation_days = 0;

for (let i = 0; i < mission_count; i++) {
	try {
		mysteryOperation();
		vacation_days += attend;
	}
	catch (error) {
		vacation_days += failure;
	}
	finally {
		vacation_days += success;
	}
}

console.log(vacation_days);