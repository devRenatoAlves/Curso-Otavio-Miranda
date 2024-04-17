const endereco = new Object();

endereco.rua = 11;
endereco.quadra = 28;
endereco.bairro = 'Alice Barbosa';
endereco.onde = function () {
    console.log(`${this.bairro} está pedindo pizza`)
}

//endereco.onde()

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
}

const p1 = new Pessoa ('renato' , 'alves')

console.log(p1)