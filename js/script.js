// M-1 PALINDROMA
const user_word = prompt(`Inserisci una parola`);
const array_word = Array.from(user_word);
let array_reversed = [];

for (let i = 1; i < array_word.length + 1; i++) {
	array_reversed.push(array_word[array_word.length - i]);
}
let user_reversed = array_reversed.toString();

if (array_word == user_reversed) {
	console.log(`La parola è palindroma !`);
} else {
	console.log(`La parola non è palindroma !`);
}

// // M-2 PARI E DISPARI
// const user_bet = prompt(`Il risultato sarà pari o dispari?`);
// const user_number = prompt(`Scegli un numero da 1 a 5`);
