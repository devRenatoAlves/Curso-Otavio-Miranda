const pessoa = ['feijao' , 'arroz' , 'cebola'];

/*for (let chave in pessoa) {
    console.log (pessoa[chave])
}*/

/*for (let i of pessoa) {
    console.log (i)
}*/

pessoa.forEach(function (valor, indice){
    console.log (valor, indice)
}); 

