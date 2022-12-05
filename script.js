// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// 1. Chiedo all'utente quanti km vuole percorrere
const km = prompt('Quanti km vuoi che sia lungo il tuo viaggio?', '500')
console.log(km);


// 2. Chiedo all'utente quanti anni ha
const age = prompt('Quanti anni hai?', '20')
console.log(age);


// 3. Mi fisso una variabile con il prezzo del biglietto al km
const priceKm = 0.21
console.log(priceKm);


// 4. Mi calcolo il prezzo pieno del biglietto
const price = (km * priceKm).toFixed(2);
console.log(price);

let FinalPrice = price

if (age < 18) {
    FinalPrice = (price / 100 *80).toFixed(2)
}  
else if (age >= 65) {
    FinalPrice = ((price / 100)*60).toFixed(2)
}

console.log(FinalPrice);

document.getElementById('km').innerText = 'Hai scelto di percorrere: ' + km + 'km';
document.getElementById('price').innerText = 'Il prezzo del tuo biglietto è: ' + price + '€';
document.getElementById('FinalPrice').innerText = 'Il prezzo scontato del tuo biglietto è: ' + FinalPrice + '€';

