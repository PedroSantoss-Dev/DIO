// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// Entrada
// A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

let a = 5;
let n = 20;
let sum= 0;
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

for(i=0; i <= n; i++){
    if(i % a === 0){
      sum += i
    }
}
console.log(sum)