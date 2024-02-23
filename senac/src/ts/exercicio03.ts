
class Pessoafisica {
    constructor(
        public nome: string,
        public idade: number,
        public endereco: string,
        public telefone: string,
        public conta: string,
        public cpf: string,
        public agencia: string) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco
        this.telefone = telefone
        this.conta = conta
        this.cpf = cpf
        this.agencia = agencia

    }

    mostrarDados() {
        console.log('Dados pessoa Fisica')
        console.log(`nome: ${this.nome}`)
        console.log(`idade:${this.idade}`)
        console.log(`endereco:${this.endereco}`)
        console.log(`telefone: ${this.telefone}`)
        console.log(`conta:${this.conta}`)
        console.log(`cpf:${this.cpf}`)
        console.log(`agencia:${this.agencia}`)
    }
}


const Pessoafisica1 = new Pessoafisica("joaquim", 35, " rua Pajuçara", "8767668766", "abcd9878877", "09908", "a55655544")
class CadastroConta extends Pessoafisica {
    constructor(
        public id: string,
        public cliente: string,
        public idade: number,
        public email: string,
        nome: string,
        endereco: string,
        telefone: string,
        conta: string,
        cpf: string,
        agencia: string) {
        super(nome, idade, endereco, telefone, conta, cpf, agencia);
    }

    mostrarDados() {
        super.mostrarDados();
        console.log('Dados conta')
        console.log(`enderenço: ${this.endereco}`);
        console.log(`telefone:${this.telefone}`);
        console.log(`conta:${this.conta}`)
        console.log(`cpf:${this.cpf}`)
        console.log(`agencia:${this.agencia}`)
    }
}
const CadastroConta1 = new CadastroConta("565433ff", "vip", 45, "joaquim", "joaquim", " Rua Pajuçaar", "849887865", "a54544", "98779977", "tr544433");
class Pessoajuridica extends Pessoafisica {
    constructor(
        public nome: string,
        public cnpj: string,
        public idade: number,
        cpf: string,
        endereco: string,
        telefone: string,
        conta: string,
        agencia: string
    ) {
        super(nome, 35, endereco, telefone, conta, cpf, agencia)

    }

    mostrarDados() {
        super.mostrarDados();
        console.log("Dados Pessoa Juridica");
        console.log(`endereço: ${this.endereco}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`conta: ${this.conta}`);
        console.log(`cnpj: ${this.cnpj}`);
        console.log(`agencia: ${this.agencia}`);
    }
}

const pessoajuridica1 = new Pessoajuridica("joaquim", "66756564544545", 19, "00000", "rua abcd", "849777666", "PJ", "Ag09097");





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




const controledeDespesas1 = new controledeDespesas(100, "Realizada", "comprovante", new Date("2024-02-20"))
const planejamento1 = new Planejamento("alcançada", "alcançado com sucesso", "elevado")
console.log(CadastroConta1.mostrarDados())
console.log("=========")
console.log(pessoajuridica1.mostrarDados())
