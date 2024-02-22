class Pessoal {
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string,
        public data: Date
    ) { }
    mostrardados() {
        console.log('Dados pessoais')
        console.log(`nome:${this.nome}`)
        console.log(`cpf: ${this.cpf}`)
        console.log(`Telefone:${this.telefone}`)
        console.log(`data:${this.data}`)
    }
}

const pessoa1 = new Pessoal('Diego', '123456789', '12345678', new Date('2023-2-21'))

pessoa1.mostrardados()
