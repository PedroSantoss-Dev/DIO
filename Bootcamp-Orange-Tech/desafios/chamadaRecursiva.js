// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 


const Rucursiva = (n) => {
    let result = 0
    for(let i = n; i > 0 ; i --){
        result += i
    }
    return result
}

console.log(Rucursiva(10))
console.log(Rucursiva(4))
console.log(Rucursiva(15))
