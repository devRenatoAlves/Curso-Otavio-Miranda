/*
Operadores Lógicos
&& -> AND -> E -> TODAS AS ESPRESSÓES PRECISAM SER TRUE
|| -> OR -> OU -> UMA DAS EXPRESSÕES PRECISA SER TRUE
! -> NOT -> NÃO
*/

console.log(true && true && true && true);     //EXPRESSAO &&
console.log(true || false || false || true);   //EXPRESSAO ||
console.log(!!false);                          //EXPRESSAO !

const usuario = 'natindo085'
const senha = 11062005

console.log(usuario === 'natindo085' || senha === 1106205);