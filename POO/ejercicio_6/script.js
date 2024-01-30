// 6. Implementar la clase operaciones. Se deben cargar dos valores enteros, 
// calcular su suma, resta, multiplicación y división, cada una en un método, 
// imprimir dichos resultados.

class Operaciones{
    #valor1;
    #valor2;

    constructor(valor1, valor2){
        this.#valor1 = valor1;
        this.#valor2 = valor2;
    }

    getValor1 () {
        return this.#valor1 

    }

    getValor2(){
        return this.#valor2
    }

    getConseguirValores(){
        this.#valor1 = parseInt(prompt("introduce el primer valor"))
        this.#valor2 = parseInt(prompt("intoduce el segundo valor"))
    }

    getSuma(){

        let resultado =  this.#valor1 + this.#valor2 

         console.log(resultado)

    }

    getResta(){
        let resultado =  this.#valor1 - this.#valor2 

         console.log(resultado)
    }

    getDivision(){
        let resultado =  this.#valor1 / this.#valor2 

         console.log(resultado)
    }

    getMultiplicacion(){

        let resultado =  this.#valor1 * this.#valor2 

         console.log(resultado)
    }

    

}

let newOperaciones = new Operaciones ()

newOperaciones.getConseguirValores()
newOperaciones.getSuma()
newOperaciones.getResta()
newOperaciones.getDivision()
newOperaciones.getMultiplicacion()