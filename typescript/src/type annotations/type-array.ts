//Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const resultado = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'c');
console.log(resultado);
console.log(concatenacao);
console.log(upperCase);
