//Crie um objeto Produto com os atributos nome, preco e estoque. Adicione um método
//verificarEstoque() que exiba "Ainda restam [estoque] unidades de [nome]".

class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    verificarEstoque(){
        console.log(`Ainda restam ${this.estoque} unidades de ${this.nome}`)
    }
}
const product = new Produto("bicicleta", 1500, 23);
product.verificarEstoque();