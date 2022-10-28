// Desafio
// Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

// Entrada
// As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

const Comparar = (a,b) => {
  if(a === b){
    return "Sao iguais!"
  }
  return "Nao sao iguais!"
}

console.log(Comparar(1,2))
console.log(Comparar(50,50))
console.log(Comparar(38,90))