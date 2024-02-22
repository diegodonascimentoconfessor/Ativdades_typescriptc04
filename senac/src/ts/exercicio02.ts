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

class Usuario {
    constructor(
        public nome: string,
        public endereco: string,
        public telefone: string,
        public relatorioEmprestimo: string,
        public cpf: string) { }
    mostrarDados() {
        console.log('Dados Usuarios')
        console.log(`nome:${this.nome}`)
        console.log(`endereço:${this.endereco}`)
        console.log(`telefone:${this.telefone}`)
        console.log(`relatorio emprestimo:${this.relatorioEmprestimo}`)
        console.log(`cpf:${this.cpf}`)
    }
}

class Emprestimo  {

    constructor(
        public livro: Livro,
        public usuario: Usuario,
        public dataEmprestimo: Date,
        public dataDevolucao: Date) { }
    mostrarDados() {
        console.log('Dados Emprestimo')
        console.log(`livro:${this.livro}`)
        console.log(`usuario:${this.usuario}`)
        console.log(`data emprestimo${this.dataEmprestimo}`)
        console.log(`data Devolução:${this.dataDevolucao}`)
    }
}

const livro1 = new Livro('A Moreninha', 'Joaquim Manuel de Macedo', 'Editora B', 'Romance', 0);

const usuario1 = new Usuario('João', 'Rua b, 191', '099900000', "emprestimo ativo", "0987766554");

const emprestimo1 = new Emprestimo(livro1, usuario1, new Date(2024 - 2 - 19), new Date(2024 - 4 - 5));

console.log(livro1.mostrarDados())
console.log(emprestimo1.mostrarDados())
console.log(usuario1.mostrarDados())
