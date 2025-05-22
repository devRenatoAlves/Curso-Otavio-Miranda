
// Undefined é quando uma variável não foi definida
let x;
if (typeof x === 'undefined') x = 3;
console.log(x * 2);

export function createPerson {
  firstName: string;
  lastName: string?;
}: {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName: 'Lucas',
    lastName: 'Lima',
  };
}

// Null é quando uma variável foi definida, mas não tem valor OU
// nao sabemos que valor vamos receber e podemos fazer condiçoes

export function squareOf (x: number | null) {
  if (x === null) return 0;
  return x * x;
}

