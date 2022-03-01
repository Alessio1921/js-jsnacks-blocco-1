/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */
let numbers=[];
let sum=0;
let average=0;
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random()*100));
  sum+=numbers[i];
}
console.log(numbers);
console.log(sum);
average=sum/10;
console.log(average);
