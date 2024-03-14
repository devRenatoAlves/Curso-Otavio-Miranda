// Função Contrutora -> Retorna Objetos
// Função Fábrica -> Fabrica Objetos

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + "Sou um metodo")
    }
}

const p1 = new Pessoa ('Renato' , 'Alves')

console.log(p1)