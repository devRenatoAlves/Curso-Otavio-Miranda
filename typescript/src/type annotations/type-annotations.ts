
//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2: Array<number> = [1, 2, 3, 4, 5];

// Objetos
let pessoa: {nome: string, idade: number, adulto?:boolean} = {
  idade: 20,
  nome: 'Lucas',
}

// Funções
function soma(a: number, b: number): number {
  return a + b;
}

const soma2: (a: number, b: number) => number = function (a, b) {
  return a + b;
}

