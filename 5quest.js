//Crie um objeto Cachorro com os atributos nome e raca. Adicione um método latir() que
//exiba a mensagem "O cachorro [nome] está latindo!".

class Cachorro{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
    latir(){
        console.log(`O cachorro ${this.nome} está latindo!`);
    }
}

const dog = new Cachorro('clebinho',   'vira-lata');
dog.latir();