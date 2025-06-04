enum Cores {
  vermelho,
  verde = 100,
  azul = 'azul',
}
 console.log(Cores.vermelho); // Saída: vermelho
console.log(Cores);

function escolhecor(cor: Cores): void {
  console.log(Cores[cor])
};
