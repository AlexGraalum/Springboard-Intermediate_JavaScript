const accounts = [
	{ id: 1, owner: "Alice", balance: 500 },
	{ id: 2, owner: "Bob", balance: 300 }
];

function getAccountById(id) {
	for (const account of accounts) {
		if (account.id === id) {
			return account;
		}
	}
}

function createAccount(newAccountId, newAccountOwner) {
	const account = getAccountById(newAccountId);
	try {
		if (account) {
			throw new Error("Account Exists OR Account ID In Use");
		}
		if (newAccountId < 0 || !Number.isInteger(newAccountId)) {
			throw new Error("Invalid ID");
		}
		if (newAccountOwner === "") {
			throw new Error("Empty Name");
		}
		if (typeof newAccountOwner !== 'string') {
			throw new Error("Non-String Provided");
		}

		accounts.push(
			{
				id: newAccountId,
				owner: newAccountOwner,
				balance: 0
			}
		);
	}
	catch (error) {
		console.log("ERROR: " + error);
	}
}

function depositMoney(accountId, amount) {
	const account = getAccountById(accountId);

	try {
		if (!account) {
			throw new Error("Account not found");
		}
		if (amount < 0 || !Number.isFinite(amount)) {
			throw new Error("Value Must Be Non-Negative");
		}

		account.balance += amount;
	}
	catch (err) {
		console.log("ERROR: " + err);
	}
}

function withdrawMoney(accountId, amount) {
	const account = getAccountById(accountId);

	try {
		if (!account) {
			throw new Error("Account not found.");
		}
		if (amount < 0 || !Number.isFinite(amount)) {
			throw new Error("Invalid Withdrawl Amount: Must Be A Positive Finite Value");
		}
		if (account.balance <= 0 || account.balance - amount < 0) {
			throw new Error("Account Balance Insufficient");
		}

		account.balance -= amount;
	}
	catch (err) {
		console.log("ERROR: " + err);
	}
}

function transferMoney(fromAccountId, toAccountId, amount) {
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	try {
		if (!fromAccount) {
			throw new Error("Source account not found.");
		}
		if (!toAccount) {
			throw new Error("Destination Account Not Found");
		}
		if (amount < 0 || !Number.isFinite(amount)) {
			throw new Error("Invalid Transfer Amount");
		}
		if (fromAccount.balance - amount < 0) {
			throw new Error("Source Account Balance Insufficient");
		}

		fromAccount.balance -= amount;
		toAccount.balance += amount;
	}
	catch (err) {
		console.log("ERROR: " + err);
	}
}

// TEST CASES
//Uncomment and run `node rich-bank.js`
/*console.log("--INITIAL ACCOUNT ARRAY--");
for (account of accounts) {
	console.log(account);
}

console.log("\n--CREATEACCOUNT TESTS--");
createAccount(1, "Alex");
console.log("Account at ID 1: ", getAccountById(1));
createAccount(-2, "Alex");
console.log("Account at ID -2: ", getAccountById(-2));
createAccount(3, "");
console.log("Account at ID 3: ", getAccountById(3));
createAccount(3, ["Alex"]);
console.log("Account at ID 3: ", getAccountById(3));
createAccount(0.5, "Alex");
console.log("Account at ID 0.5: ", getAccountById(0.5));
createAccount(3, "Alex");
console.log("Account at ID 3:", getAccountById(3));

console.log("\n--UPDATED ACCOUNT ARRAY--");
for (account of accounts) {
	console.log(account);
}

console.log("\n--DEPOSITMONEY TESTS--");
depositMoney(1, 100);
console.log("Account at ID 1: ", getAccountById(1));
depositMoney(1, -100);
console.log("Account at ID 1: ", getAccountById(1));

console.log("\n--UPDATED ACCOUNT BALANCES--");
for (account of accounts) {
	console.log(account);
}

console.log("\n--WITHDRAWMONEY TESTS--");
withdrawMoney(1, -100);
console.log("Amount for ID 1: ", getAccountById(1));
withdrawMoney(1, 100);
console.log("Amount for ID 1: ", getAccountById(1));

console.log("\n--UPDATED ACCOUNT BALANCES--");
for (account of accounts) {
	console.log(account);
}

console.log("--\nTRANSFERMONEY ");
transferMoney(3, 2, 100);
console.log("Amount for ID 3: ", getAccountById(3));
console.log("Amount for ID 2: ", getAccountById(2));
transferMoney(2, 3, 400);
console.log("Amount for ID 2: ", getAccountById(2));
console.log("Amount for ID 3: ", getAccountById(3));
transferMoney(1, 3, 100);
console.log("Amount for ID 1: ", getAccountById(1));
console.log("Amount for ID 3: ", getAccountById(3));

console.log("\n--UPDATED ACCOUNT BALANCES--");
for (account of accounts) {
	console.log(account);
}*/