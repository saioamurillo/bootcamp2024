// 1. Crea una clase ‘Persona’ que permita cargar el nombre y la edad de una 
// persona. La Clase tendrá los siguientes métodos: 
// a. Uno que pida los datos al usuario por prompt. (Con esos datos 
// crea un nuevo objeto Persona desde el Main). 
// b. Uno que nos permita mostrar los datos de la persona. 
// c. Y finalmente uno que evalúe si la persona es mayor de edad y que 
// imprima un mensaje si es mayor de edad (edad>=18).



class Persona {
    #nombre;
    #edad;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(newNombre){
        this.#nombre = newNombre;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad (newEdad){
        this.#edad = newEdad;
    }

    getDatos(){
        return this.#nombre + this.#edad;
    }

    getMayorEdad(){
        
        if(edad >= 18){
            return this.#edad;
        }
         else {
            return alert("NIÑATO")
         }
    }
}


let nombre = prompt("Introduce tu nombre")
let edad = prompt("Introduce tu edad")

let saioa = new Persona(nombre, edad);

console.log(saioa);

console.log(saioa.getNombre() + " " + saioa.getEdad())

console.log(saioa.getMayorEdad())





