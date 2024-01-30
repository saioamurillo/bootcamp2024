// 5. Confeccionar una clase que represente un Empleado. Definir como 
// atributos su nombre y su sueldo. Confeccionar los métodos: 
// a. Cargar datos, suministrados por teclado. 
// b. Otro para imprimir sus datos y  
// c. Por último uno que imprima un mensaje si debe pagar impuestos 
// (si el sueldo supera a 3000). 

class Empleado{
    #nombre;
    #sueldo;

    constructor(nombre, sueldo){
        this.#nombre = nombre;
        this.#sueldo = sueldo;
    }

    muestraSueldo() {
        return this.#sueldo

    }

    muestraNombre(){
        return this.#nombre
    }

    getPreguntas(){
        this.#nombre = prompt("¿Cual es tu nombre?")
        this.#sueldo = prompt("¿Cual es tu sueldo?")
    }

    muestraDatos(){

         console.log(this.muestraNombre() + this.muestraSueldo())
    }

    getImpuestos(){

        if(this.muestraSueldo() > 3000){
            return console.log(" y tiene que pagar impuestos")
        }

        else{
             return console.log("")
        }
    }

}

let newEmpleado = new Empleado ()

newEmpleado.getPreguntas()
newEmpleado.muestraDatos()
newEmpleado.getImpuestos()


