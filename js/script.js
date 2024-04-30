// // M-1 PALINDROMA
// const user_word = prompt(`Inserisci una parola`);
// const array_word = Array.from(user_word);
// let array_reversed = [];

// for (let i = 1; i < array_word.length + 1; i++) {
// 	array_reversed.push(array_word[array_word.length - i]);
// }

// let user_reversed = array_reversed.toString();
// let result = palindrome(array_word, user_reversed);
// console.log(result);

// M-2 PARI E DISPARI
let user_bet;
let user_number;
let control = true;

while (control) {
	user_bet = prompt(`Il risultato sarà pari o dispari?`);
	if (user_bet == `pari` || user_bet == `dispari`) {
		control = false;
	}
}

control = true;

while (control) {
	user_number = parseInt(prompt(`Scegli un numero da 1 a 5`));
	if (user_number >= 1 && user_number < 6) {
		control = false;
	}
}

const pc_number = randomNumber();
const sum = user_number + pc_number;
const odd_or_even = oddOrEven(sum);
console.log(`Il numero del pc è: ${pc_number}`);
console.log(`La somma è: ${sum}`);
console.log(`${sum} è ${odd_or_even}`);

if (user_bet == odd_or_even) {
	console.log(`L'utente ha indovinato !`);
} else {
	console.log(`L'utente non ha indovinato !`);
}
