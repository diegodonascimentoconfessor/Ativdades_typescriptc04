

class Pessoa {
    endereco: string[]
    nome: string;
    email: string;
    telefone: string;
    data_nascimento:Date
     rg :string
    constructor(endereco:string[], nome:string,email:string,telefone:string, data_nascimento:Date, rg:string){
        this.nome = nome ;
        this.email= email ;
        this.endereco = endereco ;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento ;
         this.rg = rg 
    }
}

 // atributos Proprios da Classe Funcionario 
class Funcionario extends Pessoa {
    cargo: string
    matricula: string
    // Metodo construtor da classe 
    constructor(cargo: string, matricula: string, endereco:string[], nome:string,telefone:string, email:string,data_nascimento:Date, rg:string){
         super(endereco,nome, email, telefone, data_nascimento, rg)
        this.cargo =cargo;
         this.matricula = matricula
    }     
    }
 



const Funcionario1 = new Funcionario( "medico","020122",["rua brasil"],"joão", "8498898898","joao@hotmail.com",new Date("2024-2-21"),"0210221100")

console.log(Funcionario1)



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
const consulta1 =  new Consulta ('pajuçara', new Date('2024-2-19'), true, Funcionario1)




//Cadastro de Pacientes:
//Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente extends Pessoa{ 
    idade: number
    sintomas: string
    cpf:string 
    
    constructor ( idade:number,sintomas:string, cpf:string, rg:string, endereco:string[], nome:string, email:string,telefone:string, data_nascimento:Date, ){
     super(endereco, nome,email,telefone, data_nascimento,rg)

        this.idade=idade;
        this.sintomas= sintomas;
        this.cpf=cpf
        

    }
 
    
 }



const paciente1 = new Paciente(34, "febre alta", '89878778', "06547877", ["rua sem nome "], "pedro","pedro@gmail.com","84988885544", new Date("2024-2-21"))
console.log(paciente1)


