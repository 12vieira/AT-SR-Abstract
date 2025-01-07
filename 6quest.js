//Crie um objeto Estudante com os atributos nome, curso e anoIngresso. Adicione um
//método apresentar() que exiba "Meu nome é [nome], estudo [curso] e entrei em
//[anoIngresso]".

class Estudade{
    constructor(nome, curso, anoIngresso){
        this.nome = nome;
        this.curso = curso;
        this.anoIngresso = anoIngresso;
    }
    apresentar(){
        console.log(`Meu nome é ${this.nome}, estudo ${this.curso} e entrei em ${this.anoIngresso}`);
    }
}

const aluno = new Estudade('Jorge','Biologia',2020);
aluno.apresentar();