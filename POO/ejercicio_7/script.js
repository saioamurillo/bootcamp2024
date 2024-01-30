// 7. Diseñar una clase llamada Alumno con los atributos: nombre, y un array 
// con las 5 notas enteras de ese alumno y las siguientes funciones: 
// ∙ El constructor mete los datos del array e inicialice también el 
// nombre con los valores.  
// ∙ Un método llamado mejorNota que devuelve la mejor nota.  
 
// ∙ Otro llamado menorNota que devuelve la menor de las notas.  
// ∙ Otro llamado notaMedia que devuelve la nota media. 
// Realizar una aplicación que haga uso de dicha clase. Para ello pediremos 
// todos los datos y se mostrará la siguiente información: 
// ∙ El nombre del alumno  
// ∙ Su mejor nota  
// ∙ Su peor nota  
// ∙ Su nota media

class Alumno{
    #nombre;
    #notas;

    constructor(nombre, array){
        this.#nombre = nombre;
        this.#notas = array;
    }

    getNombre(){
        return this.#nombre;
    }

    getNotas(){
        return this.#notas;
    }

    getMuestraDatos(){
        this.#nombre = prompt("Cuál es tu nombre")
        this.#notas = [1,2,3,4,5]

        console.log(this.#nombre + ", estas son tus notas: " + this.#notas)

    }

    getMejorNota(){

        this.#notas = [1,2,3,4,5]

         console.log("La nota media es " + Math.max(...this.#notas))
    }

    getMenorNota(){

        this.#notas = [1,2,3,4,5]

        console.log("La menor nota es " + Math.min(...this.#notas))
    }

    getNotaMedia(){

        this.#notas = [1,2,3,4,5]

        let NotaMedia = this.#notas.reduce(function(total,actual){
            return total+=actual
        }) 

        console.log("La nota media es " + (parseInt(NotaMedia) / 5))
    }
}


let newAlumno = new Alumno ();

newAlumno.getMuestraDatos()
newAlumno.getMejorNota()
newAlumno.getMenorNota()
newAlumno.getNotaMedia()