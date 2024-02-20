class Funcionario {
    endereco: string[]
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    data_nascimento:Date
    // Metodo construtor da classe 
    constructor( endereco:string[], nome: string, email: string, telefone: string, cargo: string,data_nascimento:Date) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.data_nascimento = data_nascimento
        this.endereco=endereco

    }
 mostrarDados(){
    console.log('Dados do funcionario')
    console.log(`nome: ${this.nome}`)
    console.log(`email: ${this.email}`)
    console.log(`telefone:${this.telefone}`)
    console.log(`cargo:${this.cargo}`)
    console.log(`endereco:${this.endereco}`)
    console.log(`data_nascimento:${this.data_nascimento.toLocaleString('pt-Br')}`)
    

}
}



const Funcionario1 = new Funcionario(['rua senac,'], 'joão', 'joao@gmail', '05255444', ' porteiro ', new Date('2024-2-19'))

console.log(Funcionario1.mostrarDados())



//Cadastro de Consultas:
//Dados específicos sobre cada consulta, incluindo informações importantes.

class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario
   
    constructor(local: string, data: Date, convenio: boolean, medico: Funcionario) {
        this.local = local,
        this.data = data,
        this.convenio=convenio,
        this.medico=medico
    }
    mostraDados(){
 console.log('Dadosconsulta')
 console.log(`local: ${this.local}`)
 console.log(`data: ${this.data}`)
 console.log(`convenio: ${this.convenio}`)
 console.log(`medico: ${this.medico}`)

    }
}
const consulta1 =  new Consulta ('pajuçara', new Date('2024-2-19'), true, Funcionario1)

console.log(consulta1.mostraDados())



//Cadastro de Pacientes:
//Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente { 
    nome: string
    idade: number
    contato: string
    sintomas: string
    constructor (nome:string, idade:number, contato: string, sintomas:string){

    
        this.nome=nome;
        this.idade=idade;
        this.contato = contato;
        this.sintomas= sintomas;

    }
 
    mostraDados(){
    console.log('Dados Paciente')
    console.log(`nome: ${this.nome}`)
    console.log(`idade:${this.idade}`)
    console.log(`contato: ${this.contato}`)
    console.log(`sintomas:${this.sintomas}`)
 }
}


const paciente1 = new Paciente('joao', 33, '89878778',"febre alta")
console.log(paciente1.mostraDados())