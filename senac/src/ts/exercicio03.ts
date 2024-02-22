class CadastroConta {
    id: number
    cliente: string
    idade: number
    email: string
    constructor(id: number, cliente: string, idade: number, email: string) {
        this.id = id;
        this.cliente = cliente;
        this.idade = idade;
        this.email = email;
    }
    mostrarDados() {
        console.log('Dados Contas')
        console.log(`id: ${this.id}`)
        console.log(`cliente:${this.cliente}`)
        console.log(`idade: ${this.idade}`)
        console.log(`email:${this.email}`)
    }
}
class controledeDespesas {
    saldo: number
    transferencia: string
    extrato: string
    data: Date

    constructor(saldo: number, transferencia: string, extrato: string, data: Date) {
        this.saldo = saldo;
        this.transferencia = transferencia;
        this.extrato = extrato;
        this.data = data;


    }
    mostrarDados() {
        console.log('Dados controle de Despesas')
        console.log(`saldo: ${this.saldo}`)
        console.log(`transferencia:${this.transferencia}`)
        console.log(`extrato: ${this.extrato}`)
        console.log(`data:${this.data}`)
    }
}
class Planejamento {
    meta: string
    controledegastos: string
    progresso: string

    constructor(meta: string, controledeGastos: string, progresso: string) {
        this.meta = meta;
        this.controledegastos = controledeGastos;
        this.progresso = progresso
    }
    mostrarDados() {
        console.log('Planejamento')
        console.log(`meta: ${this.meta}`)
        console.log(`controle de gastos ${this.controledegastos}`)
        console.log(`progresso: ${this.progresso}`)
    }
}


const CadastroConta1 = new CadastroConta(34343, "Paulo", 45, "paulo@gmail.com")

const controledeDespesas1 = new controledeDespesas(100, "Realizada", "comprovante", new Date("2024-02-20"))
const planejamento1 = new Planejamento("alcançada", "alcançado com sucesso", "elevado")
console.log(CadastroConta1.mostrarDados())
console.log(controledeDespesas1.mostrarDados())
console.log(planejamento1.mostrarDados())