  const objetoA: {
  readonly chaveA: string; // readonly significa que não pode ser alterado
  chaveB: string;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
}

const objetoB: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // significa que pode ter outras chaves além de chaveA, chaveB e chaveC
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
}
