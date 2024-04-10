// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (Somar tudo)

const numbers = [23, 4, 2, 12, 455, 22, 21]

const conta = numbers
.filter( valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor);

console.log (conta)