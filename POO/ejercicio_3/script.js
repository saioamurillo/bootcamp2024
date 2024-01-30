// 3. Desarrollar una clase que represente un punto en el plano (Atributos ‘x’ 
//     e ‘y’) con parámetros introducidos por el usuario. Y que tenga los 
//     siguientes métodos: 
//     a. Cargar los valores de x e y pedidos al usuario por teclado.  
//     b. Imprimir en qué cuadrante se encuentra dicho punto (concepto 
//     matemático, primer cuadrante si x e y son positivas, si x<0 e y>0 
//     segundo cuadrante, etc.).

class Punto{
    #puntoX;
    #puntoY;

    constructor(puntoX, puntoY){
        this.#puntoX = puntoX;
        this.#puntoY = puntoY;
    }

    getPuntoX() {
        return this.#puntoX;
    }

    getPuntoY(){
        return this.#puntoY;
    }

    getCuadrante(){
        if(puntoX > 0 && puntoY > 0){
            return alert("Tu cuadrante es el 1 (+x, +y)")
        }

        else if(puntoX < 0 && puntoY > 0){
            return alert("Tu cuadrante es el 2 (-x, +y)")
        }

        else if(puntoX > 0 && puntoY < 0){
            return alert("Tu cuadrante es el 3 (+x, -y)")
        }

        else{
            return alert("Tu cuadrante es el 4 (-x, -y)")
        }
    }

}

let puntoX = prompt("Introduce tu punto X")
let puntoY = prompt("Introduce tu punto Y")

let newPunto = new Punto (puntoX, puntoY)

console.log(newPunto.getCuadrante())

