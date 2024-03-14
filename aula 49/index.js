// Declaracão de função (Function hoisting)
function falaOi () {
    console.log ("oi");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log ("Sou um dado"); 
}

// Arrow function

const arrowFunction = () => {
    console.log ("Sou uma arrow function");
}

// Dentro do objeto

const obj = {
    falar() {
        console.log ('Estou falando..')
    }
}


