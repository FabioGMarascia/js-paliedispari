// M-1 FUNCTIONS
function palindrome(string1, string2) {
	if (string1 == string2) {
		return `La parola è palindroma !`;
	}
	return `La parola non è palindroma !`;
}

// M-2 FUNCTIONS
function randomNumber() {
	return Math.floor(Math.random() * 5 + 1);
}

function oddOrEven(number) {
	if (number % 2 == 0) {
		return `pari`;
	}
	return `dispari`;
}
