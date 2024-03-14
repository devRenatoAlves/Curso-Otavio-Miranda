const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

let cima = Math.floor(numero);
let baixo = Math.ceil(numero);
let inteiro = Number.isInteger(numero);
let nann = Number.isNaN(numero);
let decimais = numero.toFixed(2)

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz Quadrada: ${numero ** 0.5}</p>`; //Raiz quadrada
texto.innerHTML += `<p>${numero} é inteiro: ${inteiro}</p>`; //é inteiro
texto.innerHTML += `<p>É NaN: ${nann}</p>`; //é NaN
texto.innerHTML += `<p>Arredondando para baixo: ${baixo}</p>`; //Arrendondado para baixo
texto.innerHTML += `<p>Arredondando para cima: ${cima}</p>`; //Arredondado para cima
texto.innerHTML += `<p>Com duas casas decimais: ${decimais}</p>`; //Com duas casas decimais                   