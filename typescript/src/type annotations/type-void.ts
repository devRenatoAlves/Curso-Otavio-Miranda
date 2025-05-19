// Void é quando um método ou uma função não retorna nada

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: "Lucas",
  sobrenome: "Lima",

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
}

semRetorno('Lucas', 'Lima');
pessoa.exibirNome();

export{pessoa}
