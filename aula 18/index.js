const pessoa1 = {
    nome: 'Luiz' , 
    sobrenome: 'Alves',
    idade: 18 , 

    fala () {
        console.log (`Tenho ${this.idade}, mas vou fazer aniversário`)
    } ,

    aniversario () {
        ++this.idade
    } , 

    fiz () {
        console.log ('Olha.. fiz anivers')
    },

    agora() {
        console.log (`Agora eu tenho ${this.idade}`)
    }
    
}


pessoa1.fala()
pessoa1.aniversario()
pessoa1.fiz()
pessoa1.agora()

pessoa1.fala()
pessoa1.aniversario()
pessoa1.fiz()
pessoa1.agora()

pessoa1.fala()
pessoa1.aniversario()
pessoa1.fiz()
pessoa1.agora()