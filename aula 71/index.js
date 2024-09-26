// defineProperty - defineProperties
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave?
        configurable: true, // Pode configurar a chave?
        get: function () {
            return estoque;
        },
        set: function (valor) {
        console.log(valor)
        }
    })
};
  
const p1 = new Produto ('Feijao', 10, 4)
console.log (p1)

p1.estoque = 'O valor  que eu quero'
console.log(p1.estoque)