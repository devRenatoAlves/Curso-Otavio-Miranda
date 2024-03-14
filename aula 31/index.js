const numeros = [1000 , 2000, 3000, 4000, 5000, 6000];

const [ mil, doismil , tresmil, ...rest] = numeros;

console.log (mil, tresmil, ...rest);