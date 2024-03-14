function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ("esperando data")
    }
}
retornaHora(c)