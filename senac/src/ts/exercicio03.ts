class CadastroConta {
    id: number
    cliente: string
    idade: number
    email: string
    constructor(id: number, cliente: string, idade: number, email: string) {
        this.id = id;
        this.cliente = cliente;
        this.idade = idade;
        this.email = email
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
        this.data = data


    }
}
class Planejamento {
    meta: string
    controledegastos: string
    progesso: string

    constructor(meta: string, controledeGastos: string, progresso: string) {
        this.meta = meta;
        this.controledegastos = controledeGastos;
        this.progesso = progresso
    }
}


const CadastroConta1 = new CadastroConta( 34343, "Paulo", 45, "paulo@gmail.com")

console.log(CadastroConta1)

const controledeDespesas1= new controledeDespesas(75,"concluida", "comprovante de transferencia",new Date (2024-2-20))

console.log(controledeDespesas1)

const Planejamento1= new Planejamento("concluida", "atiginda","atingindo")

console.log (Planejamento1)