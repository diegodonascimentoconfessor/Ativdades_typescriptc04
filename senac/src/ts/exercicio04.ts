abstract class CadastrodeProjetos {
    constructor(
        private projeto: string,
        private tipodeProjeto: string,
        private faseprojeto: string
    ) { }
    
    mostrarDados() {}

    getprojeto(): string {
        return this.projeto;
    }

    setprojeto(projeto: string): void {
        this.projeto = projeto;
    }

    gettipoprojeto(): string {
        return this.tipodeProjeto;
    }

    settipodeprojeto(tipodeProjeto: string): void {
        this.tipodeProjeto = tipodeProjeto;
    }

    getfaseprojeto(): string {
            return this.faseprojeto;
    }

    setfaseprojeto(faseprojeto: string): void {
        this.faseprojeto = faseprojeto;
    }
}

class ControledeTarefas extends CadastrodeProjetos {
    constructor(
        protected programador: string,
        protected desenvolvedor: string,
        protected po: string,
        protected prazoinicial: Date,
        protected prazofinal: Date,
        projeto: string,
        tipodeprojeto: string,
        fasedeprojeto: string
    ) {
        super(projeto, tipodeprojeto, fasedeprojeto);
    }

    mostrarDados() {
        console.log('controle de Tarefas');
        console.log(`desenvolvedor: ${this.desenvolvedor}`);
        console.log(`po: ${this.po}`);
        console.log(`programador: ${this.programador}`);
        console.log(`prazoincial: ${this.prazoinicial}`);
        console.log(`prazofinal: ${this.prazofinal}`);
        console.log('cadastro de Projetos');
        console.log(`projeto: ${super.getprojeto}`)
        console.log(`tipo de projeto: ${super.gettipoprojeto}`);
        console.log(`fase do projeto: ${super.getfaseprojeto}`);
    }
}

const ControledeTarefas1 = new ControledeTarefas("Pedro","João","William",new Date("2024-2-20"), new Date("2024-5-20"),'Sistema eficiente','formulario decadastro','inicial');

//ControledeTarefas1.mostrarDados();

class Comunicação extends CadastrodeProjetos{
    constructor(
        protected canalatualização: string,
        protected canalsugestão: string,
        protected canalreunião: string,
                  projeto: string,
                  tipodeprojeto: string,
                  faseprojeto:string,
        ) { 
        super(projeto,tipodeprojeto,faseprojeto)
    }

    mostrarDados() {
        console.log('Portal para comunicação');
        console.log(`canal para atualização: ${this.canalatualização}`);
        console.log(`canal para sugestão: ${this.canalsugestão}`);
        console.log(`canal para reunião: ${this.canalreunião}`);
    }
}

const Comunicação1 = new Comunicação("Atualização Projeto", "faça a sua sugestão", "Reunião","Sistema Eficiente","tecnologico","inicial");

// console.log(Comunicação1.mostrarDados());
console.log(ControledeTarefas1.getprojeto());
console.log('======================================================')
console.log(Comunicação1.gettipoprojeto())
