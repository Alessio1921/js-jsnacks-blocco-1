/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */
let firstWord=document.getElementById("first");
let secondWord=document.getElementById("second");
document.getElementById("send").addEventListener('click', function () {
if(firstWord.value.length > secondWord.value.length){
  document.querySelector("h1").innerHTML= firstWord.value+"<br>" + secondWord.value+ "<br> la prima parola è piu lunga";
}
else if(firstWord.value.length === secondWord.value.length){
  document.querySelector("h1").innerHTML= firstWord.value+" " + secondWord.value+ "<br> le parole sono uguali";
}
else{
  document.querySelector("h1").innerHTML= secondWord.value+"<br>" + firstWord.value+ "<br> la seconda parola è piu lunga";
}
})