function convertirMoneda() {
    let cantidadEuros = parseFloat(prompt("Ingrese la cantidad de euros: "));
    let monedaDestino = prompt("Ingrese la moneda a la que desea convertir (libras, dolares, o yenes): ");
    let tasaCambio;
    let resultado;

    switch (monedaDestino) {
        case "libras":
            tasaCambio = 0.86;
            break;
        case "dolares":
            tasaCambio = 1.28611;
            break;
        case "yenes":
            tasaCambio = 129.852;
            break;
        default:
            console.log("Moneda no válida. Por favor, elija entre libras, dolares o yenes.");
            return;
    }

    resultado = cantidadEuros * tasaCambio;
    alert(`${cantidadEuros} euros son ${resultado} ${monedaDestino}`);
}

convertirMoneda();


