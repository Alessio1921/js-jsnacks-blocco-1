/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */
const numberUser=prompt("inserisci un numero a 7 cifre");
let sum=0;
for (let i = 0; i < numberUser.length; i++) {
sum += parseInt(numberUser.charAt(i));  
}
console.log(sum);