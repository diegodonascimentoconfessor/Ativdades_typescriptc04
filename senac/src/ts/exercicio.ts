class Funcionario {
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    constructor(nome: string, email: string, telefone: string, cargo: string,) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;

    }
}


const Funcionario1 = new Funcionario('joao', 'joao@gmail', '05255444', ' porteiro ')




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
}
const Consulta1 = new Consulta('pajuçara', new Date('2024-2-19'), true, Funcionario1)

console.log(Consulta1)



//Cadastro de Pacientes:
//Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente { 
    nome: string
    idade: number
    contato: string
    sintomas: string
    constructor (nome:string, idade:number, contato: string, sintomas:string){

    
        this.nome=nome,
        this.idade=idade,
        this.contato = contato,
        this.sintomas= sintomas

    }
}


const paciente1 = new Paciente('joao', 33, '89878778',"febre alta")

console.log (paciente1)