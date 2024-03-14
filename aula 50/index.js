function top (a, b, c) {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos
    }
    console.log(total)
}

top(1, 5)
