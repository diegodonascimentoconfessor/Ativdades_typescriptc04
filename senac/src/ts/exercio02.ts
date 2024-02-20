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
}

const livro1 = new Livro('A Moreninha', 'Joaquim Manuel de Macedo', 'Editora B', 'Romance', 0 );

const usuario1 = new Usuario('João', 'Rua b, 191', '099900000', "emprestimo ativo", "0987766554");

const emprestimo1 = new Emprestimo(livro1, usuario1, new Date(2024- 2-19), new Date(2024- 4-5));

console.log(usuario1.relatorioEmprestimo);
console.log(livro1)
console.log(emprestimo1)
