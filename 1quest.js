//Crie um objeto Pessoa que tenha os atributos nome e idade, e um método apresentar()
//que exiba no console uma mensagem como "Olá, meu nome é [nome] e tenho [idade] anos".

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const person = new Pessoa('Matheus',27);
person.apresentar();
