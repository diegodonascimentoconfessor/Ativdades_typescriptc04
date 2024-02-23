class CadastrodeProjetos {
    constructor(
        public projeto: string,
        public tipodeProjeto: string,
        public faseprojeto: string
    ) { }
    mostrarDados() {
        console.log('cadastro de Projetos')
        console.log(`projeto: ${this.projeto}`)
        console.log(`tipo de projeto: ${this.tipodeProjeto}`)
        console.log(`fase do projeto: ${this.faseprojeto}`)
    }

}

const CadastrodeProjetos1 = new CadastrodeProjetos("sistema eficiente", "Tecnologico", "Inicial")

//console.log(CadastrodeProjetos1.mostrarDados())

class ControledeTarefas {

    constructor(
        public programador: string,
        public desenvolvedor: string,
        public po: string,
        public prazoinicial: Date,
        public prazofinal: Date
    ) { }
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
    constructor(
        public canalatualização: string,
        public canalsugestão: string,
        public canalreunião: string
    ) { }
    mostrarDados() {
        console.log('Portal para comunicaçãao')
        console.log(`canal para atualização: ${this.canalatualização}`)
        console.log(` canal para sugestão: ${this.canalsugestão}`)
        console.log(`canal para reunião: ${this.canalreunião}`)

    }
}

const Comunicação1 = new Comunicação("Atualização Projeto", "faça a  sua  sugestão", "Reunião")

//console.log(Comunicação1.mostrarDados())

