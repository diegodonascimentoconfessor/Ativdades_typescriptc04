
class Pessoafisica {
    constructor(
        protected nome: string,
        public idade: number,
        public endereco: string,
        public telefone: string,
        private conta: string,
        private cpf: string,
        private agencia: string) {
        

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

    getcpf(): string{
        return this.cpf
    }
    setcpf( cpf:string): void {
          this.cpf = cpf

          
}
    getconta():string{
    return this.conta

    }
    setconta(conta:string) :void{
         this.conta = conta

    

    }
    getagencia() : string {
        return this.agencia
    }
    setagencia(agencia:string) :void {
         this.agencia=agencia
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
        console.log(`conta:${super.getconta}`)
        console.log(`cpf:${super.getcpf}`)
        console.log(`agencia:${super.getagencia}`)
    }
}
const CadastroConta1 = new CadastroConta("565433ff", "vip", 45, "joaquim", "joaquim", " Rua Pajuçaa", "849887865", "a54544", "98779977", "tr544433");
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
        console.log(`conta: ${super.getconta}`);
        console.log(`cnpj: ${this.cnpj}`);
        console.log(`agencia: ${super.getagencia}`);
    }
}

const pessoajuridica1 = new Pessoajuridica("joaquim", "66756564544545", 19, "00000", "rua abcd", "849777666", "PJ", "Ag09097");


class controledeDespesas extends Pessoafisica {
    constructor(
        private saldo: number,
        private transferencia: string,
        private extrato: string,
        private data: Date,
        protected nome: string,
        idade: number,
        endereco: string, 
        telefone: string,
        conta: string,
        cpf: string,
        agencia: string
    ) {
        super(nome, idade, endereco, telefone, conta, cpf, agencia);
        this.nome = nome;
        this.idade = idade;
    
    }

    mostrarDados() {
        console.log('Dados controle de Despesas');
        console.log(`saldo: ${this.saldo}`);
        console.log(`transferencia: ${this.transferencia}`);
        console.log(`extrato: ${this.extrato}`);
        console.log(`data: ${this.data}`);
        console.log(`nome: ${this.nome}`);
    }
  getsaldo() :number{
     return this.saldo }

    gettransferencia(): string{
        return this.transferencia
    }
   getextrato(){
    return this.extrato
   }

   getdata(): Date {
    return this.data
   }
}






class Planejamento {
    constructor(
        protected meta: string,
         protected controledeGastos: string,
         protected progresso: string
    ) { }
    mostrarDados() {
        console.log('Planejamento')
        console.log(`meta: ${this.meta}`)
        console.log(`controle de gastos ${this.controledeGastos}`)
        console.log(`progresso: ${this.progresso}`)
    }
}




const controledeDespesas1 = new controledeDespesas(1400, "realizada com sucesso","comprovante",new Date('2024-02-22'),"joaquim",39,"rua Brasil","847788777","pf","0101100","a5rredd0")
const planejamento1 = new Planejamento("alcançada", "alcançado com sucesso", "elevado")
//console.log(CadastroConta1.mostrarDados())
//console.log("=========")
//console.log(pessoajuridica1.mostrarDados())
