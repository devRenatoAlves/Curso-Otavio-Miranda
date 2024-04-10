// Some todos os números (reduce)

const numeros = [1, 2, 4, 42, 423, 342, 2, 34, 432, 32, 23];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
}, 0);

console.log(total)