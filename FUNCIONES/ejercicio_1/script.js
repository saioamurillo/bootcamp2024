// let mixedArray = [2, 3, 5, 7, 9, 16, 25, 28, 31, 36];

// Imprimir solo números primos de un array: 
// Obtener el producto de los elementos en posiciones pares: 
// Calcular el factorial de un número usando reduce: 5
// Filtrar palabras que empiezan con una letra específica:
// Imprimir la suma acumulativa de los elementos de un array:
// Transformar un array de objetos a un array de strings:

// let people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 }
// ];

// Concatenar arrays de strings en una sola cadena:
// let namesArray = [
//     ["Ana", "Elena", "Luisa", "María",  ["Carlos", "David", "Gabriel", "Pedro"], "Sofía"],
// ];
// Filtrar números que son cuadrados perfectos:
// Imprimir la cantidad de vocales en cada palabra de un array:
// let colorsByCategoryArray = [
//     ["Rojo", "Verde", "Azul", "Morado", "Rosa", "Amarillo", "Naranja", "Negro", "Blanco", "Gris"]
// ];

// Obtener el logaritmo natural de cada número en un array:



let mixedArray = [2, 3, 5, 7, 9, 16, 25, 28, 31, 36];

let primos = [];

function esPrimo(numero) {

    let mitadNumero = numero / 2;

      for (let i = 2; i <= mitadNumero; i++) {

       if ((numero % i) == 0) { 

        return false;
       } 
     }
     return true;
}

for (let i = 0; i < mixedArray.length; i++) {

  if (esPrimo(mixedArray[i])) {

      primos.push(mixedArray[i])
  }
}

console.log(primos);



let numeros = [];

function esPar(numero){

    let division = numero / 2;

    for (let i =0; i<=division; i++){

        if((numero % i)==0){
            
        }
    }
}





