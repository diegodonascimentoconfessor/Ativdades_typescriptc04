 abstract class CadastroBiblioteca {
    constructor(
        public nome: string,
        public  codigodeacesso: string,
        public email: string,
        protected endereco: string,
        private cpf: string,
        public telefone: string
    ) { }

    MostrarDados() {
        console.log('Dados Cadastro Biblioteca')
        console.log(`nome:${this.nome}`)
        console.log(`codigodeacesso:${this.codigodeacesso}`)
        console.log(`email:${this.email}`)
        console.log(`endereco:${this.endereco}`)
        console.log(`cpf:${this.cpf}`)
        console.log(`telefone:${this.telefone}`)
    }

    getcpf(): string{
        return this.cpf
    }
    setcpf( cpf:string): void {
          this.cpf = cpf

   }

   getendereco():string{
    return this.endereco
}
  setendereco(endereco:string): void{
       this.endereco= endereco
  }
     
  }






class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public editora: string,
        public categoria: string,
        public quantidadeDisponivel: number
    ) { }

    mostrarDados() {
        console.log('Dados Livros')
        console.log(`titulo:${this.titulo}`)
        console.log(`autor:${this.autor}`)
        console.log(`editora:${this.editora}`)
        console.log(`categoria:${this.categoria}`)
        console.log(`quantidade:${this.quantidadeDisponivel}`)
    }
}

class Usuario extends CadastroBiblioteca {
    constructor(
        nome: string,
        endereco: string,
        telefone: string,
        public relatorioEmprestimo: string,
        public codigodeacesso: string,
        email: string,
        cpf: string,
    ) {
        super(nome, codigodeacesso, email, endereco, cpf, telefone)
    }

    mostrarDados() {
        console.log('Dados Usuarios')
        console.log(`nome:${this.nome}`)
        console.log(`endereço:${this.endereco}`)
        console.log(`telefone:${this.telefone}`)
        console.log(`relatorio emprestimo:${this.relatorioEmprestimo}`)
        console.log(`cpf:${super.getcpf}`)
    }

}


const usuario1 = new Usuario("fabio","rua Bela vista", "84988888","empestimo ativo","ao0908","fabio@hotmail.com","0987766655")

class Emprestimo extends CadastroBiblioteca {
    constructor(
    public livro: string,
     public usuario: string,
        public dataEmprestimo: Date,
        public dataDevolucao: Date,
        nome: string,
        codigodeacesso: string,
        email: string,
        endereco: string,
        cpf: string,
        telefone: string
    ) {
        super(nome, codigodeacesso, email, endereco, cpf, telefone)
    }

    mostrarDados() {
    super.MostrarDados()
      console.log('Dados Emprestimo')
        console.log(`livro:${this.livro}`)
        console.log(`usuario:${this.usuario}`)
        console.log(`nome:${this.nome}`)
        console.log(`Codigo de Acesso:${this.codigodeacesso}`)
        console.log(`email${this.email}`)
        console.log(`Endereço:${this.endereco}`)
        console.log(`Cpf:${super.getcpf}`)
        console.log(`Telenone:${this.telefone}`)
      console.log(`data emprestimo: ${this.dataEmprestimo.toLocaleDateString('pt-BR')}`) 
     console.log(`data Devolução:${this.dataDevolucao.toLocaleDateString('pt-BR')}`) 
    }
}

const emprestimo1 = new Emprestimo("A moreninha", "Diego", new Date("2024-02-23"), new Date("2024-04-23"), "Diego Confessor", "AB654455", "diego@hotmail.com", "rua pajuçara", "0876654", "878655443")


emprestimo1.setcpf("06742178450")
console.log(emprestimo1.getcpf())
console.log('========================================')
emprestimo1.setendereco("rua Brasil")
console.log(emprestimo1.getendereco())
console.log("=====================")
usuario1.setendereco("98877887777")
console.log(usuario1)


//console.log(emprestimo1.mostrarDados());
//console.log("=======================");