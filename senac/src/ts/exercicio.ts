

 abstract class Pessoa {
    constructor(
        public endereco: string[],
        public nome: string,
        protected email: string,
        public telefone: string,
        public data_nascimento: Date,
        public rg: string

    ) { }

    mostrarDados() {
        
    }

    getEmail(): string{
        return this.email
    }
    setEmail( email:string): void {
          this.email = email
    }

    }


// atributos Proprios da Classe Funcionario 
 export class Funcionario extends Pessoa {
    // Metodo construtor da classe 
    constructor(
        public cargo: string,
        public matricula: string,
        endereco: string[],
        nome: string,
        telefone: string,
        email: string,
        data_nascimento: Date,
        rg: string) {


        super(endereco, nome, email, telefone, data_nascimento, rg)
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`cargo: ${this.cargo}`);
        console.log(`matricula: ${this.matricula}`);
        console.log(`email:${this.email}`)
        console.log('Dados Pessoas')
        console.log(`endereço:${this.endereco}`)
        console.log(`nome:${this.nome}`)
        console.log(`email:${this.email}`)
        console.log(`telefone:${this.telefone}`)
        console.log(`data de Nascimento:${this.data_nascimento.toLocaleString('pt-BR')}`)
        console.log(`cpf:${this.rg}`)

    }

}

const Funcionario1 = new Funcionario("medico", "020122", ["rua brasil"], "joão", "8498898898", "joao@hotmail.com", new Date("2024-2-21"), "0210221100")
 // Fcionariuno1. setEmailil())("Diego@gmail.com")
 // console.log(Funcionario1.getEmail
//Cadastro de Consultas:
//Dados específicos sobre cada consulta, incluindo informações importantes.

class Consulta {

    constructor(
    public  local: string, 

    public data: Date, 
    public convenio: boolean,
      public medico: Funcionario
      ) {}
}
const consulta1 = new Consulta('pajuçara', new Date('2024-2-19'), true, Funcionario1)

//Cadastro de Pacientes:
//Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente extends Pessoa {
    constructor(
      public  idade: number, 
     public   sintomas: string, 
       public cpf: string, 
        rg: string, 
        endereco: string[], 
        nome: string, 
        email: string, 
        telefone: string, 
        data_nascimento: Date
        ) {
        super(endereco, nome, email, telefone, data_nascimento, rg)

        }               

    
    mostrarDados() {
        super.mostrarDados();
        console.log(`idade ${this.idade}`);
        console.log(`sintomas: ${this.sintomas}`);
        console.log(`cpf:${this.cpf}`);

    }

}



const paciente1 = new Paciente(34, "febre alta", '89878778', "06547877", ["rua sem nome "], "pedro", "pedro@gmail.com", "84988885544", new Date("2024-2-21"))

//paciente1.mostrarDados()
//console.log('================================================')
//Funcionario1.mostrarDados()

