class CadastroConta {
    constructor(
        public id: number,
        public cliente: string,
        public idade: number,
        public email: string
        
    ) { }
    mostrarDados() {
        console.log('Dados Contas')
        console.log(`id: ${this.id}`)
        console.log(`cliente:${this.cliente}`)
        console.log(`idade: ${this.idade}`)
        console.log(`email:${this.email}`)
    }
}

class Pessoafisica{
nome: string ;
idade: number;
endereco: string ;
telefone:string;
conta:string ;
cpf: string ;
agencia:string

constructor(nome:string,idade:number,endereco:string,telefone:string, conta:string,cpf:string, agencia:string){
this.nome= nome;
this.idade = idade ;
this.endereco = endereco
this.telefone =telefone
this.conta = conta 
this.cpf = cpf
this.agencia= agencia
   

}

mostrarDados(){
console.log ('Dados pessoa Fisica')
console.log (`nome: ${this.nome}`)
console. log(`idade:${this.idade}`)
console.log(`endereco:${this.endereco}`)
console.log(`telefone: ${this.telefone}`)
console.log(`conta:${this.conta}`)
console.log(`cpf:${this.cpf}`)
console.log(`agencia:${this.agencia}`)
}
}


 const Pessoafisica1 = new Pessoafisica ("joaquim", 35, " rua Pajuçara", "8767668766","abcd9878877", "09088908", "a55655544")

class pessoajuridica {
    nome: string ;
    idade: number;
    endereco: string ;
    telefone:string;
    conta:string ;
    cnpj: string ;
    agencia:string;

    constructor(nome:string,idade:number,endereco:string, telefone:string,conta:string,cnpj:string, agencia:string){

        this.nome = nome
        this.idade =idade
        this.endereco = endereco
        this.telefone = telefone
        this.conta =conta
        this.cnpj = cnpj
        this.agencia= agencia


    }
    
}

class controledeDespesas {
    constructor(
        public saldo: number,
        public transferencia: string,
        public extrato: string,
        public data: Date
    ) { }
    mostrarDados() {
        console.log('Dados controle de Despesas')
        console.log(`saldo: ${this.saldo}`)
        console.log(`transferencia:${this.transferencia}`)
        console.log(`extrato: ${this.extrato}`)
        console.log(`data:${this.data}`)
    }
}
class Planejamento {
    constructor(
        public meta: string,
        public controledeGastos: string,
        public progresso: string
    ) { }
    mostrarDados() {
        console.log('Planejamento')
        console.log(`meta: ${this.meta}`)
        console.log(`controle de gastos ${this.controledeGastos}`)
        console.log(`progresso: ${this.progresso}`)
    }
}


const CadastroConta1 = new CadastroConta(34343, "Paulo", 45, "paulo@gmail.com")

const controledeDespesas1 = new controledeDespesas(100, "Realizada", "comprovante", new Date("2024-02-20"))
const planejamento1 = new Planejamento("alcançada", "alcançado com sucesso", "elevado")
console.log(CadastroConta1.mostrarDados())
console.log(controledeDespesas1.mostrarDados())
console.log(planejamento1.mostrarDados())
console.log(Pessoafisica1.mostrarDados())
