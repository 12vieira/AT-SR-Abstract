//Crie um objeto Livro com os atributos titulo, autor, e anoPublicacao. Adicione um
//método resumo() que exiba uma mensagem como "O livro [titulo] foi escrito por [autor] em
//[anoPublicacao]".

class Livro{
    constructor(titulo, autor, anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    resumo(){
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor} em ${this.anoPublicacao}`);
    }
}

const book = new Livro("O Hobbit","Tolkien",1996);
book.resumo();