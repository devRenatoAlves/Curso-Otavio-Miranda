// defineProperty - defineProperties
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave?
        value: estoque, // definir o Valor da chave
        writable: false, // Pode alterar o valor?
        configurable: true // Pode configurar a chave?
    })
};
  
const p1 = new Produto ('Feijao', 10, 4)

console.log (p1)