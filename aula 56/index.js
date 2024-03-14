function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,  
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // Faz arrays separados por espaços
            this.nome = valor.shift() // Retorna o primeiro valor, e logo depois exclui
            this.sobrenome = valor.join(' ')
           
        },

        fala(e) {
            return `${this.nome} está ${e}`
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Marquis', 'ton' , 1.8, 90)
p1.nomeCompleto = "Renato Alves de Matos"
console.log(p1.imc)
console.log(p1.sobrenome)