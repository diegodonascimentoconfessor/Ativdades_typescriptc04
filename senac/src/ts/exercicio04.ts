class CadastrodeProjetos {
    projeto: string
    tipodeprojeto: string
    faseprojeto: string

    constructor(projeto: string, tipodeProjeto: string, faseprojeto: string) {
        this.projeto = projeto;
        this.tipodeprojeto = tipodeProjeto;
        this.faseprojeto = faseprojeto;

    }
    mostrarDados() {
        console.log('cadastro de Projetos')
        console.log(`projeto: ${this.projeto}`)
        console.log(`tipo de projeto: ${this.tipodeprojeto}`)
        console.log(`fase do projeto: ${this.faseprojeto}`)
    }

}

const CadastrodeProjetos1 = new CadastrodeProjetos("sistema eficiente", "Tecnologico", "Inicial")

console.log(CadastrodeProjetos1.mostrarDados())

class ControledeTarefas {
    programador: string
    desenvolvedor: string
    po: string
    prazoinicial: Date
    prazofinal: Date
    constructor(programador: string, desenvolvedor: string, po: string, prazoinicial: Date, prazofinal: Date) {

        this.programador = programador;
        this.desenvolvedor = desenvolvedor;
        this.po = po;
        this.prazoinicial = prazoinicial;
        this.prazofinal = prazofinal;

    }
    mostrarDados() {
        console.log('controle de Tarefas')
        console.log(`desenvolvedor: ${this.desenvolvedor}`)
        console.log(`po: ${this.po}`)
        console.log(`programador: ${this.programador}`)
        console.log(`prazoincial: ${this.prazoinicial}`)
        console.log(`prazofinal: ${this.prazofinal}`)
    }
}


const ControledeTarefas1 = new ControledeTarefas("Pedro", "João", "William", new Date("2024-2-20"), new Date("2024-5-20"))

console.log(ControledeTarefas1.mostrarDados())


class Comunicação {
    canalatualização: string
    canalsugestão: string
    canalreunião: string

    constructor(canalatualização: string, canalsugestão: string, canalreunião: string) {

        this.canalatualização = canalatualização;
        this.canalsugestão = canalsugestão;
        this.canalreunião = canalreunião;


    }
    mostrarDados() {
        console.log('Portal para comunicaçãao')
        console.log(`canal para atualização: ${this.canalatualização}`)
        console.log(` canal para sugestão: ${this.canalsugestão}`)
        console.log(`canal para reunião: ${this.canalreunião}`)

    }
}

const Comunicação1 = new Comunicação("Atualização Projeto", "faça a  sua  sugestão", "Reunião")

console.log(Comunicação1.mostrarDados())

