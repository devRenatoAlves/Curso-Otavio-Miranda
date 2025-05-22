// Tipo Tuble
const dadosCliente1: [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, string] = [2, 'João', 'Rua 1'];
const dadosCliente3: [number, string, string?] = [3, 'Maria', 'Rua 2'];
const dadosCliente4: [number, string, ...string[]] = [4, 'Ana', 'Rua 3', 'Rua 4', 'Rua 5'];

// readonly arrays
const array1: readonly [number, string] = [1, 'Lucas'];
const array2: ReadonlyArray<string> = ['renato', 'Lucas'];
