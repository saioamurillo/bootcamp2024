// 2. Crea una clase Triangulo, cuyos atributos serán los lados que lo 
// componen. La clase contará con los siguientes métodos: 
// a. un método que calcule e imprima el valor del lado mayor.  
// b. Otro método que muestre si es equilátero o no. (Un triángulo es 
// equilátero cuando sus 3 lados son iguales).

class Triangulo{
    #lado1;
    #lado2;
    #lado3;

    constructor(lado1, lado2, lado3){
        this.#lado1 = lado1;
        this.#lado2 = lado2;
        this.#lado3 = lado3;
    }

    getLado1() {
        return this.#lado1;
    }

    getLado2(){
        return this.#lado2;
    }

    getLado3(){
        return this.#lado3;
    }

    getLadoMayor(){
        if(lado1 > lado2 && lado1 > lado3){
            return this.#lado1
        }

        else if(lado2 > lado1 && lado2 > lado3){
            return this.#lado2
        }
         
        else if(lado3 > lado1 && lado3 > lado2){
            return this.#lado3
        }

        else if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
            return alert("Tu triangulo es equilatero")
        }
    }
}

let lado1 = prompt("Primer lado")
let lado2 = prompt("Segundo lado")
let lado3 = prompt("Tercer lado")

let triangulazo = new Triangulo(lado1, lado2, lado3);

console.log("El lado mayor tiene la longitud de " + triangulazo.getLadoMayor() + " cm")
