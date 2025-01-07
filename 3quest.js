//Crie um objeto Celular com os atributos marca, modelo e bateria. Adicione um método
//verificarBateria() que exiba a mensagem "A bateria está em [bateria]%".

class Celular {
    constructor(marca, modelo, bateria){
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
    }
    verificarBateria(){
        console.log(`A bateria está em ${this.bateria}%`)
    }
}
const phone = new Celular("Motorola", "G52", 86)
phone.verificarBateria();