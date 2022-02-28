/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */
const userFirstNumber=parseInt( prompt("Inserisci il primo numero"));
const userSecondNumber=parseInt( prompt("Inserisci il secondo numero"));
let Result;
if(userFirstNumber > userSecondNumber){
  console.log(userFirstNumber);
  Result=userFirstNumber;
}
else{
  console.log(userSecondNumber);
  Result=userSecondNumber;
}
document.querySelector("h2").innerHTML=Result;