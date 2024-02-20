class Livro {
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    quantidadeDisponivel: number;

    constructor(titulo: string, autor: string, editora: string, categoria: string, quantidadeDisponivel: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.categoria = categoria;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
    mostrarDados(){
   console.log('Dados Livros')
   console.log(`titulo:${this.titulo}`)
   console.log(`autor:${this.autor}`)
   console.log(`editora:${this.editora}`)
   console.log(`categoria:${this.categoria}`)
   console.log(`quantidade:${this.quantidadeDisponivel}`)
    }
}

class Usuario {
    nome: string;
    endereco: string
    telefone: string;
    relatorioEmprestimo: string;
    cpf:string

    constructor(nome: string, endereco: string, telefone: string, relatorioEmprestimo: string, cpf:string) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.relatorioEmprestimo = relatorioEmprestimo;
        this.cpf=cpf
    }
    mostrarDados(){
        console.log('Dados Usuarios')
        console.log(`nome:${this.nome}`)
        console.log(`endereço:${this.endereco}`)
        console.log(`telefone:${this.telefone}`)
        console.log(`relatorio emprestimo:${this.relatorioEmprestimo}`)
        console.log(`cpf:${this.cpf}`)
    }
}

class Emprestimo {
    livro: Livro;
    usuario: Usuario;
    dataEmprestimo: Date;
    dataDevolucao: Date;

    constructor(livro: Livro, usuario: Usuario, dataEmprestimo: Date, dataDevolucao: Date) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
    mostrarDados(){
        console.log('Dados Emprestimo')
        console.log(`livro:${this.livro}`)
        console.log(`usuario:${this.usuario}`)
        console.log(`data emprestimo${this.dataEmprestimo}`)
        console.log(`data Devolução:${this.dataDevolucao}`)
    }
}

const livro1 = new Livro('A Moreninha', 'Joaquim Manuel de Macedo', 'Editora B', 'Romance', 0 );

const usuario1 = new Usuario('João', 'Rua b, 191', '099900000', "emprestimo ativo", "0987766554");

const emprestimo1 = new Emprestimo(livro1, usuario1, new Date(2024- 2-19), new Date(2024- 4-5));

console.log(livro1.mostrarDados())
console.log(emprestimo1.mostrarDados())
console.log(usuario1.mostrarDados())
