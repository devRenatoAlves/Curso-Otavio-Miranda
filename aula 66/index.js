// Map, altera o valor do array, mas n altera o valor original.

// Dobre os números

const numeros = [5, 50, 53, 204, 22, 2, 5, 28];
const numerosEmDobro = numeros.map(valor => valor * 2);

//console.log (numerosEmDobro)



// Para cada elemento:
// Retorne apenas uma string com o nome de pessoa 
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto 

const pessoas = [
    {nome: 'Renato', idade: 18},
    {nome: 'Maria', idade: 10},
    {nome: 'Joao', idade: 34},
    {nome: 'Fulano', idade: 2},
    {nome: 'Ciclano', idade: 13},
    {nome: 'Beltrano', idade: 36},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.nome}))

const comIds = pessoas.map (function (obj, indice) {
    obj.id = indice
    return obj
});

console.log(comIds)

