class Pessoar{
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
}

const pessoa1  = new Pessoar('Diego', '123456789','12345678', new Date('2023-2-21'))

console.log(pessoa1.cpf)