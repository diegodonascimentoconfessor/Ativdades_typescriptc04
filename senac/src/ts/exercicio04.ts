class CadastrodeProjetos {
    projeto: string
    tipodeprojeto: string
    faseprojeto: string

    constructor(projeto: string, tipodeProjeto: string, faseprojeto: string) {
        this.projeto = projeto;
        this.tipodeprojeto = tipodeProjeto;
        this.faseprojeto = faseprojeto;

    }
}

const CadastrodeProjetos1 = new CadastrodeProjetos("sistema eficiente", "Tecnologico", "Inicial")

console.log(CadastrodeProjetos1)

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

}

const ControledeTarefas1 = new ControledeTarefas("Pedro", "João", "William", new Date("2024-2-20"), new Date("2024-5-20"))

console.log(ControledeTarefas1)


class Comunicação {
    canalatualização: string
    canalsugestão: string
    canalreunião: string

    constructor(canalatualização: string, canalsugestão: string, canalreunião: string) {

        this.canalatualização = canalatualização;
        this.canalsugestão = canalsugestão;
        this.canalreunião = canalreunião;


    }
}

const Comunicação1 = new Comunicação("Atualização Projeto", "faça a  sua  sugestão", "Reunião")

console.log(Comunicação1)