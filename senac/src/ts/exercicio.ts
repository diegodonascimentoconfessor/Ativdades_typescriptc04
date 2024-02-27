

abstract class Pessoa {
    constructor(
        public endereco: string[],
        public nome: string,
        protected email: string,
        public telefone: string,
        public data_nascimento: Date,
        public cpf: string,
        public matricula: string,
        public genero: string,
        public cargo: string,
    ) { }

    mostrarDados() {

    }

    getEmail(): string {
        return this.email
    }
    setEmail(email: string): void {
        this.email = email
    }

}


// atributos Proprios da Classe Funcionario 
class Funcionario extends Pessoa {
    // Metodo construtor da classe 
    constructor(
        public matricula: string,
        endereco: string[],
        nome: string,
        telefone: string,
        email: string,
        data_nascimento: Date,
        cpf: string,
        genero : string,
        cargo: string,

    ) {
        super(endereco, nome, email, telefone, data_nascimento, cpf, matricula, genero, cargo)
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
        console.log(`cpf:${this.cpf}`)

    }

}

const Funcionario1 = new Funcionario("a554444", ['rua Brasil'], "pedro", "849988888", "pedro@gmail.com", new Date('09-05-1992'), "0809858555", "masculino", "Medico")
// Fcionariuno1. setEmailil())("Diego@gmail.com")
// console.log(Funcionario1.getEmail
//Cadastro de Consultas:
//Dados específicos sobre cada consulta, incluindo informações importantes.

class Consulta {

    constructor(
        protected local: string,
        protected data: Date,
        public convenio: boolean,
        public medico: Funcionario
    ) { }
}
const consulta1 = new Consulta('pajuçara', new Date('2024-2-19'), true, Funcionario1)

//Cadastro de Pacientes:
//Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente extends Pessoa {
    constructor(
        public idade: number,
        public sintomas: string,
        public cpf: string,
        rg: string,
        endereco: string[],
        public matricula:string,
        nome: string,
        email: string,
        telefone: string,
        data_nascimento: Date,
        public genero: string,
        public cargo : string, 
    ) {
        super(endereco, nome, email, telefone, data_nascimento, rg,matricula,genero, cargo)

    }


    mostrarDados() {
        super.mostrarDados();
        console.log(`idade ${this.idade}`);
        console.log(`sintomas: ${this.sintomas}`);
        console.log(`cpf:${this.cpf}`);

    }

}



//paciente1 = new Paciente(34,'febre',"01001100",'010202',["flor do pariso"],"a988777")
//Funcionario1.setEmail('Roberto@gmail.com')
//console.log(Funcionario1.getEmail())
    //paciente1.mostrarDados()
    //console.log('================================================')
    //Funcionario1.mostrarDados()
 

    document.addEventListener('DOMContentLoaded',
  function () {
    const form = document.querySelector('#formFuncionario')
    if(form){
    form.addEventListener('submit',
     function ( event) {
        event.preventDefault();
     


const nome =(document.getElementById('nome') as HTMLInputElement).value;
const email =(document.getElementById('email') as HTMLInputElement).value;
const  telefone =(document.getElementById('telefone') as HTMLInputElement).value;
const dataerrada=(document.getElementById('dataNascimento') as HTMLInputElement).value;
const endereco =(document.getElementById('endereco') as HTMLInputElement).value;
const cpf=(document.getElementById('cpf') as HTMLInputElement).value;
const genero=(document.getElementById('genero') as HTMLSelectElement).value;
const cargo=(document.getElementById('cargo') as HTMLInputElement).value;   
const matricula=(document.getElementById('matricula') as HTMLInputElement).value;

  const dataNascimento = new Date (dataerrada).toLocaleDateString('pt-BR')

    localStorage.setItem('nome',nome );
    localStorage.setItem  ('email',email)  ;
    localStorage.setItem('telefone',telefone);
    localStorage.setItem ('dataNascimento',dataNascimento) ;
    localStorage.setItem('endereco',endereco) ;
    localStorage.setItem('cpf',cpf) ;
    localStorage.setItem('genero',genero);
    localStorage.setItem ('cargo',cargo);
    localStorage.setItem ('matricula',matricula);


 window.location.href = './funcionario.html';

     });
    }else{
     console.error('formulario não encontrado!')   
    }
  }
    );