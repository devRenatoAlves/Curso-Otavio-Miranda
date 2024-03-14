const cadastro = {
    nome : 'Renato' , 
    sobrenome: 'Alves' , 
    idade: 18,
    endereco: {
        rua: 'Ludlaw' , 
        numero: 500
    }
};

const { endereco: {rua} }= cadastro;

console.log(rua)