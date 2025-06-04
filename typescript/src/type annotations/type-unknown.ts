let x: unknown;

x = 10;
x = 'renato';
x = 2011;
x = '20'
x = 100;

let y = 10;

if (typeof x === "number") console.log(x + y);

// O unkown é mais seguro de usar do que o any, pois quando da essa bagunçada de tipos, ele "reclama"
// Já o Any, ele apenas processa do jeito que dá, sem "reclamar"

