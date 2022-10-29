
// desafio fazer uma função para checar se a palavra é palindromo.
//se for palindromo retornar "TRUE" e False para não palindromo.

let resultado;

const checaPalindromo = (entrada) => {
    let reverso = entrada.split('').reverse().join('');
        if(reverso === entrada){
          return  "TRUE"     
        }else{
          return "FALSE"
        }
     
}


resultado = "radar"
console.log(checaPalindromo(resultado))
resultado = "digital"
console.log(checaPalindromo(resultado))
resultado = "aba"
console.log(checaPalindromo(resultado))
