let edad = parseInt(prompt("Introduce tu edad"))

if (edad < 18) {
    alert("No puedes alquilar un coche,  niñato")
}
else {
    let carnet = prompt("¿Tienes carnet de conducir?")


    if (carnet == "no"){
        alert("No puedes alquilar un coche,  niñato")
    }

    else if (carnet == "si") {

        let nombre
        nombre = prompt("Introduce tu nombre")

        let apellido 
        apellido = prompt("Introduce tu apellido")

        let ciudad 
        ciudad = prompt("Introduce tu ciudad de recogida")

        let días 
        días = prompt("Cuatos días quieres alquilar")
        
        console.log("Don/Doña " + nombre + apellido + " alquilará un cohe en " + ciudad + "para " + días + " días, con un coste total de " + (días*25) + "euros.")
    }
      
}

