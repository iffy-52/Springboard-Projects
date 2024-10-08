const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById(id) {
	for (const account of accounts) {
		if (account.id === id) {
			return account;
		}
	}
}

function createAccount(newAccountId, newAccountOwner) {
	accounts.push({
		id: newAccountId,
		owner: newAccountOwner,
		balance: 0
	});
}

function depositMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found");
	}

	if (amount > 0) {
		account.balance += amount;
	} else {
		throw new Error("Invalid amount for deposit");
	}
}

function withdrawMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found.");
	}

	if (amount > 0 && account.balance >= amount) {
		account.balance -= amount;
	} else {
		throw new Error("Invalid amount for withdrawal");
	}
}

function transferMoney(fromAccountId, toAccountId, amount) {
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount || !toAccount) {
		throw new Error("Source or destination account not found.");
	}

	if (amount > 0 && fromAccount.balance >= amount) {
		fromAccount.balance -= amount;
		toAccount.balance += amount;
	} else {
		throw new Error("Invalid amount for transfer");
	}
}

/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
