/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */
const listName=["aldo" , "giovanni" , "giacomo" , "paolo" , "giulio" , "alessio" , "vittoria" , "francesco" , "loredana"];
let userName= prompt("inserisci il tuo nome").toLocaleLowerCase().trim();
let reply="non puoi entrare";
for (let i = 0; i < listName.length; i++) {
  if(userName== listName[i]){
  reply="puoi entrare";
}
};
console.log(reply);
