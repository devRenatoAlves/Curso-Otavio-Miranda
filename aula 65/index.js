// Filter = Sempre retorna um array, com a mesma quantidade de elementos




const numbers = [23, 2, 4, 453, 2, 32, 432, 1];

function dale (valor, indice, array) {
    return valor > 10;
};

const numerosfiltrados = numbers.filter(valor => valor > 10);

console.log (numerosfiltrados)