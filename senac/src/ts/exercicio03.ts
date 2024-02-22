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

