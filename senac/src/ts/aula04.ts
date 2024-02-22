class Pessoal{
    nome: string;
    cpf: string;
    telefone: string;
    data: Date;
    constructor(nome:string,cpf:string, telefone:string,data: Date){
        this.nome = nome;
        this.cpf =cpf;
        this.telefone = telefone;
        this. data = data;
    }
    mostrardados(){
        console.log('Dados pessoais')
        console.log(`nome:${this.nome}`)
        console.log(`cpf: ${this.cpf}`)
        console.log(`Telefone:${this.telefone}`)
        console.log(`data:${this.data}`)
    }
}

const pessoa1  = new Pessoal('Diego', '123456789','12345678', new Date('2023-2-21'))

pessoa1.mostrardados()