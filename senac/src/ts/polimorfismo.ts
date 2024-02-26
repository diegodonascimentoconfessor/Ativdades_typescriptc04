 import { idText } from 'typescript';
import {Funcionario} from './exercicio'

 class Desenvolvedor extends Funcionario{
    constructor(
        public cargo: string,
        public matricula: string,
        endereco: string[],
        nome: string,
        telefone: string,
        email: string,
        data_nascimento: Date,
        rg: string) {


        super(cargo,matricula,endereco, nome, email, telefone, data_nascimento, rg)
    }
    mostrarDados() {
        super.mostrarDados();
        
    }

}
    const Dev1 = new Desenvolvedor("Desenvolvedor web","020302",["rua Pajuçara"],"joao","8498888777","joão@gmail", new Date('1992-08-21'),"01022110")
     
Dev1.mostrarDados()
console.log('==================================================')


class Desenvolvedorfrontend extends Desenvolvedor{              
 constructor(
    public programador :string,
    public inteinterfacegrafica : string,
    public cargo: string,
    public matricula: string,
    endereco: string[],
    nome: string,
    telefone: string,
    email: string,
    data_nascimento: Date,
    rg: string) {
  super(cargo,matricula,endereco,nome,telefone,email,data_nascimento,rg)

    }    
      mostrarDados(){
        super.mostrarDados()
          
      }
}
const Devfront = new Desenvolvedorfrontend("programa",'responsavel pelo desenvolvimento grafico','desenvolvedor Front end',"ad656656",['ruaa flamengo'], 'Marcos',"8497787877","marcos@gmail.com", new Date ('1992-03-23'),'0908087')

Devfront.mostrarDados()
console.log('==================================================')

class Desenvolvedorbackend extends Desenvolvedor{
 constructor(
  public analisardados:string,
    cargo: string,
    matricula: string,
    endereco: string[],
    nome: string,
    telefone: string,
    email: string,
    data_nascimento: Date,
    rg: string) {


    super(cargo,matricula,endereco,nome,telefone,email,data_nascimento,rg,)
}
 mostrarDados(){
    super.mostrarDados()
  }
}
const devback= new Desenvolvedorbackend("analisardados","desenvolvedorbackend","a99889",[ "rua  potengi"],"Gabriel","76668866","gabriel@gmail.com", new Date ('2000-03-16'),"a01122000")

devback.mostrarDados()
console.log('==================================================')


class Desenvolvedorfullstack extends Desenvolvedor{
    constructor(
    public especialistaemvariaslinguagem:string,
          cargo: string,
          matricula: string,
          endereco: string[],
          nome: string,
          telefone: string,
          email: string,
          data_nascimento: Date,
          rg: string) {
    super(cargo,matricula,endereco,nome,telefone,email,data_nascimento,rg)


}
mostrarDados(){
    super.mostrarDados()

  }
}
const devfullstack = new Desenvolvedorfullstack("especialistaemvarias linguagem","desenvolvedor full stack","a554444",[ 'rua Brasil'],"paulo","8499888744","carlos" ,new Date('1989-06-08'),"01020")

devfullstack.mostrarDados()