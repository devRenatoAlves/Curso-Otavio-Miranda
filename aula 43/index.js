/*
Escreva uma função que recebe o número e
retorne o seguinte: 
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisevel por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número 
Use a função com números de 0 a 100
*/

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);   // GERA O NUMERO 
  }
const number = getRandomArbitrary (0 , 100)
const resultado = divisao (number)

function divisao (number) {
    if (number % 3) {
        console.log ('Buzz')
    } else if ( number % 5) {
        console.log('Buzz')
    } else if ( number % 3 || number % 5) {
        console
    }
}
console.log (divisao())