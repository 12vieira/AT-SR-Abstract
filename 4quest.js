//Crie um objeto Carro com os atributos marca, modelo e velocidade. Adicione um método
//acelerar() que aumente a velocidade em 10 e exiba a mensagem "Velocidade atual:
//[velocidade] km/h"

class Carro{
    constructor(marca, modelo, velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    acelerar(){
        const speed = this.velocidade + 10;
        console.log(`Velocidade atual: ${speed}km/h`);
    }
}
const car = new Carro('citroen', 'c3',60);
car.acelerar();
