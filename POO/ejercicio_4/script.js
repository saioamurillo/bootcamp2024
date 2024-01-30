// 4. Desarrollar una clase que represente un Cuadrado (Cuatro lados 
// iguales) con un parámetro introducido por el usuario. Que tenga los 
// siguientes métodos: 
// a. cargar el valor de su lado. 
// b. imprimir su perímetro y su superficie. (La superficie de un 
// cuadrado se calcula multiplicando el lado al cuadrado).

class Cuadrado{
    #medida;

    constructor(medida){
        this.#medida = medida;
    }

    getMedida(){
        return this.#medida
    }

    getPerimetro (){

        return ((medida*4))
    }

    getSuperficie(){

        return ((medida*medida))
    }
        
}

let medida = prompt("Introduce la medida de tu cuarado")

let newCuadrado = new Cuadrado (medida)

console.log("El perimetro de tu cuadrado es " + newCuadrado.getPerimetro() + " y la superficie de tu cuadrado es " + newCuadrado.getSuperficie())