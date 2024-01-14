function dividirNumeros(num1, num2) {
    return num1 / num2;
}

while (true) {
    
    let numero1 = parseInt(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número (0 para salir):"));
    
    if (numero2 === 0) {

        alert("¡Adiós!");
        
        break;  
    }

    let resultado = dividirNumeros(numero1, numero2);

    alert(resultado);
}