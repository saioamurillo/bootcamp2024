// let personaUno = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }

// let personaDos = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }

// let personaTres = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }

// let personaCuatro = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }

// let personaCinco = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }

// let personaSeis = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }

// let personaSiete = {
//     nombre: 'Peio',
//     apellido: 'murguia',
//     edad: 35,
//     dni: 'luego',
//     telefono: 'oslosabeis'
// }


//EJEMPLO ENCAPSULACIÓN

class Persona {
    #nombre;
    #apellido;
    #dni;
    #telefono;

    constructor(nombre, apellido, dni, telefono){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#dni = dni;
        this.#telefono = telefono;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(newNombre){
        this.#nombre = newNombre;
    }

    getApellido() {
        return this.#apellido;
    }

    setApellido(newApellido){
        this.#apellido = newApellido;
    }

    getDni() {
        return this.#dni;
    }

    setDni(newDni){
        this.#dni = newDni;
    }

    getTelefono() {
        return this.#telefono;
    }

    setTelefono(newTelefono){
        
        this.#telefono = newTelefono;
    }

    #saludar(){
        console.log('hola, buenas tardes');
    }

    saludarEnIngles(){
        console.log('hello, good morning');
        this.#saludar()
    }
}

let peio = new Persona('Peio', 'Murguia', 'luego', 'losabeis');
// console.log(peio);
let dni = peio.getDni()
peio.saludarEnIngles()
// peio.nombre = "Peio";
// peio.apellido = "Murguia";
// // peio.apellid = "Murguia"
// peio.#dni = "luego";
// peio.telefono = "oslosabeis";
// console.log(peio);



// EJEMPLO HERENCIA
class Vehiculo {
    #marca;
    #modelo;
    #cilindrada;

    constructor(marca, modelo, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#cilindrada = cilindrada;
    }

    getMarca(){
        return this.#marca;
    }

    setMarca(newMarca){
        this.#marca = newMarca;
    }

    movimiento(){
        console.log('voy por el suelo');
    }
}

let vehicle = new Vehiculo('audi', 'a3', 1900)

console.log(vehicle);

class Moto extends Vehiculo {
    movimiento() {
        console.log('haciendo caballitos');
    }
}

class Avion extends Vehiculo {
    #numAlas;

    constructor(marca, modelo, cilindrada, numAlas){
        super(marca, modelo, cilindrada);
        this.#numAlas = numAlas;
    }

    getNumAlas(){
        return this.#numAlas;
    }

    setNumAlas(newNumAlas) {
        this.#numAlas = newNumAlas;
    }

    movimiento(){
        console.log('voy por el aire');
    }
}

let avion = new Avion('boeing', '747', 74823209, 2)
console.log(avion);

let moto = new Moto();

vehicle.movimiento();
moto.movimiento();
avion.movimiento();
