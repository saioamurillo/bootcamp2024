function numeros (primerNumero, segundoNumero) {
    return primerNumero > segundoNumero;
}

    let primerNumero = parseInt(prompt("Introduce el primer numero"));
    let segundoNumero = parseInt(prompt("Introduce el segundo numero"));
    
  
    if(numeros (primerNumero, segundoNumero)) {

        console.log("El primer número es más grande")
    }

    else {

        console.log("El primer número NO es más grande")
    }

   
numeros();